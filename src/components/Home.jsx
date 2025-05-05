import { Fragment, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../assets/styles/home.css';
import '../assets/styles/window.css';

const PROMPT_NAME = 'coder0112358@portfolio:~$ ';

const Home = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #2e3192, #1bffff)";
    }, []);


    const generatePrompt = (prompt, response) => {
        return <Fragment>
            <p><span className="window-prompt">{PROMPT_NAME}</span>{prompt}</p>
            {
                response &&
                <p><span className="window-response">{response}</span></p>
            }
        </Fragment>
    }

    return (
        <div className='home main-content'>
            <Helmet>
                <title>Sai Kishore Salaka | Fullstack Developer | Cloud & ML Enthusiast</title>
                <meta name="description" content="Welcome to my personal portfolio. I’m Sai — a software engineer with experience in fullstack development, cloud infrastructure, and machine learning." />
            </Helmet>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col sm={5} className='text-center'>
                    <Image id="home-img" src={require("../assets/img/home-img-1.jpg")} alt="Home Logo" fluid />
                </Col>
                <Col sm={7}>
                    <div className="window">
                        <div className="window-header">
                            <div className="window-buttons">
                                <div className="window-button close-button"></div>
                                <div className="window-button minimize-button"></div>
                                <div className="window-button maximize-button"></div>
                            </div>
                            <span className="window-title">About Me</span>
                            <div className="window-buttons-right"></div>
                        </div>
                        <div className="window-body terminal">
                            <p>Welcome to my portfolio!</p>
                            {generatePrompt('sai.currentLocation', '"Dallas, Texas, USA"')}
                            {generatePrompt('sai.education', '["Master\'s in Computer Science - George Mason University", "Bachelor\'s in Computer Science - GRIET"]')}
                            {generatePrompt('sai.backendSkills', '["Java", "Hibernate", "Play", "Spring Boot", "Node.js", "REST", "Microservices"]')}
                            {generatePrompt('sai.frontendSkills', '["React.js", "Next.js", "TypeScript"]')}
                            {generatePrompt('sai.dataSkills', '["MySQL", "PostgreSQL", "Neo4j", "Oracle"]')}
                            {generatePrompt('sai.devopsSkills', '["Azure", "AWS", "Kubernetes", "Helm", "CI/CD", "Docker]')}
                            {generatePrompt('sai.machineLearningSkills', '["Python", "PySpark", "CLISP", "TensorFlow", "PyTorch"]')}
                            {generatePrompt(<span className="window-cursor"> </span>)}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;