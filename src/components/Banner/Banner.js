import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Particles from "react-tsparticles";

const Banner = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="mt-5" style={{ backgroundColor: '#0D6EFD', paddingTop: '150px', paddingBottom: '150px' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#0D6EFD",
                    //     },
                    // },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
                height="1000px"
            />
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col className="text-start" style={{ paddingTop: '110px' }}>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>Hi, I’m <span style={{ color: '#fff' }}>Feroj Alam</span></h1>
                        <h1 className="mb-5">a Web Developer</h1>
                        <a href="https://drive.google.com/file/d/14Rppt4WX_q_ipV9d9oC1cjn479ZGT6MG/view?usp=sharing" target="_blank"><Button variant="info">Resume</Button></a>
                    </Col>
                    <Col>
                        {/* <img className="img-fluid" src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e4708c4q9n2axj2vqjjuvem31u86np7pu5r1llvi0d1&rid=giphy.gif&ct=g" alt="" /> */}
                        <img style={{ borderRadius: '10px' }} src="https://i.ibb.co/XFgKYYk/Ferojdm.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;