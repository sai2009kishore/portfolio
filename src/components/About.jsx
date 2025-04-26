import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import '../assets/styles/about.css';

const About = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #654ea3, #eaafc8)";
    }, []);

    return (
        <div className="about main-content">
            <Container>
                <Row className="align-items-center" style={{ paddingTop: '2rem' }}>
                    <Col md={5} className="text-center">
                        <Image
                            src={require('../assets/img/profile-image.JPG')}
                            roundedCircle
                            alt="Profile Image"
                            className="about-img"
                        />
                    </Col>
                    <Col md={7}>
                        <h2>Hello, I'm Sai Kishore Salaka 👋</h2>
                        <p>
                            I'm a passionate developer based in Dallas, Texas. I completed my Master's in Computer Science from George Mason University and Bachelor's from GRIET.
                            I love building innovative software solutions, exploring new technologies, and solving real-world problems.
                        </p>
                        <p>
                            When I'm not coding, I enjoy running, strength training, sketching, or gaming.
                        </p>

                        <div className="quick-facts">
                            <h4>Quick Facts:</h4>
                            <ul>
                                <li><b>Location:</b> Dallas, Texas</li>
                                <li><b>Education:</b> MS in Computer Science, GMU</li>
                                <li><b>Interests:</b> Fullstack Development, Machine Learning, Cloud Computing</li>
                                <li><b>Soft Skills:</b> Teamwork, Communication, Problem-Solving</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
