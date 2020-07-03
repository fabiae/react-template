import React, { useEffect } from 'react';
import { Layout, Spin, Row, Col } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import utilitiesActions from '../../../../services/utilities/utilitiesActions';
import { getIcon } from '../../../../@common/functions/getIcon';
import { Config } from '../../../../@common/config/config';
import logo from '../../../../logo.svg'

const { Header } = Layout

const HeaderPublic = props => {

    const dispatch = useDispatch()
    const { languages, loading: { loadingLanguages } } = useSelector(state => state.utilities)
    const { getLanguages, setLanguage } = utilitiesActions
    const appName = Config.get("NAME_APP")

    const handleLanguage = (language) => {
        dispatch(setLanguage(language))
    }

    useEffect(()=> {
        if(!languages)
            dispatch(getLanguages())
    },[])

    return (
        <Header>
            <Row>
                <Col span={2}>
                    <Link to="/">
                        <img style={{ width: '60px' }} alt='logo' src={logo}/>
                    </Link>
                </Col>
                <Col span={4} style={{ color: '#fff' }}>
                    { appName }
                </Col>
                <Col offset={13} span={5}>
                    <Spin spinning={loadingLanguages}>
                        { languages && 
                            languages.map(language => 
                                <img 
                                    key={language.id} 
                                    alt="" 
                                    src={getIcon(language.key)} 
                                    height={20} 
                                    width={40} 
                                    onClick={() => handleLanguage(language.key)}
                                    style={{ cursor: 'pointer' }} />
                        )}
                    </Spin>
                </Col>
            </Row>           
        </Header>
    );
};

HeaderPublic.propTypes = {
    
};

export default HeaderPublic;