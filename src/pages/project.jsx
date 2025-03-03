import { NavLink } from "react-router-dom";
import React from 'react'
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


const Project = () => {
  return(
    <section className="projects">
       <nav className="navbar">
                    <ul className="navbar-links">
                        <li><NavLink to="/about" className="navbar-link">About</NavLink></li>
                        
                    </ul>
                </nav>
<h1 className="title-proj">Current Projects</h1>
<p className="desc">
  I'm currently working on several exciting projects:
</p>
<ul>
  <li className="desc">
    <strong>Personal Portfolio Website:</strong> Redesigning my portfolio to showcase recent work, incorporating modern design trends and advanced CSS animations.
  </li>
  <p className="desc">Here's some projects I have done using Adobe Illustrator and Photoshop</p>
 <h3><strong className="strong">Mock up and Logo</strong></h3> 
  <li>
  <img src={logo} className="mock" alt="Zencreations Logo"></img>
    <img src={primaryLogo} className="mock" alt="Logo-Primary" />
    <img src={secondaryLogo} className="mock" alt="Logo-Secondary" />
    <img src={pictureOne} className="mock" alt="ID w/ Lanyard" />
    <img src={pictureTwo} className="mock" alt="Letterhead" />
  </li>
  <h3> <strong className="strong">Posters</strong></h3>
  <li>
    <img src={pictureThree} className="poster" alt="Sport poster" />
    <img src={pictureFour} className="poster" alt="Typography" />
  </li>
  <h3><strong className="strong">Photography</strong></h3>
  <li>
  <img src={pictureFive} className="photo" alt="Photo 1" />
  <img src={pictureSix} className="photo" alt="Photo 2" />
  <img src={pictureSeven} className="photo" alt="Photo 3" />
  <img src={pictureEight} className="photo" alt="Photo 4" />
  </li>
 
</ul>

</section>

  );
}
export default Project;