import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import React, {useState, useEffect } from 'react';
const Hero = () => {
    const fullText = "A front-end web developer, focusing on making websites user-friendly and visually appealing to prioritize a great user experience.";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [flashVisible, setFlashVisible] = useState(false);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 30); // Typing speed (adjust if needed)
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

     // ⚡ Random lightning flashes
     useEffect(() => {
        const triggerLightning = () => {
            setFlashVisible(true);
            setTimeout(() => setFlashVisible(false), 100); // Flash duration

            const nextFlash = Math.random() * 8000 + 3000; // Random 3–11s
            setTimeout(triggerLightning, nextFlash);
        };

        triggerLightning();
    }, []);
        return (
            <div className="hero-contain"> 
                {/* ⚡ Lightning flash overlay */}
            <motion.div
                className="lightning-flash"
                animate={{ opacity: flashVisible ? 1 : 0 }}
                transition={{ duration: 0.15 }}
            />
    
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Juliet Icawalo</h1>
                        <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="typing"
                    >
                        {displayedText}<span className="cursor">|</span>
                    </motion.p>
                        <p className="hero-subtitle"> Front-end Web Developer</p>
                        <NavLink to="./about" className="hero-link">About me</NavLink>
                    </div>
                </div>
            </div>
        );
}

export default Hero;



