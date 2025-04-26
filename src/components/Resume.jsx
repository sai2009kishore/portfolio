import { useEffect } from "react";
import '../assets/styles/resume.css'

const Resume = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #654ea3, #eaafc8)";
    }, []);

    return (
        <div className="resume main-content" style={{ padding: '2rem' }}>
            <div className="terminal-frame">
                <iframe
                    src={require("../assets/pdf/Resume.pdf")}
                    title="Resume"
                    width="100%"
                    height="600px"
                    style={{ border: "none", borderRadius: "10px" }}
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;
