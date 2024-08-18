import React from 'react';
import '../App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
        <header>
            <h1>Kate Mai</h1>
            <p>GIS Solutions Architect/Full Stack Developer</p>
        </header>
        <div id="collapsable-nav" class="collapse navbar-collapse">
        <ul id="nav-list" class="nav navbar-nav navbar-center">
        <About/>
        {/* <Link to={"./Projects"}>
    Dashboard
  </Link> */}
          {/* <li>
            <a href="#Project">
              <span class="glyphicon glyphicon-lock"></span>Work</a>
          </li>
          
          <li>
           <a href="mailto:katemymy@gmail.com">
              <span class="glyphicon glyphicon-envelope"></span>Contact</a>
          </li>
          <li id="github" class="hidden-xs">
            <a href="https://github.com/KatieGIS">
              <span class="fa fa-github"></span>GitHub</a>
          </li> */}
        </ul>
      </div>
      </>
    );
}

export default Header;