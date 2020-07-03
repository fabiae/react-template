import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../../services/auth/authActions';

const NewPassword = props => {

    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { t } = useTranslation()
    const { recover: { userId }} = useSelector(state => state.auth)
    const { newPassword } = authActions

    const onFinish = () => {
        form.validateFields().then((values) => {
            const { password } = values
            dispatch(newPassword(password, userId))
        })
    }

    return (
        <Form
            name='new-password'
            form={form}
            scrollToFirstError
            onFinish={onFinish}>

            <Form.Item
                name='password'
                hasFeedback
                rules={[{
                    required: true,
                    message: t('passwordRule')
                }]}>
                <Input.Password prefix={<LockOutlined />} placeholder={t('newPassword')} />
            </Form.Item>
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
            <Form.Item>
                <Button type='primary' htmlType='submit'>{t('changePassword')}</Button>
            </Form.Item>
        </Form>
    );
};

NewPassword.propTypes = {

};

export default NewPassword;