import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <nav className="navbar">
                    <ul className="navbar-links">
                       <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                        <li><NavLink to="/project" className="navbar-link">Projects</NavLink></li>
                        
                    </ul>
                </nav>
                <section className="about-section">
  <h1 className="int">About Me</h1>
  <div className="content-wrapper">
    <div className="text-content">
      <div className="intro">
        <h3>Introduction</h3>
        <p>
         Hello! I'm Juliet Icawalo, a passionate front-end web developer dedicated to
          crafting engaging and user-friendly web experiences. 
        </p>
      </div>
      <div className="career-goals">
        <h3>Career Goals</h3>
        <p>
          My immediate goal is to deepen my expertise in front-end frameworks like
          React. Long-term, I aspire to lead a team of front-end developers,
          driving innovative projects that make a meaningful impact on users' lives.
        </p>
      </div>
    </div>
    <div className="image-container">
      <img src="src/assets/467163471_4072691219642510_2871245258680640979_n.jpg" alt="Juliet" className="hero-image" />
    </div>
  </div>
</section>
    <section id="skills" NavLink to="#skills">
        <h2 className="title">Skills and Expertise</h2>
            <p className="desc"> I specialize in a range of languages,frameworks and tools, including:</p>
        <ul>
             <li>
                <img src="src\assets\HTML5_logo_and_wordmark.svg.png" className="logo" alt="HTML"></img>
                <img src="src\assets\5968242.png"className="logo" alt="CSS"></img>
                <img src="src\assets\0_6c0myzTJcuOTi_vU.png" className="logo" alt=" Javascript" />
                <img src="src\assets\png-transparent-js-react-js-logo-react-react-native-logos-icon.png" className="logo" alt="React" />
                <img src="src\assets\png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png" className="logo" alt="Photoshop" />
                <img src="src\assets\pngtree-adobe-illustrator-ai-icon-png-image_4899504.png" className="logo" alt="Illustrator" />
             </li>
             
        </ul>
</section>
<section className="personal">
  <h2 className="title">Personal Interest</h2>
  <div className="grid-container">
    <div className="grid-item">
      <h4>Fun Fact</h4>
      <p>I love solving crime games and capturing nature photography.</p>
    </div>
    <div className="grid-item">
      <h4>Travel</h4>
      <p>I love exploring new places and trying their foods.</p>
    </div>
    <div className="grid-item">
      <h4>Hobbies</h4>
      <p>Watching vlogs, editing photos and videos, and gaming.</p>
    </div>
  </div>
</section>

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
}
export default About;