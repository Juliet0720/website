"use client"

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

import logo from "../assets/Logo only.png"
import primaryLogo from "../assets/Primary.png"
import secondaryLogo from "../assets/Secondary.png"
import pictureOne from "../assets/ID with lanyard.png"
import pictureTwo from "../assets/Letterhead.png"
import pictureThree from "../assets/Icawalo (1).png"
import pictureFour from "../assets/Icawalo_Typography (1).png"
import pictureFive from "../assets/IMG_3024@362102928.jpg"
import pictureSix from "../assets/IMG_3045.jpg"
import pictureSeven from "../assets/IMG_3166.jpg"
import pictureEight from "../assets/6186024448944095280.jpg"
import myLogo from "../assets/julsLogo.png"
import { FaGithub, FaExternalLinkAlt, FaCode, FaBriefcase, FaPalette, FaAward, FaSearch, FaTimes } from "react-icons/fa"
import "../assets/project.css"

const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("development")
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [animateContent, setAnimateContent] = useState(false)
  // Experience data
  const experiences = [
    {
      image: "https://via.placeholder.com/300x200?text=TechVision",
      company: "Innovision",
      role: "System Analyst",
      duration: "Jan 2022 - Present",
      description:
        "PredictEd",
      technologies: ["PHP", "MySQL", "HTML"],
    },
    
  ]

  // Weekly projects data
  const weeklyProjects = [
    {
      name: "Scientific Calculator",
      description:
        "A fully functional scientific calculator with advanced mathematical operations, history tracking, and theme customization.",
      thumbnail: "https://via.placeholder.com/300x200?text=Calculator+Project",
      github: "https://github.com/yourusername/scientific-calculator",
      live: "https://scientific-calculator-demo.vercel.app",
    },
    {
      name: "Pokemon Explorer",
      description:
        "Interactive Pokemon database that allows users to search, filter, and view detailed information about different Pokemon species.",
      thumbnail: "https://via.placeholder.com/300x200?text=Pokemon+Project",
      github: "https://github.com/yourusername/pokemon-explorer",
      live: "https://pokemon-explorer-demo.vercel.app",
    },
  ]

  // Certificates data with image paths
  // You'll replace these placeholder URLs with your actual certificate images
  const certificates = [
    {
      name: "Introduction to Cyber Security",
      issuer: "Simplilearn",
      date: "2025",
     // credential: "AWS-DEV-12345",
      image: "https://via.placeholder.com/800x600?text=AWS+Certificate",
    },
  ]

  // Graphics categories
  const graphicsCategories = {
    "Mockups & Logos": [logo, primaryLogo, secondaryLogo, pictureOne, pictureTwo],
    Posters: [pictureThree, pictureFour],
    Photography: [pictureFive, pictureSix, pictureSeven, pictureEight],
  }

 // Handle initial loading animation
 useEffect(() => {
  // Simulate loading delay
  const timer = setTimeout(() => {
    setIsLoading(false)
    // Trigger content animation after loading
    setTimeout(() => {
      setAnimateContent(true)
    }, 300)
  }, 800)

  return () => clearTimeout(timer)
}, [])

// Handle section change animations
const handleSectionChange = (section) => {
  // First fade out current content
  setAnimateContent(false)

  // After fade out, change section and fade in new content
  setTimeout(() => {
    setActiveSection(section)
    setIsOpen(false) // Close mobile menu when section changes

    // Trigger fade in animation
    setTimeout(() => {
      setAnimateContent(true)
    }, 50)
  }, 300)
}

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeCertificateModal = () => {
    // Add closing animation class to modal
    const modal = document.querySelector(".certificate-modal")
    if (modal) {
      modal.classList.add("closing")

      // Wait for animation to complete before removing modal
      setTimeout(() => {
        setSelectedCertificate(null)
        document.body.style.overflow = "auto" // Re-enable scrolling
      }, 300)
    } else {
    }
  }

  // Animation delay utility function for staggered animations
  const getAnimationDelay = (index) => {
    return `${100 + index * 100}ms`
  
  }

  return (
    <div>
 <nav className="navbar">
        <div className="navbar-left">
          <img className="logoImage" src={myLogo || "/placeholder.svg"} alt="Logo" />
        </div>

        {/* Hamburger Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="navbar-link">
              Home
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
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
   
    <div className="project-container">
     

      {/* Section Navigation */}
      <div className="section-nav">
        <button
          className={activeSection === "development" ? "active" : ""}
          onClick={() => handleSectionChange("development")}
        >
          <FaCode /> Development
        </button>
        <button
          className={activeSection === "weekly-projects" ? "active" : ""}
          onClick={() => handleSectionChange("weekly-projects")}
        >
          <FaBriefcase /> Weekly Projects
        </button>
        <button
          className={activeSection === "graphics" ? "active" : ""}
          onClick={() => handleSectionChange("graphics")}
        >
          <FaPalette /> Graphics
        </button>
        <button
          className={activeSection === "certificates" ? "active" : ""}
          onClick={() => handleSectionChange("certificates")}
        >
          <FaAward /> Certificates
        </button>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Development Experience Section */}
        {activeSection === "development" && (
          <div className="section development-section">
            <h1 className="section-title">Development Experience</h1>
            <div className="experience-cards">
              {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                   <div className="experience-image-container">
                    <img
                      src={exp.image || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="experience-image"
                    />
                  </div>
                  <div className="experience-header">
                    <h2>{exp.company}</h2>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-tech">
                    {exp.technologies.map((tech, techIndex) => (
                      <span className="tech-tag" key={techIndex}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekly Projects Section */}
        {activeSection === "weekly-projects" && (
          <div className="section weekly-projects-section">
            <h1 className="section-title">Weekly Projects</h1>
            <div className="projects-grid">
              {weeklyProjects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-thumbnail">
                    <img src={project.thumbnail || "/placeholder.svg"} alt={project.name} />
                  </div>
                  <div className="project-details">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <FaGithub /> Repository
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Graphics Section */}
        {activeSection === "graphics" && (
          <div className="section graphics-section">
            <h1 className="section-title">Graphics & Design</h1>

            {Object.entries(graphicsCategories).map(([category, images]) => (
              <div key={category} className="graphics-category">
                <h2 className="category-title">{category}</h2>
                <div className="masonry-grid">
                  {images.map((image, index) => (
                    <div className="masonry-item" key={index}>
                      <img src={image || "/placeholder.svg"} alt={`${category} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Section */}
        {activeSection === "certificates" && (
          <div className="section certificates-section">
            <h1 className="section-title">Certificates & Achievements</h1>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div className="certificate-card" key={index} onClick={() => openCertificateModal(cert)}>
                  <div className="certificate-image-container">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.name} className="certificate-image" />
                    <div className="certificate-overlay">
                      <FaSearch className="view-icon" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                  <div className="certificate-info">
                    <h3>{cert.name}</h3>
                    <p className="certificate-issuer">Issued by {cert.issuer}</p>
                    <p className="certificate-date">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificateModal}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeCertificateModal}>
              <FaTimes />
            </button>
            <img
              src={selectedCertificate.image || "/placeholder.svg"}
              alt={selectedCertificate.name}
              className="certificate-modal-image"
            />
            <div className="certificate-modal-details">
              <h2>{selectedCertificate.name}</h2>
              <p>
                <strong>Issued by:</strong> {selectedCertificate.issuer}
              </p>
              <p>
                <strong>Date:</strong> {selectedCertificate.date}
              </p>
              <p>
                <strong>Credential ID:</strong> {selectedCertificate.credential}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Project
