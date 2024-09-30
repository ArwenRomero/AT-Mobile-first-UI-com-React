import React from 'react';
import estilos from './Contribuicoes.module.css';

export default function Contribuicoes() {
  const respostas = [
    { autor: 'Pablo Fernando', data: '19 de Setembro, 2024', resposta: 'Acredito que a dialética hegeliana, ao questionar e superar as contradições internas do conhecimento, tem muito a oferecer para a epistemologia contemporânea, principalmente na desconstrução de certezas absolutas.', curtidas: 13 },
    { autor: 'Luiza Velazquez', data: '20 de Setembro, 2024', resposta: 'Interessante a conexão com o existencialismo. Acredito que Sartre dialoga com Hegel ao colocar o sujeito no centro da experiência da liberdade, mesmo que de maneira diferente.', curtidas: 18 },
  ];

  return (
    <div className={estilos.contribuicoes}>
      {respostas.map((res, index) => (
        <div key={index} className={estilos.resposta}>
          <p>{res.resposta}</p>
          <div className={estilos.info}>
            <span>Autor: {res.autor}</span>
            <span>Data: {res.data}</span>
            <span>{res.curtidas} Curtidas</span>
          </div>
        </div>
      ))}
    </div>
  );
}