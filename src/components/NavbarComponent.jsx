import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EncryptEffect from './EncryptEffect';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/navbar.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} onToggle={setExpanded} fixed="top" className="custom-navbar">
      <div className="container-fluid">
        <LinkContainer to='/home' onClick={handleNavLinkClick}>
          <Navbar.Brand className="custom-brand">
            <EncryptEffect text="SAI KISHORE SALAKA" speed={35} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-navlinks">
            <LinkContainer to='/home' onClick={handleNavLinkClick}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/resume' onClick={handleNavLinkClick}>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/gallery' onClick={handleNavLinkClick}>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about' onClick={handleNavLinkClick}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
