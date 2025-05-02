import React, { useEffect } from 'react';
import '../assets/styles/projects.css';
import { Helmet } from 'react-helmet';


const Projects = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb)";
    }, []);

    return (
        <>
            <Helmet>
                <title>Projects | Sai Kishore</title>
                <meta name="description" content="Explore my software and machine learning projects." />
            </Helmet>
        </>
    );
};

export default Projects;
