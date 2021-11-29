import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {

    return (

        <div className="my-5">
            <Container>
                <h1>Contact</h1>
                <Row>
                    {/* image area */}
                    <Col>
                        <img src="https://image.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg" alt="contact" />
                    </Col>

                    {/* form area */}
                    <Col style={{ marginTop: '125px' }} className="text-start">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="success"><i className="fas fa-paper-plane"></i> Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;