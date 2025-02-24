import { NavLink } from "react-router-dom";

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
  <img src="src\assets\Logo only.png" className="mock" alt="Zencreations Logo"></img>
    <img src="src\assets\Primary.png" className="mock" alt="Logo-Primary" />
    <img src="src\assets\Secondary.png" className="mock" alt="Logo-Secondary" />
    <img src="src\assets\ID with lanyard.png" className="mock" alt="ID w/ Lanyard" />
    <img src="src\assets\Letterhead.png" className="mock" alt="Letterhead" />
  </li>
  <h3> <strong className="strong">Posters</strong></h3>
  <li>
    <img src="src\assets\Icawalo (1).png" className="poster" alt="Sport poster" />
    <img src="src\assets\Icawalo_Typography (1).png" className="poster" alt="Typography" />
  </li>
  <h3><strong className="strong">Photography</strong></h3>
  <li>
  <img src="src/assets/IMG_3024@362102928.jpg" className="photo" alt="Photo 1" />
  <img src="src/assets/IMG_3045.jpg" className="photo" alt="Photo 2" />
  <img src="src/assets/IMG_3166.jpg" className="photo" alt="Photo 3" />
  <img src="src\assets\6186024448944095280.jpg" className="photo" alt="Photo 4" />
  </li>
 
</ul>

</section>

  );
}
export default Project;