import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import '../assets/styles/about.css';

const About = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to top right, #159957, #155799)"; // Updated gradient matching your image
    }, []);

    return (
        <div className="about main-content" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <Container className="about-container">
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
                        <h2 className="about-title">Hello, I'm Sai 👋</h2>
                        <p className="about-text">
                            I am a passionate software engineer based in Dallas - Texas, with a strong drive for building impactful digital experiences.
                            I completed my Master’s in Computer Science from <a className="hlink" href="https://cs.gmu.edu/" style={{ textWrap: 'nowrap' }}>George Mason University</a> and hold a Bachelor’s degree from <a className="hlink" href="http://www.cse.griet.ac.in/">GRIET</a>.
                        </p>
                        <p className="about-text">
                            My interests span across Fullstack Development, Cloud Computing, and Machine Learning.
                            I am constantly exploring innovative technologies and love crafting scalable, user-centric applications that solve real-world problems.
                        </p>
                        <p className="about-text">
                            Outside of coding, you’ll find me running, strength training, sketching, learning Japanese, or just gaming. I believe in the power of continuous learning, strong collaboration, and bringing creativity into everything I do.
                        </p>
                        <div className="quick-facts">
                            <h4>Quick Facts:</h4>
                            <ul>
                                <li><b>Location:</b> Dallas, Texas</li>
                                <li><b>Education:</b> MS in Computer Science, George Mason University</li>
                                <li><b>Passions:</b> Fullstack Development, Cloud Technologies, Machine Learning</li>
                                <li><b>Soft Skills:</b> Team Collaboration, Creative Problem Solving, Adaptability</li>
                                <li><b>Hobbies:</b> Running, Strength Training, Sketching, Gaming</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
