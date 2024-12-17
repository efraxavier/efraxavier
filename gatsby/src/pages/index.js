import React from "react";
import "./styles.css";

const App = () => {
  const name = "efraim belo xavier";

  return (
    <div className="pip-container">
      {/* Título com efeito hacker */}
      <div className="banner" data-tilt>
        <span className="matrix-text">{name}</span>
      </div>

      {/* Seção de Apresentação */}
      <section className="hero-section">
        <h2 className="section-title">Frontend Developer</h2>
        <p>
          Coding like it's the end of the world. Creating interfaces that stand
          the test of time.
        </p>
      </section>

      {/* Seção de Projetos */}
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <ul className="projects">
          <li>● Project One - Revolutionizing UIs</li>
          <li>● Project Two - Code like a Ghost</li>
          <li>● Project Three - Into the Matrix</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&lt;2024&gt; Designed by {name.replace("_", "").replace("_", "")}</p>
      </footer>
    </div>
  );
};

export default App;
