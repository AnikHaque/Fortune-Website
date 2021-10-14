import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import './Grab.css'
const Grab = () => {
    return (
        <div className="bg-dark text-white p-5 grab">
            <Container>
  <Row>
    <Col sm={12} lg={12} md={12}>
    <h1 className="text-center fw-bold screenshoots-title mt-5">Grab it Now!</h1>
    <p>This app available for Andriods, iphones and Apple watches. You can <br></br> download the app via the below link easily.</p>

    <Container>
  <Row>
    <Col>
    <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/apple-240.png"></img>
    <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/andriod-240.png" className="mx-4"></img>
    </Col>
  </Row>
</Container>

    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Grab;