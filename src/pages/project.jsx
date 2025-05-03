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
import devImg from "../assets/innovision.png"
import pokemon from "../assets/pokemon.jpg"
import scical from "../assets/scical.png"

//certificates
import cyberSec from "../assets/cybersec.png"
import ethHack from "../assets/ethHack.png"
import cloudSec from "../assets/cloudSec.png"
import compNet from "../assets/comNet.png"
import cissp from "../assets/cissp.png"
import reactJs from "../assets/reactJs.png"
import funData from "../assets/funData.png"
import sqlInject from "../assets/sqlInject.png"
import pmpBasic from "../assets/pmpBasic.png"
import mlAlgo from "../assets/MlAlgo.png"
import agile from "../assets/agile.png"
import dataScience from "../assets/dataSci.png"
import pyLib from "../assets/pyLib.png"
import opencv from "../assets/opencv.png"
import mlWithR from "../assets/MlWithR.png"
import SandUmachine from "../assets/supervised.png"
import neuNet from "../assets/neuNet.png"
import html from "../assets/html.png"
import php from "../assets/php.png"
import java from "../assets/java.png"
import webDev from "../assets/webDev.png"
import mongoDB from "../assets/mongoDb.png"
import advPy from "../assets/advPy.png"
import cplus from "../assets/c++.png"
import sortAlgo from "../assets/sortAlgo.png"
import pyPandas from "../assets/pyPandas.png"
import cSharp from "../assets/cSharp.png"
import masterAI from "../assets/masterAi.png"
import dataBricks from "../assets/dataBricks.png"
import appBuild from "../assets/appBuild.png"
import nodeJs from "../assets/nodeJs.png"
import css from "../assets/css.png"
import googleCloud from "../assets/googleCloud.png"
import numpy from "../assets/numpy.png"
import javaServlet from "../assets/javaServlet.png"
import pyData from "../assets/pyData.png"
import deepLearning from "../assets/deepLearning.png"
import githubCo from "../assets/githubCo.png"


