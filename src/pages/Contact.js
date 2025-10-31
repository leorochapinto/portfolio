import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por enquanto, apenas mostra uma mensagem de sucesso
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1 className="page-title">Entre em Contato</h1>
        <p className="page-subtitle">
          Vamos transformar sua ideia em realidade digital
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h2>Informações de Contato</h2>
              <p>
                Estou sempre aberto a discutir novos projetos, ideias criativas ou
                oportunidades de fazer parte da sua visão.
              </p>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:contato@devplans.com.br">contato@devplans.com.br</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>Telefone</h3>
                  <a href="tel:+5548991859293">+55 (48) 99185-9293</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Localização</h3>
                  <p>Florianópolis, SC - Brasil</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Horário de Atendimento</h3>
                  <p>Seg - Sex: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Conecte-se</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/leonardo-rocha-pinto-19188818b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/leorochapinto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/rochaa.leo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/leonardo.rocha.94617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-facebook"></i>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Envie uma Mensagem</h2>
            <p className="form-description">
              Preencha o formulário abaixo e entrarei em contato o mais breve possível.
            </p>

            {status === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Mensagem enviada com sucesso! Retornarei em breve.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i> Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
