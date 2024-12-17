import React from "react";
import "./styles.css";

const App = () => {
  const name = "_EfraimBeloXavier_";

  return (
    <div className="pip-container">
      {/* Banner */}
      <div className="banner" data-tilt>
        <span className="matrix-text">{name}</span>
      </div>

      {/* Seção de Apresentação */}
      <section className="hero-section">
        <h2 className="section-title">Quality Engineering Specialist</h2>
        <p>Automated & Manual Testing: API, Front-End, Mobile, Performance</p>
        <p>São Paulo, Brazil</p>
      </section>

      {/* Experiência Profissional */}
      <section className="projects-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience">
          <h3>Dock – Banking As A Service</h3>
          <p>
            <b>QA Intern</b> (Sept/2019 – Jul/2021) <br />
            <b>Junior QA Engineer</b> (Jul/2021 – Present)
          </p>
          <ul>
            <li>Created and maintained product documentation.</li>
            <li>
              Developed automated API tests using Ruby, Cucumber, RSpec,
              HTTParty, Selenium, and PyTest.
            </li>
            <li>
              Created mobile automated tests (Ruby, Cucumber, Android Studio,
              Appium, and Xcode).
            </li>
            <li>
              Performed manual API testing using Postman and Insomnia tools.
            </li>
            <li>
              Implemented performance and load tests with JMeter and K6.
            </li>
            <li>
              Built front-end test automation with JavaScript, Node.js, and
              Cypress.
            </li>
            <li>
              Practiced AWS daily (DynamoDB, Cloudwatch, and Secrets Manager).
            </li>
            <li>Experienced in Jenkins orchestration and GitHub workflows.</li>
          </ul>
        </div>
      </section>

      {/* Qualificações */}
      <section className="projects-section">
        <h2 className="section-title">Skills</h2>
        <ul>
          <li>API Testing (Manual/Automated)</li>
          <li>Front-End Test Automation (Cypress, JS, Node.js)</li>
          <li>Performance Testing with JMeter and K6</li>
          <li>Mobile Automation: Appium, Cucumber (Android & iOS)</li>
          <li>Cloud Tools: AWS (DynamoDB, Cloudwatch)</li>
          <li>CI/CD: Jenkins | GitHub</li>
          <li>Languages: Ruby, Python, JavaScript</li>
          <li>Tools: VSCode, Postman, RubyMine</li>
        </ul>
      </section>

      {/* Formação */}
      <section className="projects-section">
        <h2 className="section-title">Education</h2>
        <ul>
          <li>
            <b>Analysis and Systems Development</b> <br /> Fatec Zona Leste,
            2023 - Present
          </li>
          <li>
            <b>Information Systems</b> <br /> USP Leste, Transfer (2018–2022)
          </li>
        </ul>
      </section>

      {/* Cursos */}
      <section className="projects-section">
        <h2 className="section-title">Certifications & Courses</h2>
        <ul>
          <li>AWS Cloud Practitioner Certification (2023)</li>
          <li>ISTQB Foundation Level - CTFL Certification (2022)</li>
          <li>Mobile Automation: Appium & Jenkins (2022)</li>
          <li>Frontend Automation with Ruby, Capybara & Cucumber (2020)</li>
          <li>API Testing with HTTParty and RSpec (2020)</li>
          <li>Agile & Scrum Training (2019)</li>
        </ul>
      </section>

      {/* Contato */}
      <footer className="footer">
        <h2 className="section-title">Contact</h2>
        <ul>
          <li>Email: <a href="mailto:efraimbx99@gmail.com">efraimbx99@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/efraim-belo-xavier">in/efraim-belo-xavier</a></li>
          <li>GitHub: <a href="https://github.com/efraimxavier">github.com/efraimxavier</a></li>
          <li>Phone: +55 (11) 94920-0905</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