const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("development")
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [animateContent, setAnimateContent] = useState(false)
  // Experience data
  const experiences = [
    {
      image: devImg,
      company: "Innovision",
      role: "System Analyst",
      duration: "Jan 2022 - Present",
      description:
        "PredictEd: A System created for SHS grading system with bheaviour system",
      technologies: ["PHP", "MySQL", "HTML"],
    },
    {
      image: devImg,
      company: "SupplyEase",
      role: "Backend Developer",
      duration: "Jan 2022 - Present",
      description:
        "PredictEd: A System created for SHS grading system with bheaviour system",
      technologies: ["PHP", "MySQL", "HTML"],
    },
    {
      image: devImg,
      company: "Industry Visit Blog",
      role: "Front-end Developer",
      duration: "April 2025 - Present",
      description:
        "Industry Visit: a blog that contains memories of Educational Tour",
      technologies: ["PHP", "MySQL", "HTML"],
    },
    
  ]

  // Weekly projects data
  const weeklyProjects = [
    {
      name: "Scientific Calculator",
      description:
        "A fully functional scientific calculator with advanced mathematical operations, history tracking, and theme customization.",
      image: scical ,
      github: "https://github.com/Chris272019/SCI_CAL",
      live: "https://scicalcu.netlify.app/",
    },
    {
     image: pokemon,
      name: "Pokemon App",
      description:
        "Interactive Pokemon database that allows users to search, battle, and view detailed information about different Pokemon species.",
      
      github: "https://github.com/Chris272019/Pokemon",
      live: "https://pokemon-explorer-demo.vercel.app",
    },
  ]

  // Certificates data with image paths
  // You'll replace these placeholder URLs with your actual certificate images
  const certificates = [
    { name: "Introduction to Cyber Security", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8202989", image: cyberSec },
    { name: "Ethical Hacking 101", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8204855", image: ethHack },
    { name: "Introduction to Cloud Security", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8206489", image: cloudSec },
    { name: "Introduction to Computer Networking", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8209385", image: compNet },
    { name: "Introduction to CISSP Security Assessment", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8209385", image: cissp },
    { name: "ReactJS Project for Beginners", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8210691", image: reactJs },
    { name: "Introduction to Fundamentals of Databases", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8213983", image: funData },
    { name: "SQL Injection for Beginners", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8211282", image: sqlInject },
    { name: "PMP Basics", issuer: "Simplilearn", date: "2025", hours: "9 hours", code: "8216570", image: pmpBasic },
    { name: "Getting Started with Machine Learning Algorithms", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8218398", image: mlAlgo },
    { name: "Introduction to Agile", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8219843", image: agile },
    { name: "Introduction to Data Science", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8222269", image: dataScience },
    { name: "Python Libraries for Data Science", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8223968", image: pyLib },
    { name: "Introduction to OpenCV for Beginners", issuer: "Simplilearn", date: "2025", hours: "5 hours", code: "8226735", image: opencv },
    { name: "Introduction to Machine Learning with R", issuer: "Simplilearn", date: "2025", hours: "10 hours", code: "8242200", image: mlWithR },
    { name: "Introduction to Supervised & Unsupervised Machine Learning", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8243881", image: SandUmachine },
    { name: "Introduction to Neural Network", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8244702", image: neuNet },
    { name: "Introduction to HTML", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8246289", image: html },
    { name: "Introduction to PHP", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8248135", image: php },
    { name: "Java Programming for Beginners", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8249194", image: java },
    { name: "Web Development for Beginners", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8249406", image: webDev },
    { name: "Introduction to MongoDB", issuer: "Simplilearn", date: "2025", hours: "5 hours", code: "8256618", image: mongoDB },
    { name: "Advanced Python", issuer: "Simplilearn", date: "2025", hours: "10 hours", code: "8253849", image: advPy },
    { name: "Introduction to C++", issuer: "Simplilearn", date: "2025", hours: "6 hours", code: "8255350", image: cplus },
    { name: "Introduction to Sorting Algorithm", issuer: "Simplilearn", date: "2025", hours: "3 hours", code: "8256766", image: sortAlgo },
    { name: "Python Pandas Basic Course", issuer: "Simplilearn", date: "2025", hours: "5 hours", code: "8256766", image: pyPandas },
    { name: "Boost you Web Development Career: Introduction to C#", issuer: "Simplilearn", date: "2025", hours: "8 hours", code: "8259215", image: cSharp },
    { name: "Master AI Web Application Development", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8260004", image: masterAI },
    { name: "Get Started with Data Bricks", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8260074", image: dataBricks },
    { name: "Salesforce Certified Platform App", issuer: "Simplilearn", date: "2025", hours: "12 hours", code: "8262384", image: appBuild },
    { name: "Getting Started with NodeJS", issuer: "Simplilearn", date: "2025", hours: "5 hours", code: "8263864", image: nodeJs },
    { name: "Introduction to CSS", issuer: "Simplilearn", date: "2025", hours: "3 hours", code: "8264759", image: css },
    { name: "Intro to Google Cloud Platform", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8266466", image: googleCloud },
    { name: "Introduction to Numpy", issuer: "Simplilearn", date: "2025", hours: "2 hours", code: "8269050", image: numpy },
    { name: "Java Servelet Basics", issuer: "Simplilearn", date: "2025", hours: "4 hours", code: "8267766", image: javaServlet },
    { name: "Python for Data Analysis", issuer: "Simplilearn", date: "2025", hours: "3 hours", code: "8268491", image: pyData },
    { name: "Deep Learning", issuer: "Simplilearn", date: "2025", hours: "7 hours", code: "8271162", image: deepLearning },
    { name: "Github Copilot", issuer: "Simplilearn", date: "2025", hours: "3 hours", code: "8273413", image: githubCo },
  ];
  

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
            <NavLink to="/about" className="navbar-link">
             About
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
                      alt={`${exp.company} `}
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
                    <img src={project.image|| "/placeholder.svg"} alt={project.name} />
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
                <strong>Hours:</strong> {selectedCertificate.hours}
              </p>
              <p>
                <strong>Certificate Code:</strong> {selectedCertificate.code}
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
