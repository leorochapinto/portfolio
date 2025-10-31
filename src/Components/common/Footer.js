import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Leonardo Rocha Pinto</h3>
          <p>Fundador & CEO @ DevPlans</p>
          <p>Full Stack Developer | E-commerce Specialist</p>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>
            <i className="fas fa-envelope"></i> contato@devplans.com.br
          </p>
          <p>
            <i className="fas fa-phone"></i> +55 (48) 99185-9293
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Florianópolis, SC - Brasil
          </p>
        </div>

        <div className="footer-section">
          <h4>Conecte-se</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/leonardo-rocha-pinto-19188818b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/leorochapinto"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/rochaa.leo/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/leonardo.rocha.94617"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Expertise</h4>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Java</span>
            <span className="tech-tag">E-commerce</span>
            <span className="tech-tag">Jamstack</span>
            <span className="tech-tag">APIs</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Leonardo Rocha Pinto. Todos os direitos reservados.</p>
        <p>Desenvolvido com React & Jamstack Architecture</p>
      </div>
    </footer>
  );
};

export default Footer;
