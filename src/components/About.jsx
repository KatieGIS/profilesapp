import React from 'react';
import '../App.css';
import Map from './Project1';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            
            <h3>
            I mainly work for Geospatial analysis solutions implementation and 📍Advanced map virtualization for organizations.
            </h3>
            <div className='inline-element'>
                <Map />
            </div>
            <div className="inline-element">
                <li> 👋 This is a Hello from Vancouver Island BC. </li>
                <li> About 6 years ago, I became an islander again following 2 years of study in cowtown Calgary AB.</li>
                <li> As soon as I finished my study, I started off my GIS career as a GIS Developer and had helped many agencies enhancing their web map applications. </li>
                <li> Not only have I discovered the best solutions for my clients, I also keep on my learning advatures towards data science.</li>
                <li> I have received Google Cloud Platform certificates outside of my work, and I am exporing some great cloud features on AWS.</li>   
                
            </div>
            <h3>
                4 of my key skills
            </h3>
            <li> <b>GIS Solution Architecture:</b> Designing comprehensive GIS architectures that address complex business needs and enhance operational workflows. </li>
            <li> <b>Software Development:</b> Developing custom GIS applications and tools to solve specific client problems and improve data accessibility.</li>
            <li> <b>Project Leadership:</b> Delivering GIS projects from initial requirements gathering to final deployment.</li>
            <li> <b>Client Consultation:</b> Engaging with clients to understand their goals, provide expert advice, and ensure successful project outcomes.</li>
            
        </section>

        
    );
}

export default About;