import React from 'react';
import './styles.css';
import { textShadow } from 'web-animations-js';

function App() {
  return (
    <div className="container">
      {/* Banner */}
      <h1 className="banner" data-tilt>
        {`_${'Efraim Belo Xavier'.replace(' ', '')}__`}
      </h1>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>Frontend Developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
auctor, vestibulum magna sed, convallis ex.</p>
        <button>Learn More</button>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
auctor, vestibulum magna sed, convallis ex.</p>
            <img src="https://picsum.photos/200/300" alt="Project 1 Image" />
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
auctor, vestibulum magna sed, convallis ex.</p>
            <img src="https://picsum.photos/200/301" alt="Project 2 Image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
auctor, vestibulum magna sed, convallis ex.</p>
        <button>Contact Me</button>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2023 Efraim Belo Xavier</p>
      </footer>
    </div>
  );
}


function encodeText(text) {
  return text.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase().replace(/\s+/g, '-');
}

function decodeText(encodedText) {
  const originalText = encodeText(encodedText).replace(/^-+/, '');
  if (originalText !== encodedText) {
    return '';
  }
  // Add additional decoding logic here if needed
  return originalText;
}

const text = 'Efraim Belo Xavier';

textShadow({
  text: decodeText(encodeText(text)),
  x: -200,
  y: -100,
  scale: 1.5,
  rotate: Math.PI / 4,
  color: '#ffffff',
  duration: 3000,
  easing: 'cubic-bezier(0.215, 0.610, 0.755, 0.355)',
});

canvas.style.position = 'relative';
document.body.appendChild(canvas);

setInterval(() => {
  textShadow({
    text: decodeText(encodeText(text)),
    x: -200,
    y: -100,
    scale: 1.5,
    rotate: Math.PI / 4,
    color: '#ffffff',
    duration: 3000,
    easing: 'cubic-bezier(0.215, 0.610, 0.755, 0.355)',
  });
}, 200);