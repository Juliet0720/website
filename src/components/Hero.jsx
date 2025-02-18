import { NavLink } from "react-router-dom";

const Hero = () => {
        return (
            <div className="hero-contain"> 
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li><NavLink to="#about" className="navbar-link">About</NavLink></li>
                        <li><NavLink to="#skills" className="navbar-link">Skills</NavLink></li>
                        <li><NavLink to="#contact" className="navbar-link">Contact</NavLink></li>
                    </ul>
                </nav>
    
                <div className="hero-content">
                    <img src="src/assets/juliet.jpg" alt="Juliet" className="hero-image" />
                    <div className="hero-text">
                        <h1 className="hero-title">Juliet Icawalo</h1>
                        <p className="hero-subtitle"> Front-end Web Developer</p>
                        <p className="hero-desc">A front-end web developer, focusing on making websites user-friendly
                             and visually appealing to prioritize a great user experience.</p>
                        <NavLink to="/" className="hero-link">About me</NavLink>
                    </div>
                </div>
            </div>
        );
}

export default Hero;



