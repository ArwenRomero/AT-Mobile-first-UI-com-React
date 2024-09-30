import React from 'react';
import estilos from './Topico.module.css';

export default function Topico({ titulo, subtitulo, descricao, autor, data, curtidas, respostas }) {
  return (
    <div className={estilos.topico}>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <p>{descricao}</p>
      <div className={estilos.info}>
        <span>Autor: {autor}</span>
        <span>Data: {data}</span>
        <span>{curtidas} Curtidas</span>
        <span>{respostas} Respostas</span>
      </div>
    </div>
  );
}