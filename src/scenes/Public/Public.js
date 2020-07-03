import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import Main from './Main/Main'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import HeaderPublic from './components/HeaderPublic/HeaderPublic'
import RecoverPassword from './RecoverPassword/RecoverPassword'

const { Footer, Content } = Layout

const Public = props => {

    return (
        <Layout>
            <HeaderPublic />
            <Content style={{ minHeight: '70vh' }}>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/recover-pass" component={RecoverPassword} />
                    <Route path="/" component={Main} />
                </Switch>
            </Content>
            <Footer style={{ fontSize: '12px', textAlign: 'left' }}> Footer react template App</Footer>
        </Layout>
    )
}

Public.propTypes = {
    
}

export default Public