import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import authActions from '../../../../services/auth/authActions';

const SendCode = props => {

    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { t } = useTranslation()
    const { sendCode } = authActions

    const onFinish = () => {
        form.validateFields().then((values) => {
            dispatch(sendCode(values))
        })
    }

    return (
            <Form
                name='send-code'
                form={form}
                scrollToFirstError
                onFinish={onFinish}>
                
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
                    <Input prefix={<MailOutlined/>} placeholder={t('email')} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>{t('sendCode')}</Button>
                </Form.Item>
            </Form>
    );
};

SendCode.propTypes = {
    
};

export default SendCode;