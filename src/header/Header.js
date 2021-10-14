import React from 'react';
import './Header.css';
import {Navbar,Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
    <Navbar collapseOnSelect expand="lg" variant="dark" className="p-3 nav-bg">
    <Container fluid>
    <Navbar.Brand href="#home" className="fw-bold fs-1">Fortune</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto mx-auto">
      <Nav.Link as={Link} to="/home" className="text-white me-3">Home</Nav.Link>
      <Nav.Link as={Link} to="/features" className="text-white me-3">Features</Nav.Link>
      <Nav.Link as={Link} to="screenshots" className="text-white me-3">Screenshots</Nav.Link>
      <Nav.Link as={Link} to="/news" className="text-white me-3">News</Nav.Link>
      <Nav.Link as={Link} to="/download" className="text-white me-3">Download</Nav.Link>
    </Nav>

    <Nav>
      <Nav.Link as={Link} to="/contact" className="text-white">
      <i class="fas fa-share-alt header-share"></i>
      </Nav.Link>
    </Nav>
</Navbar.Collapse>
    </Container>
  </Navbar>     
    );
};

export default Header;