import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img
              src="/images/avatar.jpg"
              alt="Leonardo Rocha Pinto"
              className="profile-image"
            />
            <div className="status-badge">
              <span className="status-dot"></span>
              Disponível para projetos
            </div>
          </div>

          <h1 className="hero-title">
            Olá, sou <span className="gradient-text">Leonardo Rocha Pinto</span>
          </h1>

          <h2 className="hero-subtitle">
            Fundador & CEO @ DevPlans | Full Stack Developer
          </h2>

          <p className="hero-description">
            Especialista em desenvolvimento de e-commerce, marketplaces e soluções web escaláveis.
            Transformando ideias em negócios digitais de sucesso.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <h3>6+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Empresas Fundadas</p>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/experiencias" className="btn btn-primary">
              Ver Experiências
            </Link>
            <Link to="/contato" className="btn btn-secondary">
              Entre em Contato
            </Link>
          </div>

          <div className="tech-stack">
            <h3>Tecnologias Principais</h3>
            <div className="tech-icons">
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-java"></i>
                <span>Java</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-database"></i>
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-aws"></i>
                <span>Cloud</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll para saber mais</p>
        </div>
      </div>

      <section className="highlights-section">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>DevPlans Software</h3>
            <p>Fundador & CEO desde 2022</p>
            <p className="highlight-description">
              Empresa especializada em desenvolvimento de e-commerce, marketplaces e
              integrações com mais de 20 plataformas. Soluções omnichannel usando Jamstack.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Full Stack Developer</h3>
            <p>Expertise em múltiplas tecnologias</p>
            <p className="highlight-description">
              Desenvolvimento completo desde o frontend até APIs e integrações complexas.
              React, Node.js, Java, MongoDB e soluções cloud.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>E-commerce Specialist</h3>
            <p>Transformação digital de negócios</p>
            <p className="highlight-description">
              Especialista em criar experiências de compra excepcionais e integrar
              lojas físicas ao mundo digital com performance e segurança.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
