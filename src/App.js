import React, { useState, useEffect } from 'react';
import './App.css';
import { FaMusic, FaChess, FaCode } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    { name: 'Portfolio Website', desc: 'This very website you are viewing!' },
    { name: 'Weather App', desc: 'A sleek weather app with live API updates.' },
    { name: 'To‑Do List', desc: 'React‑based productivity app with local storage support.' },
  ];

  const hobbies = [
    { icon: <FaCode />, name: 'Coding' },
    { icon: <FaChess />, name: 'Playing Chess' },
    { icon: <FaMusic />, name: 'Listening to Music' },
  ];

  const certificates = [
    { name: 'Red Hat Java EE (AD183 ‑ RHA)', link: 'https://www.credly.com/badges/965834a3-caf3-47a7-a90d-8d853ae323b8' },
    { name: 'Smart Contracts', link: 'https://coursera.org/verify/PY2MJ08OX7F' },
    { name: 'Software Engineering', link: 'https://coursera.org/verify/specialization/S3X3LZLME897' },
  ];

  useEffect(() => {
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="section home" id="home">
            <img
              src="/profile.jpg.jpeg"
              alt="Rohan Bharat Dhope"
              className="profile-photo"
            />
            <h1>Hi, I’m Rohan Bharat Dhope</h1>
            <p>Aspiring Web Developer | Creative Thinker | Problem Solver</p>
          </div>
        );
      case 'projects':
        return (
          <div className="section projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-cards">
              {projects.map((proj, idx) => (
                <div key={idx} className="project-card">
                  <h3>{proj.name}</h3>
                  <p>{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'hobbies':
        return (
          <div className="section hobbies" id="hobbies">
            <h2>Hobbies</h2>
            <div className="hobbies-grid">
              {hobbies.map((hobby, idx) => (
                <div key={idx} className="hobby-card">
                  <div className="hobby-icon">{hobby.icon}</div>
                  <div className="hobby-name">{hobby.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certificates':
        return (
          <div className="section certificates" id="certificates">
            <h2>Certificates</h2>
            <div className="cert-grid">
              {certificates.map((cert, idx) => (
                <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card-link">
                  <div className="cert-card">
                    <div className="cert-inner">
                      <div className="cert-front">
                        {cert.name.length > 25 ? cert.name.slice(0, 25) + '...' : cert.name}
                      </div>
                      <div className="cert-back">Click to verify</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="section contact" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-card">
              <p>Email: dhoperohan4444@gmail.com</p>
              <p>
                LinkedIn:{' '}
                <a href="https://linkedin.com/in/rohanbharatdhope" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/rohanbharatdhope
                </a>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActiveSection('home')}>Home</li>
          <li onClick={() => setActiveSection('projects')}>Projects</li>
          <li onClick={() => setActiveSection('hobbies')}>Hobbies</li>
          <li onClick={() => setActiveSection('certificates')}>Certificates</li>
          <li onClick={() => setActiveSection('contact')}>Contact</li>
        </ul>
      </nav>

      {renderSection()}

      <footer className="footer">
        <p>&copy; 2025 Rohan Bharat Dhope. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
