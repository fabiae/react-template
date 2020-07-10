import React, { useEffect } from 'react'
import { Form, Input, Button, Spin, Alert, Row, Col } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'

import authActions from '../../../services/auth/authActions'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const SignUp = props => {

    const dispatch = useDispatch()
    const {
        loading: { loadignSignup, loadingAvailable },
        error: { errorSignup },
        message: { messageSignup },
        available
    } = useSelector(state => state.auth)

    const [form] = Form.useForm()
    const { t } = useTranslation()
    const { userAvailable, signUp, resetError } = authActions

    const onFinish = () => {
        form.validateFields().then((values) => {
            dispatch(signUp(values))
        })
    }

    const changeUsername = () => {
        const username = form.getFieldValue('username')
        if (username)
            dispatch(userAvailable(username))
    }

    useEffect(() => {
        return () => {
            dispatch(resetError())
        }
    }, [])

    return (
        <div style={{ padding: '80px 50px', width: '450px', display: 'inline-block' }}>
            <Form
                name='signup'
                form={form}
                scrollToFirstError
                onFinish={onFinish}>

                <Row>
                    <Col span={23}>
                        <Form.Item
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message: t('usernameRequired')
                                },
                                {
                                    min: 6,
                                    message: t('usernameLenght')
                                },
                                () => ({
                                    validator(rule, value) {
                                        if (!available && value)
                                            return Promise.reject(t('userAvailable'))
                                        return Promise.resolve();
                                    }
                                })
                            ]}>
                            <Input prefix={<UserOutlined />} placeholder={t('username')} onChange={changeUsername} />
                        </Form.Item>
                    </Col>
                    <Col span={1}>
                        <Spin spinning={loadingAvailable}>
                            {available ? <CheckOutlined /> : <CloseOutlined />}
                        </Spin>
                    </Col>
                </Row>

                <Col span={23}>
                    <Form.Item
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: t('emailRequired')
                            },
                            {
                                type: 'email',
                                message: t('emailType')
                            }
                        ]}>
                        <Input name="email" prefix={<MailOutlined />} placeholder={t('email')} />
                    </Form.Item>
                </Col>

                <Col span={23}>
                    <Form.Item
                        name='password'
                        hasFeedback
                        rules={[{
                            required: true,
                            message: t('passwordRequired')
                        }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder={t('password')} />
                    </Form.Item>
                </Col>

                <Col span={23}>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: t('confirmPassword'),
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(t('confirmPasswordRule'));
                                },
                            }),
                        ]}>
                        <Input.Password prefix={<LockOutlined />} placeholder={t('confirmPassword')} />
                    </Form.Item>
                </Col>

                <Spin spinning={loadignSignup}>{
                    errorSignup ?
                        <Alert
                            type="error"
                            showIcon
                            closable
                            message={messageSignup} /> : null
                }</Spin>

                <Form.Item>
                    <Button
                        block
                        type='primary'
                        htmlType='submit'>
                        {t('signup')}
                    </Button>
                    {t('or')} <Link to="/signin">{t('signin')}</Link>
                </Form.Item>

            </Form>
        </div>
    )
}

SignUp.propTypes = {

}

export default SignUp