import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
        <div className="my-5">
            <Container>
                <h1 className="mb-5">My Projects</h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <div className="project-card">
                            <img className="img-fluid" src="https://i.ibb.co/SNQph25/tour.jpg" alt="" />
                            <h3 className="mt-3">Tour Express</h3>
                            <p>A MERN stack project</p>
                            <Button>View Detail</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-card">
                            <img className="img-fluid" src="https://i.ibb.co/BfXVdMn/employee.jpg" alt="" />
                            <h3 className="mt-3">Employee Hiring Site</h3>
                            <p>A React SPA</p>
                            <Button>View Detail</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-card">
                            <img className="img-fluid" src="https://i.ibb.co/b3bJ49t/bicycle.jpg" alt="" />
                            <h3 className="mt-3">Bicycle Store</h3>
                            <p>A MERN stack project</p>
                            <Button>View Detail</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;