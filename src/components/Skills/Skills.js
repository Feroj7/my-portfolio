import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="my-5 py-5" id="skills">
            <Container>
                <h1>Skills</h1>
                <Row xs={2} md={4} className="g-4 mt-5">
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="" />
                    </Col>
                    <Col>
                        <img style={{ width: "70px" }} className="img-fluid" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;