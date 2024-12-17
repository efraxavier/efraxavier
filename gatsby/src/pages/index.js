import React, { useEffect, useState } from 'react';
import './styles.css';

const encodeText = (text) => {
  return text
    .replace(/[^a-zA-Z0-9]+/g, '') // Remove caracteres especiais
    .toLowerCase()
    .replace(/\s+/g, '-'); // Substitui espaços
};

const decodeText = (encodedText) => {
  return encodedText.replace(/-/g, ' ').replace(/[^a-zA-Z ]/g, '');
};

const App = () => {
  const name = 'Efraim Belo Xavier';
  const [shadowText, setShadowText] = useState('');

  useEffect(() => {
    const encoded = encodeText(name);
    const decoded = decodeText(encoded);
    setShadowText(decoded);
  }, []);

  return (
    <div className="container">
      {/* Banner */}
      <h1 className="hacker-banner" data-text={shadowText}>
        {`_${name.replace(/\s+/g, '')}__`}
      </h1>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>Frontend Developer</h2>
        <p>
          Building impactful user experiences with pixel-perfect designs and clean code.
        </p>
        <button className="btn-hacker">Learn More</button>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-grid">
          {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
            <div className="project-item" key={index}>
              <h3>{project}</h3>
              <p>
                Innovative and dynamic solutions for real-world problems using the latest
                web technologies.
              </p>
              <img
                src={`https://picsum.photos/200/30${index}`}
                alt={`${project} Image`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Passionate about blending aesthetics and functionality to create futuristic
          interfaces and experiences.
        </p>
        <button className="btn-hacker">Contact Me</button>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2023 {name}</p>
      </footer>
    </div>
  );
};

export default App;