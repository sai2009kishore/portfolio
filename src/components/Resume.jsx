import { useEffect, useState } from "react";
import '../assets/styles/resume.css'
import { Helmet } from "react-helmet";

const Resume = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #654ea3, #eaafc8)";

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="resume main-content" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>Resume | Sai Kishore</title>
                <meta name="description" content="Download or view my resume, highlighting experience and skils." />
            </Helmet>
            <div className="window" style={{ width: '80%', alignContent: 'center', margin: 'auto' }}>
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
                    {isMobile ? (
                        <div style={{ padding: '2rem' }}>
                            <a
                                href={require("../assets/pdf/Resume.pdf")}
                                download="Sai_Kishore_Salaka_Resume.pdf"
                                className="btn btn-primary"
                            >
                                Download Resume
                            </a>
                        </div>
                    ) : (
                        <iframe
                            src={require("../assets/pdf/Resume.pdf")}
                            title="Resume"
                            width="100%"
                            height="600px"
                            style={{ border: "none", borderRadius: "10px" }}
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Resume;
