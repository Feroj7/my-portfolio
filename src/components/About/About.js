import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5" id="about">
            <Container>
                <h1 className="mb-4">About Me</h1>
                <div className="w-50 m-auto">
                    <div>
                        <img style={{ width: "200px", height: "200px", borderRadius: "50%", border: "1px solid gray" }} className="img-fluid mb-4" src="https://i.ibb.co/XFgKYYk/Ferojdm.jpg" alt="" />
                        <p>I am Feroj Alam, a passionate web developer specialize in front end technologies like JavaScript, React.js, HTML, CSS, Bootstrap, React Bootstrap, Material UI etc. I have also worked with Node.js, Express.js, MongoDB.
                            Explore new technologies and tools and building new projects is my hobby.</p>
                    </div>
                </div>
                {/* <Row xs={1} md={2}>
                    <Col className="pt-5 text-center">
                        <img style={{ width: "200px", height: "200px", borderRadius: "50%", border: "1px solid gray" }} className="img-fluid mb-4" src="https://i.ibb.co/XFgKYYk/Ferojdm.jpg" alt="" />
                    </Col>
                    <Col className="pt-5 text-start mt-5">
                        <p>I am Feroj Alam, a passionate web developer specialize in front end technologies like JavaScript, React.js, HTML, CSS, Bootstrap, React Bootstrap, Material UI etc. I have also worked with Node.js, Express.js, MongoDB.
                            Explore new technologies and tools and building new projects is my hobby.</p>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default About;