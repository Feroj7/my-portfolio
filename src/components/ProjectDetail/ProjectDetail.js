import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetail = () => {

    const projects = [
        {
            id: "1",
            name: "Bicycle Store",
            description: "A full-stack Bicyle Store web app where people can buy different model bicycles. User can login or register by both email, password or google login. Client can see his/her orders in dashboard and can give a review. An admin can add a new bicycle from the dashboard. Admin can also manage user orders and make someone admin.",
            img1: "https://i.ibb.co/ckNWzcg/bicycle-store-1.png",
            img2: "https://i.ibb.co/bBvYW0W/screencapture-bicycle-store-64494-web-app-explore-2021-11-30-17-42-08.png",
            img3: "https://i.ibb.co/xCtjBHQ/screencapture-bicycle-store-64494-web-app-dashboard-2021-11-30-17-42-35.png",
            feature1: "Online shop of Bicycle including admin panel to add or remove bicycles.",
            feature2: "Users can order bicycles and show their orders and order status.",
            feature3: "Users can add review and reviews show on homepage.",
            feature4: "Admin can manage orders, order status and delete order also.",
            feature5: "Desktop and mobile responsive.",
            tech1: "React.js",
            tech2: "Node.js",
            tech3: "Express",
            tech4: "MongoDB",
            liveSite: "https://bicycle-store-64494.web.app/",
            clientSideCode: "https://github.com/Feroj7/bicyle-store-client-side",
            ServerSideCode: "https://github.com/Feroj7/bicycle-store-server-side"
        },
        {
            id: "2",
            name: "Tour Express",
            description: "A Single page web app with dashboard where people can pick destination to travel. A user can see his/her bookings and cancel from dashboard.",
            img1: "https://i.ibb.co/g40qjVR/tour-express-1.png",
            img2: "https://i.ibb.co/WFz4Trg/screencapture-tourism-site-5afb5-web-app-about-2021-11-30-17-44-34.png",
            img3: "https://i.ibb.co/1QDJBB8/screencapture-tourism-site-5afb5-web-app-dashboard-2021-11-30-17-40-46.png",
            feature1: "This is a digital tour booking site.",
            feature2: "Here you can found different destinations for your vaccation.",
            feature3: "You can book destination and also cancel your booking.",
            feature4: "Admin Dashboard - Manage all bookings and add a new destination.",
            feature5: "Admin Dashboard - Manage all bookings and add a new destination.",
            tech1: "React.js",
            tech2: "Node.js",
            tech3: "MongoDB",
            tech4: "Firebase",
            liveSite: "https://tourism-site-5afb5.web.app/",
            clientSideCode: "https://github.com/Feroj7/tour-express-client-side",
            ServerSideCode: "https://github.com/Feroj7/tour-express-server"
        },
        {
            id: "3",
            name: "Doctor Connect",
            description: "A Single page web where user can see details about doctor. Their chamber, address, visiting hour, visit etc.",
            img1: "https://i.ibb.co/dG1D6cS/doctor-connect-1.png",
            img2: "https://i.ibb.co/wdX7L4G/screencapture-healthcare-website-c82b6-web-app-about-2021-11-30-17-44-04.png",
            img3: "https://i.ibb.co/TktHvWc/screencapture-healthcare-website-c82b6-web-app-login-2021-11-30-17-44-15.png",
            feature1: "This is a digital doctor service site.",
            feature2: "Here you can found different departments expert doctors.",
            feature3: "You can show details about doctor. Their chamber, address, visiting hour, visit etc.",
            feature4: "You can book appointment of different doctors.",
            feature5: "Desktop and mobile responsive.",
            tech1: "React.js",
            tech2: "React Router",
            tech3: "Bootstrap",
            tech4: "Firebase",
            liveSite: "https://healthcare-website-c82b6.web.app/",
            clientSideCode: "https://github.com/Feroj7/doctors-connect"
        },
    ]

    const { id } = useParams();

    const matchedProject = projects?.find((project) => (project.id === id))

    return (
        <div className="my-5 py-5">
            <Container>
                <a className="me-3" href={matchedProject?.liveSite} target="_blank"><Button variant="outline-primary">Live Site</Button></a>
                <a className="me-3" href={matchedProject?.clientSideCode} target="_blank"><Button variant="outline-primary">Client Side Code</Button></a>
                {matchedProject.ServerSideCode && <a href={matchedProject?.ServerSideCode} target="_blank"><Button variant="outline-primary">Server Side Code</Button></a>}
                <Row className="mt-4">
                    <Col>
                        <img className="img-fluid" src={matchedProject?.img1} alt="" />
                    </Col>
                    <Col>
                        <img className="img-fluid" src={matchedProject?.img2} alt="" />
                    </Col>
                    <Col>
                        <img className="img-fluid" src={matchedProject?.img3} alt="" />
                    </Col>
                </Row>
                <div className="text-start mt-5">
                    <h3>Project Title: {matchedProject?.name}</h3>
                    <p>{matchedProject?.description}</p>
                    <ul>
                        <li>{matchedProject?.feature1}</li>
                        <li>{matchedProject?.feature2}</li>
                        <li>{matchedProject?.feature3}</li>
                        <li>{matchedProject?.feature4}</li>
                        <li>{matchedProject?.feature5}</li>
                    </ul>
                </div>
                {/* <div key={matchedProject?.id} className="mt-5 d-flex justify-content-center project-style">
                    <div>
                        <img className="img-fluid" src={matchedProject?.img1} alt="" />
                    </div>
                    <div className="text-start text-white p-4" style={{ backgroundColor: "#172A45" }}>
                        <h3>{matchedProject?.name}</h3>
                        <p>{matchedProject?.description}</p>
                        <span className="tech-bg">{matchedProject?.tech1}</span>
                        <span className="tech-bg">{matchedProject?.tech2}</span>
                        <span className="tech-bg">{matchedProject?.tech3}</span>
                        <span className="tech-bg">{matchedProject?.tech4}</span>
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default ProjectDetail;