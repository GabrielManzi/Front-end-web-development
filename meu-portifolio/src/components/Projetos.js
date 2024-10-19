// src/components/Projetos.js

import React from 'react';

function Projetos() {
  const projetos = [
    
    {
      nome: 'Front-end web development',
      descricao: 'Projeto de desenvolvimento front-end.',
      link: 'https://github.com/GabrielManzi/Front-end-web-development',
    },
  ];

  return (
    <div>
      <h2>Meus Projetos</h2>
      <div className="row">
        {projetos.map((projeto, index) => (
          <div className="col-md-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{projeto.nome}</h5>
                <p className="card-text">{projeto.descricao}</p>
                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
