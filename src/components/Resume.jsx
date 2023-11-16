import { useEffect } from "react";

const Resume = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #2e3192, #1bffff)";
    }, []);

    return (
        <div className="resume main-content">
            Resume Page
        </div>
    );
};

export default Resume;