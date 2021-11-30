import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Container>
                <Navbar bg="primary" expand="lg" fixed="top">
                    <Container>
                        <Link to="/home" style={{ textDecoration: "none" }}><Navbar.Brand className="text-white" style={{ border: "3px solid white", padding: "5px" }}>Feroj</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/home#skills">Skills</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/home#projects">Projects</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/home#about">About</Nav.Link>
                                <Nav.Link className="text-white" as={HashLink} to="/home#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;