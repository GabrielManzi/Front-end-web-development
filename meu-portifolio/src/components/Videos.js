// src/components/Videos.js

import React from 'react';

function Videos() {
  const videos = [
    {
      titulo: 'VECTRA HACKER SPACE | O impacto da Observabilidade para o seu negócio',
      url: 'https://www.youtube.com/embed/zVMmPF_NQs4?start=13',
    },
    {
      titulo: 'VECTRA HACKER SPACE | Os desafios da transição de carreira para a área de TI',
      url: 'https://www.youtube.com/embed/pmWgLfewyE4?start=312',
    },
    // Adicione mais vídeos conforme necessário
  ];

  return (
    <div>
      <h2>Vídeos de Apresentações</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={video.url} allowFullScreen title={video.titulo}></iframe>
            </div>
            <p className="mt-2 text-center">{video.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
