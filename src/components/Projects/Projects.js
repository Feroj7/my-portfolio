import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: "Bicycle Store",
            description: "A full-stack Bicyle Store web app where people can buy different model bicycles. User can login or register by both email, password or google login.",
            img: "https://i.ibb.co/b3bJ49t/bicycle.jpg",
            tech1: "React.js",
            tech2: "Node.js",
            tech3: "Express",
            tech4: "MongoDB",
        },
        {
            id: 2,
            name: "Tour Express",
            description: "A Single page web app with dashboard where people can pick destination to travel. A user can see his/her bookings and cancel from dashboard.",
            img: "https://i.ibb.co/SNQph25/tour.jpg",
            tech1: "React.js",
            tech2: "Node.js",
            tech3: "MongoDB",
            tech4: "Firebase",
        },
        {
            id: 3,
            name: "Doctor Connect",
            description: "A Single page web where user can see details about doctor. Their chamber, address, visiting hour, visit etc.",
            img: "https://i.ibb.co/K9FSRSw/doctor-connect-1.jpg",
            tech1: "React.js",
            tech2: "React Router",
            tech3: "Bootstrap",
            tech4: "Firebase",
        },
    ]

    return (
        <div className="my-5" id="projects">
            <Container>
                <h1 className="mb-5">My Projects</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project => <Col key={project.id}>
                            <Card
                                data-aos="zoom-in-down"
                                className="h-100 project-card">
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <p className="tech-bg w-25 d-inline">{project?.tech1}</p>
                                    <p className="tech-bg w-25 d-inline">{project?.tech2}</p>
                                    <p className="tech-bg w-25 d-inline">{project?.tech3}</p>
                                    <br />
                                    <br />
                                    <p className="tech-bg w-25 d-inline" style={{ marginTop: "30px" }}>{project?.tech4}</p>
                                    <br />
                                    <Link to={`/ProjectDetail/${project.id}`}><Button className="mt-5">View Detail</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
                {/* {
                    projects.map(project => <div key={project.id} className="mt-5 d-flex justify-content-around project-style">
                        <div>
                            <img className="img-fluid" src={project?.img} alt="" />
                        </div>
                        <div className="text-start text-white p-4" style={{ backgroundColor: "#172A45" }}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <span className="tech-bg">{project?.tech1}</span>
                            <span className="tech-bg">{project?.tech2}</span>
                            <span className="tech-bg">{project?.tech3}</span>
                            <span className="tech-bg">{project?.tech4}</span>
                            <br />
                            <Link to={`/ProjectDetail/${project.id}`}><Button className="mt-5">View Detail</Button></Link>
                        </div>
                    </div>)
                } */}
            </Container>
        </div>
    );
};

export default Projects;