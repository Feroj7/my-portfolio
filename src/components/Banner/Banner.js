import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="my-5">
            <Container style={{ backgroundColor: '#C8DAE8', paddingTop: '80px', paddingBottom: '80px', borderRadius: '30px' }}>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <img className="img-fluid" style={{ height: '300px', borderRadius: '30px' }} src="https://i.ibb.co/cQQBXvd/IMG-20210430-071410-min-1-removebg-preview.png" alt="" />
                    </Col>
                    <Col className="pt-5 text-start">
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>Hi, I’m Feroj Alam</h1>
                        <h1 className="mb-5">a Web Developer</h1>
                        <a href="https://drive.google.com/file/d/14Rppt4WX_q_ipV9d9oC1cjn479ZGT6MG/view?usp=sharing" target="_blank"><Button>Resume</Button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;