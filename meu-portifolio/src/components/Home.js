// src/components/Home.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p className="lead">Analista de Observabilidade | ELK Stack</p>
      <img
        src="/minha-foto.jpg"
        alt="Minha Foto"
        className="rounded-circle mt-3"
        style={{ width: '200px', height: '200px' }}
      />
      <p className="mt-3">
        Olá, sou Gabriel Manzi, e aqui você encontrará alguns dos meus projetos, vídeos de participações em podcasts e apresentações.
      </p>
      {/* Ícone do LinkedIn com link */}
      <a href="https://www.linkedin.com/in/gabrielmanzi/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0e76a8', marginTop: '20px' }} />
      </a>
    </div>
  );
}

export default Home;
