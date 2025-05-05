"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import myLogo from "../assets/julsLogo.png"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import "../assets/contact.css"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img className="logoImage" src={myLogo || "/placeholder.svg"} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">
             About
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="navbar-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="navbar-link">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="title-contact">Get In Touch</h1>
          <p className="desc-contact">
            I'm always eager to connect with fellow developers, designers, and potential collaborators. Whether you're
            interested in discussing web development trends, collaborating on a project, or simply sharing insights,
            feel free to reach out!
          </p>
        </div>

        <div className="contact-content centered">
          <div className="contact-info expanded">
            <h2 className="info-title">Contact Information</h2>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:julieticawalo07@gmail.com">julieticawalo07@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+639381175740">+63 938 117 5740</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Tacurong City, Philippines</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/Juliet0720" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/juliet-icawalo-420250296" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/juliet.condesaicawalo" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="mailto:julieticawalo07@gmail.com" className="social-icon">
                  <SiGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
