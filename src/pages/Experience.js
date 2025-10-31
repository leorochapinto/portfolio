import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-hero">
        <h1 className="page-title">Experiência Profissional</h1>
        <p className="page-subtitle">
          Minha trajetória no desenvolvimento de software e empreendedorismo
        </p>
      </div>

      <div className="experience-container">
        <VerticalTimeline lineColor="#667eea">
          {/* DevPlans */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'white',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
              borderRadius: '20px',
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Março 2022 - Presente"
            iconStyle={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
            }}
            icon={<i className="fas fa-rocket"></i>}
          >
            <h3 className="vertical-timeline-element-title">Fundador & CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DevPlans Software LTDA - Florianópolis, SC
            </h4>
            <div className="timeline-description">
              <p>
                Fundei a DevPlans com o propósito de transformar boas ideias em negócios
                digitais de sucesso. A empresa é especializada em desenvolvimento de
                e-commerce, marketplaces e soluções web personalizadas.
              </p>
              <h5>Principais Responsabilidades:</h5>
              <ul>
                <li>Liderança técnica e gestão de equipe de desenvolvimento</li>
                <li>Arquitetura de soluções usando Jamstack e metodologias ágeis</li>
                <li>
                  Desenvolvimento de integrações com mais de 20 marketplaces (Mercado Livre,
                  Amazon, B2W, etc.)
                </li>
                <li>Implementação de soluções omnichannel conectando lojas físicas e virtuais</li>
                <li>Integração com sistemas ERP e plataformas de pagamento</li>
                <li>Consultoria técnica e suporte contínuo aos clientes</li>
              </ul>
              <h5>Tecnologias Utilizadas:</h5>
              <div className="tech-badges">
                <span>React</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>APIs RESTful</span>
                <span>MongoDB</span>
                <span>Jamstack</span>
                <span>AWS</span>
                <span>Git</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Investe na Planta */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'white',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
              borderRadius: '20px',
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="[PERÍODO A DEFINIR] - [PERÍODO A DEFINIR]"
            iconStyle={{
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              color: '#fff',
            }}
            icon={<i className="fas fa-building"></i>}
          >
            <h3 className="vertical-timeline-element-title">Tech Lead / CTO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Investe na Planta - Florianópolis, SC
            </h4>
            <div className="timeline-description">
              <p>
                Liderança técnica na maior plataforma de lançamentos imobiliários do Brasil,
                focada em oportunidades de investimento em imóveis na planta a preço de custo.
              </p>
              <h5>Principais Responsabilidades:</h5>
              <ul>
                <li>Liderança técnica do time de desenvolvimento</li>
                <li>
                  Arquitetura e desenvolvimento da plataforma web de investimentos imobiliários
                </li>
                <li>Implementação de sistemas de gestão de lançamentos e oportunidades</li>
                <li>Desenvolvimento de features para análise de investimentos</li>
                <li>Integração com sistemas de CRM e ferramentas de marketing</li>
                <li>Otimização de performance e experiência do usuário</li>
                <li>Mentoria e code review do time de desenvolvedores</li>
              </ul>
              <h5>Tecnologias Utilizadas:</h5>
              <div className="tech-badges">
                <span>React</span>
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>APIs</span>
                <span>Cloud</span>
                <span>CI/CD</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* JExperts */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'white',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
              borderRadius: '20px',
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Janeiro 2019 - 2022"
            iconStyle={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
            }}
            icon={<i className="fas fa-code"></i>}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">JExperts</h4>
            <div className="timeline-description">
              <p>
                Início da minha carreira profissional como trainee developer, onde adquiri
                experiência sólida em desenvolvimento full stack e trabalho em equipe.
              </p>
              <h5>Principais Atividades:</h5>
              <ul>
                <li>Desenvolvimento de aplicações web com React e Java</li>
                <li>Criação e consumo de APIs RESTful</li>
                <li>Trabalho com bancos de dados relacionais e não-relacionais</li>
                <li>Desenvolvimento frontend com HTML, CSS e JavaScript</li>
                <li>Integração com APIs de terceiros</li>
                <li>Participação em metodologias ágeis (Scrum)</li>
              </ul>
              <h5>Tecnologias Utilizadas:</h5>
              <div className="tech-badges">
                <span>React</span>
                <span>Java</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>MongoDB</span>
                <span>APIs</span>
                <span>Git</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Início da Jornada */}
          <VerticalTimelineElement
            iconStyle={{
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              color: '#fff',
            }}
            icon={<i className="fas fa-star"></i>}
          >
            <h3 className="vertical-timeline-element-title">Início da Jornada</h3>
            <p>O começo de uma carreira dedicada à tecnologia e inovação</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <section className="achievements-section">
          <h2>Principais Conquistas</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>50+ Projetos</h3>
              <p>Entregues com sucesso ao longo da carreira</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Liderança Técnica</h3>
              <p>Gestão e mentoria de equipes de desenvolvimento</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Empresa Própria</h3>
              <p>Fundação e crescimento da DevPlans Software</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Soluções Escaláveis</h3>
              <p>E-commerces processando milhares de transações</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
