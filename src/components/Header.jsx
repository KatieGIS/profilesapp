import React from 'react';
import '../App.css';
import logo from '../images/logo-transparent.png'
const Header = () => {
    return (
        <>
        <header>
        {/* <div id="logo-img"></div> */}
        <img src={logo} alt="logo" style={{ width: "44vw", height: "60vh"}}/>
            <h2 > A GIS Full Stack Solutions Architect codes for GIS web applications enhancing your user experience.</h2>
        </header>
      </>
    );
}

export default Header;