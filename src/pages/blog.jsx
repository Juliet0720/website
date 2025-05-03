import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myLogo from '../assets/julsLogo.png';
import "../assets/blog.css"

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
         <li><NavLink to="/about" className="navbar-link">About</NavLink></li>
         <li><NavLink to="/project" className="navbar-link">Projects</NavLink></li>
        <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
        </ul>
      </nav>

      {/* ✅ Blog Section */}
      <div className="blog-content">
        <h1 className="blog-title">Welcome to My Blog</h1>
        <p className="blog-description">
          This is the link to my blog. Click the button below to explore posts on various topics!
        </p>
        
        <a href="https://industryvisit.netlify.app/" target="_blank" rel="noopener noreferrer" className="blog-link">
          Visit the Blog
        </a>
      </div>
    </div>
  );
};

export default Blog;
