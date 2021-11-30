import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Container style={{ backgroundColor: '#C8DAE8' }}>
                <Navbar expand="lg">
                    <Container>
                        <Link to="/home" style={{ textDecoration: "none" }}><Navbar.Brand style={{ border: "3px solid #172A45", padding: "5px" }}>Feroj</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;