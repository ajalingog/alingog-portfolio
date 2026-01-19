import React, { useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";
import agriMapImg from "./assets/agriMap.jpg";
import agriMapMobileImg from "./assets/agriMapMobile.jpg"; 
import learnitrackImg from "./assets/learnitrack.jpg";
import budgetTrackerImg from "./assets/budgetTracker.jpg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* HAMBURGER for mobile */}
      <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* SIDEBAR for mobile */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <span className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</span>
        </div>
        <ul>
          <li><a href="#hero" onClick={() => setSidebarOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setSidebarOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setSidebarOpen(false)}>Get in Touch</a></li>
        </ul>
      </div>

      {/* NAVBAR for desktop */}
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Get in Touch</a></li>
        </ul>
      </nav>

      <div className="container">
        {/* HERO */}
        <section className="section hero" id="hero">
          <div className="hero-content">
            <img src={profile} alt="Avegail Alingog" className="profile-pic" />
            <div className="hero-text">
              <h1>Avegail J. Alingog</h1>
              <p><strong>IT Intern | Web & Mobile Developer</strong></p>
              <p>Laravel • Vue.js • Flutter • React</p>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>Enthusiastic IT student with hands-on experience in full-stack and mobile development. Experienced in Laravel, Vue.js, Flutter, and QA through academic/capstone projects. Currently working as Data Encoder at Liga ng mga Barangay.</p>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <span className="skill">React.js</span>
            <span className="skill">Laravel</span>
            <span className="skill">Vue.js</span>
            <span className="skill">Flutter</span>
            <span className="skill">SQL</span>
            <span className="skill">C++, C#, Dart</span>
            <span className="skill">Networking Basics</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="projects">
            <a href="https://agrimap.site" target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card">
                <img src={agriMapImg} alt="AgriMap Web" className="project-img" />
                <img src={agriMapMobileImg} alt="AgriMap Mobile" className="mobile-screenshot" />
                <p><strong>AgriMap</strong> – Agricultural monitoring and mapping system (Capstone)</p>
                <p className="tools"><strong>Tools:</strong> Laravel, Vue.js, Flutter (Mobile)</p>
              </div>
            </a>

            <div className="project-card">
              <img src={learnitrackImg} alt="Learnitrack" className="mobile-screenshot" />
              <p><strong>Learnitrack</strong> – Mobile monitoring app for teachers/students</p>
              <p className="tools"><strong>Tools:</strong> Laravel, React.js</p>
            </div>

            <div className="project-card">
              <img src={budgetTrackerImg} alt="Budget Tracker" className="project-img" />
              <p><strong>Budget Tracker</strong> – Student budget tracking app</p>
              <p className="tools"><strong>Tools:</strong> HTML, CSS, JavaScript</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <h2>Get in Touch</h2>
          <div className="contact-card">
            <p>I'm always open to discussing IT projects, internships, or collaboration opportunities.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/avegail-alingog-b4917a190" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://www.facebook.com/aj.alingog22/" target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
            </div>
            <div className="contact-buttons">
              <a href="tel:+639613743795" className="contact-btn">Call Me</a>
            </div>
            <p className="contact-email">Email: <a href="mailto:alingogaj2@gmail.com">alingogaj2@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
