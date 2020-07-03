import React from 'react'
import { Button, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const Main = props => {

    const history = useHistory()
    const { t } = useTranslation()

    return (
        <div style={{ paddingTop: '35vh' }}>
            <Row justify="center">
                <Col>
                    <Button onClick={() => history.push('/signin') }>
                        {t('signin')}
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => history.push('/signup')}>
                        {t('signup')}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

Main.propTypes = {
    
}

export default Main