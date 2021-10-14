import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className="about">
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
        <h1 className="about-title">What is Fortune</h1>
        <p className="about-p">Fortune is a chat app for mobile devices. Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper. Pellentesque aliquet nunc at mauris congue, sed facilisis mauris tincidunt.</p>

<p className="about-p">Nam a scelerisque felis. Mauris in velit velit. Nullam porttitor sapien non fermentum.</p>
<Button variant="danger" className="px-5 rounded-pill fw-bold p-3 button-about">Screenshoot</Button> 
    </Col>
    
    <Col sm={12} md={6} lg={6}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/mockup_5.png" className="img-fluid w-75"></img></Col>
  </Row>
</Container>
        </div>
    );
};

export default About;