import React from 'react';
import '../App.css';
import Map from './Location';
import book1 from '../images/geospatial_w_python.png'
import book2 from '../images/geospatial_w_sql.png'

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            
            <h3>
            I mainly work for Geospatial analysis solutions implementation and 📍Advanced map virtualization for organizations.
            </h3>
            <div className='flex-container'></div>
            <div className='flex-item'>
                <Map />
            </div>
            <div className="flex-item">
                <li> 👋 Hello from Vancouver Island BC. </li>
                <li> About 6 years ago, I became an islander again following 2 years of study in cowtown Calgary AB.</li>
                <li> As soon as I finished my study, I started off my GIS career as a GIS Developer and had helped many agencies enhancing their web map applications. </li>
                <li> Not only have I discovered the best solutions for my clients, I also keep on my learning advatures towards data science.</li>
                <li> During post pandamic, I helped 2 book auditions, and they are now available online and in stores.</li>
                <img src={book1} alt="geospatial_w_python"></img>
                <img src={book2} alt="geospatial_w_sql"></img>
                <li> Cloud and AI are 2 other things than my current role and I am exploring some great tools and features for the potentials.</li>
            </div>
            <h3>
                My Skills
            </h3>
            <li> <b>GIS Solution Architecture:</b> Designing comprehensive GIS architectures that address complex business needs and enhance operational workflows. </li>
            <li> <b>Software Development:</b> Developing custom GIS applications and tools to solve specific client problems and improve data accessibility.</li>
            <li> <b>Project Leadership:</b> Delivering GIS projects from initial requirements gathering to final deployment.</li>
            <li> <b>Client Consultation:</b> Engaging with clients to understand their goals, provide expert advice, and ensure successful project outcomes.</li>
            
        </section>

        
    );
}

export default About;