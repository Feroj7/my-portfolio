import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="my-5">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col className="text-start" style={{ paddingTop: '110px' }}>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>Hi, I’m <span style={{ color: '#0B5ED7' }}>Feroj Alam</span></h1>
                        <h1 className="mb-5">a Web Developer</h1>
                        <a href="https://drive.google.com/file/d/14Rppt4WX_q_ipV9d9oC1cjn479ZGT6MG/view?usp=sharing" target="_blank"><Button>Resume</Button></a>
                    </Col>
                    <Col>
                        <img className="img-fluid" src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e4708c4q9n2axj2vqjjuvem31u86np7pu5r1llvi0d1&rid=giphy.gif&ct=g" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;