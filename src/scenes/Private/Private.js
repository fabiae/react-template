import React from 'react'
import { Layout, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

import Head from '../../components/Head/Head'
import token from '../../@common/storage/token'

const { Content, Footer } = Layout
const { Text } = Typography

const Private = props => {

    const { t } = useTranslation()
    const data = token.decode()

    return (
        <Layout>
            <Head />
            <Content style={{ minHeight: '70vh', background: '#cecece' }}>

                <Row style={{ margin: '20px' }}>
                    <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '20px' }}>
                        {t('welcome')} {data.username} : {data.roles.map(role => role + " ")}
                    </Text>
                </Row>

            </Content>
            <Footer style={{ fontSize: '12px', textAlign: 'left' }}>Footer delivery</Footer>
        </Layout>
    )
}

Private.propTypes = {

}

export default Private