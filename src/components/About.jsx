import { Container, Row, Col, Image } from 'react-bootstrap';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/about.css';
import '../assets/styles/window.css';

const About = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to top right, #159957, #155799)";
    }, []);

    return (
        <div className="about main-content" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <Helmet>
                <title>About | Sai Kishore</title>
                <meta name="description" content="Learn more about my background, interests, and experience." />
            </Helmet>
            <div className="window responsive-window" style={{ alignContent: 'center', margin: 'auto' }}>
                <div className="window-header">
                    <div className="window-buttons">
                        <div className="window-button close-button"></div>
                        <div className="window-button minimize-button"></div>
                        <div className="window-button maximize-button"></div>
                    </div>
                    <span className="window-title">Resume</span>
                    <div className="window-buttons-right"></div>
                </div>
                <div className="window-body">
                    <Container className="about-container" style={{ maxWidth: '100%' }}>
                        <Row className="align-items-center" style={{ paddingTop: '2rem' }}>
                            <Col md={4} className="text-center">
                                <Image
                                    src={require('../assets/img/profile-image.jpg')}
                                    roundedCircle
                                    alt="Profile"
                                    className="about-img"
                                />
                            </Col>
                            <Col md={8}>
                                <h2 className="about-title">Hello, I'm Sai 👋</h2>

                                <p className="about-text">
                                    🎓 I've always been a curious and driven learner. From a young age, I excelled academically, always eager to take on new challenges.
                                </p>

                                <p className="about-text">
                                    💻 My passion for technology emerged during my Bachelor's degree at <a className="hlink" href="http://www.cse.griet.ac.in/" target="_blank" rel="noreferrer">GRIET</a>, where I chose Computer Science because it felt like solving endless puzzles — and problem-solving has always been second nature to me.
                                    Before I owned a personal laptop, I would often stay back at college, spending extra hours in the labs just to practice programming and explore new technologies. Once I finally had my own laptop, there was no stopping me — I immersed myself fully, building exciting projects and deepening my skills.
                                </p>

                                <p className="about-text">
                                    🛠️ I began my professional journey at <a className="hlink" href="https://innovasolutions.com/" target="_blank" rel="noreferrer">GGK Technologies</a> in Hyderabad, India, where I interned and then worked as a Java Developer. Exposure to modern technologies and real-world applications piqued my curiosity even further. I soon expanded into frontend development and CI/CD, embracing fullstack engineering.
                                </p>

                                <p className="about-text">
                                    📚 The student in me craved more. I decided to pursue a Master’s degree at <a className="hlink" href="https://cs.gmu.edu/" target="_blank" rel="noreferrer" style={{ textWrap: 'nowrap' }}>George Mason University</a>, a decision that profoundly shaped my growth.
                                    Adapting to a new country while managing part-time work and rigorous Machine Learning coursework tested my perseverance like never before. Machine Learning turned out to be one of the most fascinating fields I had ever encountered. I loved solving real-world problems through intelligent models, deeply understanding the algorithms, and even stepping outside my comfort zone by taking a robotics course.
                                </p>

                                <p className="about-text">
                                    🚀 Today, I work as a Senior Software Engineer at <a className="hlink" href="https://www.greenarrowlabs.com/" target="_blank" rel="noreferrer" style={{ textWrap: 'nowrap' }}>Green Arrow Labs, Inc.</a>, where I wear many hats — fullstack development, Azure cloud management, DevOps, CI/CD pipeline automation, architectural design, and integrating cloud-based Machine Learning tools into our applications.
                                </p>

                                <p className="about-text">
                                    🔍 Professionally, I’m passionate about continuous learning, system optimization, user experience, and finding smarter ways to solve real-world problems. I'm excited about what cloud computing, AI, and modern architectures can achieve, and I'm always seeking ways to innovate and improve.
                                </p>

                                <p className="about-text">
                                    🎨 Outside of work, I love running, strength training, swimming, sketching, learning Japanese, and gaming — activities that keep me creative, energized, and curious.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default About;
