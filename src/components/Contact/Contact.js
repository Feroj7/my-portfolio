import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_tqh6l63", "template_f74zxil", form.current, "user_CDpVF5TXHTDvtJ7OHaoGD")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (

        <div className="my-5" id="contact">
            <Container>
                <h1 style={{
                    color: "#06175c",
                    fontSize: "40px",
                    fontWeight: 800
                }}>Contact</h1>
                <Row xs={1} md={2} className="g-4">
                    {/* image area */}
                    <Col>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg" alt="contact" />
                    </Col>

                    {/* form area */}
                    <Col style={{ marginTop: '80px' }} className="text-start">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Enter your subject" name="subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" />
                            </Form.Group>
                            <input type="submit" value="Send" className="btn btn-info" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;