import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Technology.css'
const Technology = () => {
    return (
        <div className="bg-dark p-5 technology">
            <Container fluid>
  <Row>
    <Col>
    <h1 className="text-white text-center fw-bold mt-5 technology-title">Features</h1>
    <p className="text-white technology-p mt-3">We integrated(still doing) some great features. it results awesome <br></br>design and great user experience.
</p>
    
    </Col>
  </Row>
</Container>

<Container fluid className="text-white mt-5">
  <Row>
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="fab fa-google-play icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">Walkthroughs</h5>
    <p className="mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
    
    </Col>
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="fas fa-chart-line icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">Statistic Analysis</h5>
    <p className="mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
</Col>
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="fas fa-bars icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">Navigation Panel</h5>
    <p className="mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
    </Col>
  </Row>
  <Row className="mt-5">
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="fas fa-camera-retro icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">In-built Camera App</h5>
    <p className="text-center mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
</Col>
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="far fa-comments icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">Chat Options</h5>
    <p className="mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
</Col>
    <Col sm={12} md={4} lg={4}>
    <Container>
  <Row>
    <Col sm={12} lg={3} md={3}><i class="fas fa-shopping-cart icon-technology mb-3"></i></Col>
    <Col sm={12} lg={9} md={9}>
    <h5 className="fw-bold">In-App Purchase</h5>
    <p className="mb-5">
    Integer sit amet viverra nibh. Curabitur condimentum sed nisi in ullamcorper.
    </p>
    </Col>
  </Row>
</Container>
</Col>
  </Row>
</Container>
        </div>
    );
};

export default Technology;