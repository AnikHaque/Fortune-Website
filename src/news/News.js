    import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
    import './News.css';
    const News = () => {
        return (
            <div className="news">

<Container>
  <Row>
    <Col sm={12} lg={12} md={12}>
    <h1 className="text-center fw-bold screenshoots-title">Our News
</h1>
    <p>Often we spend time on blog, we posts latest trends, updates which <br></br> surrend us and release the change logs.</p>
    </Col>
  </Row>
</Container>

    <Container>
  <Row>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-16-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      10 things New York lovers could only understand
</Card.Title>
      <Card.Text className="text-dark">
        5 Dec, 2015
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-4-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      Wildlife could be amazing, see why.
</Card.Title>
      <Card.Text className="text-dark">
        4 Dec, 2019
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-3-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      10 things New York lovers could only understand
</Card.Title>
      <Card.Text className="text-dark">
        5 Dec, 2015
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
  </Row>
  <br></br>
  <br></br>
  <Row>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-8-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      10 things would say if you're a designer

</Card.Title>
      <Card.Text className="text-dark">
        2 Dec, 2017
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-1-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      Six things won’t go out of style
</Card.Title>
      <Card.Text className="text-dark">
        5 Dec, 2018
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
    <Col sm={12} lg={4} md={4}>
    <CardGroup>
    <Card className="border border-1 rounded-3 border-info">
    <Card.Img variant="top" src="http://demo.agnidesigns.com/fortune/demo8/wp-content/uploads/sites/9/2016/12/blog-thumbnail-16-600x600.jpg" className="img-fluid w-75 mx-auto mt-4" />
    <Card.Body>
      <Card.Title>
      Strange things that make you “WOW”
</Card.Title>
      <Card.Text className="text-dark">
        5 Sept, 2015
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">View More</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    </Col>
  </Row>
</Container>


            </div>
        );
    };
    
    export default News;