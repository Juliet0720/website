import { NavLink } from "react-router-dom";

const Hero = () => {
        return (
            <div className="hero-contain"> 
                <nav className="navbar">
                    
                </nav>
    
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Juliet Icawalo</h1>
                        <p className="hero-desc">A front-end web developer, focusing on making websites user-friendly
                             and visually appealing to prioritize a great user experience.</p>
                        <p className="hero-subtitle"> Front-end Web Developer</p>
                        <NavLink to="./about" className="hero-link">About me</NavLink>
                    </div>
                </div>
            </div>
        );
}

export default Hero;



