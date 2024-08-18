import React from 'react';
import '../App.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Streamflow Status in BC',
            description: `This web map is to demostrate the experiments on ArcGIS API for JavaScript with an operational feature layer, 
            the Streamflow dataset retrieved from DataBC Catalog. 
            Also, a custom widget built for user to select and zoom to an area of interest on the map. 
            A full stack web application using React and Node.js.`,
            link: '#'
        },
        {
            title: 'International Tourist Arrivals ‐ Japan',
            description: `
            The entry tourism of visiting has reached to 27 million tourists in Japan in 2017. 
            The growth of the tourism has successfully increased the Japanese income rapidly. 
            According to the Japan Tourism Statistics, it has been found that the top international markets were mostly from 
            East Asia and South Asia, due to the closer geographical locations. 
            The thematic maps were made for these 3 main visit purposes, including tourism, business and other arrivals.
            `,
            link: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;