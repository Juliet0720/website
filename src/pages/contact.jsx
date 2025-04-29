import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myLogo from '../assets/julsLogo.png';
// import your blog images as needed, e.g.:
// import day1Img from '../assets/day1.jpg';
import day1Img from '../assets/day1.jpg';

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img className="logoImage" src={myLogo} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
          <li><NavLink to="/project" className="navbar-link">Projects</NavLink></li>
        </ul>
      </nav>

      <div className="contact">
          <h1 className="title-contact">Contact Me</h1>
        <p className="desc-contact">
        I'm always eager to connect with fellow developers, 
        designers, and potential collaborators. Whether you're interested in discussing web 
        development trends, collaborating on a project, or simply sharing insights, feel free to reach out!
        <p><strong>Email:</strong> julieticawalo07@gmail.com</p>
        <p><strong>Contact Number:</strong> 09381175740</p>
    </p>
      
    </div>
    </div>
  );
};

export default Blog;
