import { ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const {Title, Text} = Typography;
export const Desktop = () => {

    useHideMenu(false);
    const [user] = useState(getUserStorage());
    const history = useHistory();

    const salir = () => {
        localStorage.clear();
        history.replace('/enter');
    }

    const siguienteTicket = () => {
        console.log('siguienteTicket');
    }

    if(!user.username || !user.desk){
        return <Redirect to="/enter"/>
    }

    return (
        <>
            <Row>
                <Col span={20}>
                  <Title level={2}></Title>
                  <Text>Usted esta trabajando en el escritorio: </Text>
                  <Text type="success">{user.desk}</Text>  
                </Col>

                <Col span={4} align="right">
                    <Button
                    shape="round"
                    type="danger"
                    onClick={salir}
                    >
                        <CloseCircleOutlined/>
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col>
                <Text>Esta atendiendo el ticket numero: </Text>
                <Text 
                style={{fontSize: 30}}
                type="danger"
                >
                    55
                </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                <Button
                onClick={siguienteTicket}
                shape="round"
                type="primary"
                >
                    <ArrowRightOutlined />
                    Siguiente
                </Button>
                </Col>
            </Row>
        </>
    )
}
