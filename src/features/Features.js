import React from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import './Features.css'
const Features = () => {
    return (
        <div className="features">
    <Container fluid>
  <Row>
    <Col sm={12} md={5} lg={5}>
    <img src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/07/mockup_2.png" className="img-fluid w-75"></img>
    </Col>

    <Col sm={12} md={5} lg={5} className="">
    <h1 className="fw-bold features-title">Light weight &
Mobile Friendly App</h1>
<p className="features-p">Nam a scelerisque felis. Mauris in velit velit. Nullam porttitor sapien noni fermentum pellentesque. Ut tempor malesuada dui at varius. Sed vitae tincidunt tortor. Tempor justo non facilisis auctor.</p>

<Container fluid>
  <Row>
    <Col sm={12} lg={12} md={12}>
    <Button variant="danger" className="features-button rounded-pill">Danger</Button> 
    <i class="far fa-image image-icon"></i></Col>
    
  </Row>
</Container>
    
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Features;