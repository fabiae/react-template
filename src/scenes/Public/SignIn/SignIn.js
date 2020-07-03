import React from 'react'
import { Form, Input, Button, Spin, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import authActions from '../../../services/auth/authActions'

const SignIn = props => {

    const dispatch = useDispatch()
    const { loading: { loadingSignin }, error: { errorSignin, message }} = useSelector(state => state.auth)
    const { t } = useTranslation()
    const [form] = Form.useForm()
    const { signIn } = authActions

    const onFinish = () => {
        form.validateFields().then((values) => {
            dispatch(signIn(values))
        })
    }

    return (
        <div style={{ padding: '80px 50px', width: '450px', display: 'inline-block' }}>
            <Form
                form={form}
                name="signin"
                onFinish={onFinish}
                scrollToFirstError>

                <Form.Item
                    name="username"
                    rules={[
                        { 
                            required: true, 
                            message: t('usernameRule')
                        }
                    ]}>
                    <Input prefix={<UserOutlined />} placeholder={t('username')} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { 
                            required: true, 
                            message: t('passwordRule') 
                        }
                    ]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder={t('password')} />
                </Form.Item>

                <Spin spinning={loadingSignin}>{
                    errorSignin ? 
                    <Alert
                        type="error"
                        showIcon
                        closable
                        message={message}/> : null
                }</Spin>

                <Form.Item>
                <Link to="/recover-pass">{t('forgotPassword')}</Link>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        {t('signinButton')}
                    </Button>
                {t('or')} <Link to="/signup">{t('registerNow')}</Link>
                </Form.Item>
                
            </Form>
        </div>
    )
}

SignIn.propTypes = {

}

export default SignIn