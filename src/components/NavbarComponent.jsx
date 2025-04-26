import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EncryptEffect from './EncryptEffect';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/bootstrap.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to='/home'>
        <Navbar.Brand><EncryptEffect text="Sai Kishore Salaka" speed={50} /></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to='/home'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/resume'>
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          {/* 
          <LinkContainer to='/projects'>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/interests'>
            <Nav.Link>Interests</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer> 
          */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;