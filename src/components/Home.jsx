import { Fragment, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import '../assets/styles/terminal.css';
import '../assets/styles/home.css';

const PROMPT_NAME = 'coder0112358@portfolio:~$ ';

const Home = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #2e3192, #1bffff)";
    }, []);


    const generatePrompt = (prompt, response) => {
        return <Fragment>
            <p><span className="terminal-prompt">{PROMPT_NAME}</span>{prompt}</p>
            {
                response &&
                <p><span className="terminal-response">{response}</span></p>
            }
        </Fragment>
    }

    return (
        <div className='home main-content'>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col sm={5} className='text-center'>
                    <Image id="home-img" src={require("../assets/img/home-img-1.jpg")} alt="Home Logo" fluid />
                </Col>
                <Col sm={7}>
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <div className="terminal-button close-button"></div>
                                <div className="terminal-button minimize-button"></div>
                                <div className="terminal-button maximize-button"></div>
                            </div>
                            <span className="terminal-title">About Me</span>
                            <div className="terminal-buttons-right"></div>
                        </div>
                        <div className="terminal-body">
                            <p>Welcome to my portfolio!</p>
                            {generatePrompt('sai.currentLocation', '"Dallas, Texas, USA"')}
                            {generatePrompt('sai.education', '["Master\'s in Computer Science, George Mason University", "Bachelor\'s in Computer Science, GRIET"]')}
                            {generatePrompt('sai.webDevelopmentSkills', '["Java", "Hibernate", "Play", "Spring Boot", "REST", "React.js", "Node.js", "JS", "HTML", "CSS", "MySQL", "Neo4j", "MongoDB", "Docker", "Microservices", "CI/CD", "Kubernetes", "Azure"]')}
                            {generatePrompt('sai.machineLearningSkills', '["Python", "PySpark", "CLISP", "TensorFlow", "PyTorch"]')}
                            {generatePrompt(<span className="terminal-cursor"> </span>)}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;