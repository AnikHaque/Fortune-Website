import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import './Screenshoots.css';

const Screenshoots = () => {
    return (
        <div className="screenshoots">
            <Container>
  <Row>
    <Col sm={12} lg={12} md={12}>
    <h1 className="text-center fw-bold screenshoots-title">Screenshots</h1>
    <p>Here, we show you some of the screenshots of our amazing app. I am <br></br>sure, it will be so impressive.</p>
    </Col>
  </Row>
</Container>

<Container fluid>
  <Row>
    <Col sm={12} md={3} lg={3}>
    <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot1.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img>
    </Col>
    <Col sm={12} md={3} lg={3}>
    <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot2.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img>
    </Col>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot3.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img></Col>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot4.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-2"></img></Col>
  </Row>
  <br></br>
  <br></br>
  <Row>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot5.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img></Col>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot6.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img></Col>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot7.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3 mb-4"></img></Col>
    <Col sm={12} md={3} lg={3}><img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/applanding-screenshot8.jpg" class="img-fluid w-100 border border-danger border-3 rounded-3"></img></Col>
  </Row>
</Container>
        </div>
    );
};

export default Screenshoots;