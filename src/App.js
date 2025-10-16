import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="section home">
            <img
              src="/profile.jpg.jpeg"
              alt="Rohan Bharat Dhope"
              className="profile-photo"
            />
            <h1>Hi, I'm Rohan Bharat Dhope</h1>
            <p>Aspiring Web Developer | Creative Thinker</p>
          </div>
        );

      case 'projects':
        return (
          <div className="section">
            <h2>My Projects</h2>
            <ul>
              <li><strong>Portfolio Website:</strong> This very site you're viewing!</li>
              <li><strong>Weather App:</strong> A simple weather app using API.</li>
              <li><strong>To-Do List:</strong> React-based productivity app.</li>
            </ul>
          </div>
        );

      case 'hobbies':
        return (
          <div className="section">
            <h2>Hobbies</h2>
            <ul>
              <li>Coding</li>
              <li>Playing Chess</li>
              <li>Reading Tech Blogs</li>
            </ul>
          </div>
        );

      case 'certificates':
        return (
          <div className="section">
            <h2>Certificates</h2>
            <ul>
              <li>
                <a
                  href="https://coursera.org/verify/R2Y282E9X0XM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blockchain Platforms
                </a>
              </li>
              <li>
                <a
                  href="https://coursera.org/verify/W0PZWDLZ4BM5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blockchain Basics
                </a>
              </li>
              <li>
                <a
                  href="https://coursera.org/verify/YBNH9PDP43HH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineering Design and Projects
                </a>
              </li>
            </ul>
          </div>
        );

      case 'contact':
        return (
          <div className="section">
            <h2>Contact Me</h2>
            <p>Email: dhoperohan4444@gmail.com</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/rohanbharatdhope"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rohanbharatdhope
              </a>
            </p>
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
