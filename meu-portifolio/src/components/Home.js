// src/components/Home.js

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
    </div>
  );
}

export default Home;
