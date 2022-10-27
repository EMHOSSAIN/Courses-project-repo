import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import LeftSide from '../Components/Page/LeftSide';

const Main = () => {
    return (
       <Container>
        <Header></Header>
        <Row>
            <Col lg='3' >
            <LeftSide> </LeftSide>
            </Col>
            
            <Col lg='9' >
            <Outlet> </Outlet>
            </Col>
        </Row>
       </Container>
    );
};

export default Main;