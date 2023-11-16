import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LinkedInLogo from '../assets/img/LinkedInLogo';
import InstagramLogo from '../assets/img/InstagramLogo';
import GitHubLogo from '../assets/img/GitHubLogo';
import '../assets/styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col className="socials text-center">
                        <a href="https://www.linkedin.com/in/sai-kishore-salaka-0112358/" target="_blank" rel="noreferrer">
                            <LinkedInLogo className="footer-icon" />
                        </a>
                        <a href="https://github.com/sai2009kishore" target="_blank" rel="noreferrer">
                            <GitHubLogo className="footer-icon" />
                        </a>
                        <a href="https://www.instagram.com/coder_0112358/" target="_blank" rel="noreferrer">
                            <InstagramLogo className="footer-icon" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <span style={{ backgroundColor: 'black', padding: '0 4px 4px 4px' }}>Handcrafted by <b>Sai Kishore Salaka</b></span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;