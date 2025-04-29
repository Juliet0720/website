import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import myPhoto from "../assets/myPhoto.jpg";
import logoHTML from "../assets/html-logo.png";
import logoCSS from "../assets/css-logo.png";
import logoJS from "../assets/javascript-logo.png";
import logoPS from "../assets/photoshop-logo.png";
import logoReact from "../assets/react-logo.png";
import logoIllustrator from "../assets/illustrator-logo.png";
import myLogo from "../assets/julsLogo.png";


const About = () => {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="navbar">
              <div className="navbar-left">
                <img className="logoImage" src={myLogo} alt="Logo" />
              </div>

              {/* ✅ Hamburger Button (Changes Between ☰ and ✖) */}
              <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
              </button>
              
              {/* ✅ Navbar Links */}
              <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                       <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                        <li><NavLink to="/project" className="navbar-link">Projects</NavLink></li>
                        <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
                        
                    </ul>
                </nav>
                <section className="about-section">
  <h1 className="int">About Me</h1>
  <div className="content-wrapper">
    <div className="text-content">
      <div className="intro">
        <h3>Introduction</h3>
        <p>
         Hello! I'm Juliet Icawalo, a passionate front-end web developer dedicated to
          crafting engaging and user-friendly web experiences. 
        </p>
      </div>
      <div className="career-goals">
        <h3>Career Goals</h3>
        <p>
          My immediate goal is to deepen my expertise in front-end frameworks like
          React. Long-term, I aspire to lead a team of front-end developers,
          driving innovative projects that make a meaningful impact on users' lives.
        </p>
      </div>
    </div>
    <div className="image-container">
      <img className='hero-image' src={myPhoto} alt="myPhoto" />
    </div>
  </div>
</section>
    <section id="skills" NavLink to="#skills">
        <h2 className="title">Skills and Expertise</h2>
            <p className="desc"> I specialize in a range of languages,frameworks and tools, including:</p>
        <ul>
             <li>
                <img src={logoHTML} className="logo" alt="HTML"></img>
                <img src={logoCSS} className="logo"alt="CSS"></img>
                <img src={logoJS} className="logo" alt=" Javascript" />
                <img src={logoReact} className="logo" alt="React" />
                <img src={logoPS} className="logo" alt="Photoshop" />
                <img src={logoIllustrator} className="logo" alt="Illustrator" />
             </li>
             
        </ul>
</section>
<section className="personal">
  <h2 className="title">Personal Interest</h2>
  <div className="grid-container">
    <div className="grid-item">
      <h4>Fun Fact</h4>
      <p>I love solving crime games and capturing nature photography.</p>
    </div>
    <div className="grid-item">
      <h4>Travel</h4>
      <p>I love exploring new places and trying their foods.</p>
    </div>
    <div className="grid-item">
      <h4>Hobbies</h4>
      <p>Watching vlogs, editing photos and videos, and gaming.</p>
    </div>
  </div>
</section>

        </div>
    );
}
export default About;