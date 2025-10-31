import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1 className="page-title">Sobre Mim</h1>
        <p className="page-subtitle">
          Conheça minha trajetória e paixão por tecnologia
        </p>
      </div>

      <div className="about-container">
        <section className="about-content">
          <div className="about-text">
            <h2>Quem sou eu?</h2>
            <p>
              Sou Leonardo Rocha Pinto, desenvolvedor full stack e empreendedor com mais de
              6 anos de experiência no desenvolvimento de soluções web. Minha jornada começou
              em 2019 como trainee developer e evoluiu até fundar minha própria empresa de
              software, a DevPlans.
            </p>
            <p>
              Atualmente, como CEO da DevPlans Software, lidero uma equipe especializada no
              desenvolvimento de e-commerces, marketplaces e soluções omnichannel. Nossa
              missão é transformar ideias em negócios digitais de sucesso, conectando empresas
              com as melhores tecnologias do mercado.
            </p>
            <p>
              Ao longo da minha carreira, tive a oportunidade de trabalhar com diversas
              tecnologias e frameworks, sempre buscando as melhores práticas e soluções mais
              eficientes para cada projeto. Minha experiência abrange desde o desenvolvimento
              frontend com React até a criação de APIs robustas e integrações complexas.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>
                <i className="fas fa-code"></i> Frontend
              </h3>
              <ul>
                <li>React & Hooks</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>Bootstrap & Material-UI</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-server"></i> Backend
              </h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Java & Spring Boot</li>
                <li>RESTful APIs</li>
                <li>MongoDB & SQL</li>
                <li>Authentication & Security</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-shopping-cart"></i> E-commerce
              </h3>
              <ul>
                <li>Integrações com Marketplaces</li>
                <li>Sistemas de Pagamento</li>
                <li>Gestão de Estoque</li>
                <li>ERP Integrations</li>
                <li>Soluções Omnichannel</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-tools"></i> Ferramentas & Metodologias
              </h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Metodologias Ágeis</li>
                <li>Jamstack Architecture</li>
                <li>CI/CD</li>
                <li>Cloud Services (AWS)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2>Formação</h2>
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <h3>Sistemas de Informação</h3>
              <p className="education-institution">UNISUL - Universidade do Sul de Santa Catarina</p>
              <p className="education-description">
                Formação focada em desenvolvimento de software, análise de sistemas,
                banco de dados e gestão de projetos de TI.
              </p>
            </div>
          </div>
        </section>

        <section className="languages-section">
          <h2>Idiomas</h2>
          <div className="languages-grid">
            <div className="language-card">
              <h3>Português</h3>
              <div className="language-bar">
                <div className="language-progress" style={{ width: '100%' }}></div>
              </div>
              <p>Nativo</p>
            </div>

            <div className="language-card">
              <h3>Inglês</h3>
              <div className="language-bar">
                <div className="language-progress" style={{ width: '85%' }}></div>
              </div>
              <p>Avançado - 6 anos de estudo</p>
            </div>
          </div>
        </section>

        <section className="personal-section">
          <h2>Interesses Pessoais</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="fas fa-laptop-code"></i>
              <p>Desenvolvimento de Software</p>
            </div>
            <div className="interest-item">
              <i className="fas fa-brain"></i>
              <p>Inteligência Artificial</p>
            </div>
            <div className="interest-item">
              <i className="fas fa-rocket"></i>
              <p>Empreendedorismo</p>
            </div>
            <div className="interest-item">
              <i className="fas fa-book"></i>
              <p>Aprendizado Contínuo</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
