// src/components/Apresentacoes.js

import React from 'react';

function Apresentacoes() {
  const apresentacoes = [
    {
      titulo: 'Apresentação em PPT 1',
      link: 'link_para_seu_arquivo_ppt1',
    },
    
    // Adicione mais apresentações conforme necessário
  ];

  return (
    <div>
      <h2>Documentos de Apresentações</h2>
      <ul className="list-group">
        {apresentacoes.map((apresentacao, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {apresentacao.titulo}
            <a href={apresentacao.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Visualizar</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apresentacoes;
