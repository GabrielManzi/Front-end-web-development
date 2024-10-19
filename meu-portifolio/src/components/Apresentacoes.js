// src/components/Apresentacoes.js
import React from 'react';

function Apresentacoes() {
  return (
    <div className="text-center">
      <h2>Minhas Apresentações</h2>
      <p className="mt-3">
        Veja minha apresentação diretamente no Canva clicando no link abaixo:
      </p>
      <a
        href="https://www.canva.com/design/DAFo2sQWU_Q/AGira8VBWrwHGmgnP1MUpA/view?utm_content=DAFo2sQWU_Q&utm_campaign=designshare&utm_medium=link&utm_source=editorhttps://www.canva.com/design/DAFo2sQWU_Q/AGira8VBWrwHGmgnP1MUpA/view?utm_content=DAFo2sQWU_Q&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Ver Apresentação
      </a>
    </div>
  );
}

export default Apresentacoes;
