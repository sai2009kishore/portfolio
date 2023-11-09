import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/bootstrap.css';
import { getContext } from '../assets/js/utils';

const NavbarComponent = () => {
  const context = getContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to={`${context}`}>
        <Navbar.Brand>Sai Kishore Salaka</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to={`${context}`}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${context}about`}>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${context}resume`}>
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${context}projects`}>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${context}interests`}>
            <Nav.Link>Interests</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${context}contact`}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
