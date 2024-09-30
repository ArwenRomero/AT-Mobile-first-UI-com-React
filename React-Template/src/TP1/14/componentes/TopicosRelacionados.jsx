import React from 'react';
import estilos from './TopicosRelacionados.module.css';

export default function TopicosRelacionados() {
  const topicosRecentes = [
    'Tópico Recente 1', 'Tópico Recente 2', 'Tópico Recente 3'
  ];
  const topicosCurtidos = [
    'Tópico Curtido 1', 'Tópico Curtido 2'
  ];
  const topicosRespondidos = [
    'Tópico Respondido 1', 'Tópico Respondido 2', 'Tópico Respondido 3'
  ];

  return (
    <div className={estilos.topicos}>
      <h3>Tópicos Relacionados</h3>
      <div className={estilos.listaTopicos}>
        <div>
          <h4>Recentes</h4>
          <ul>{topicosRecentes.map((t, index) => <li key={index}>{t}</li>)}</ul>
        </div>
        <div>
          <h4>Curtidos</h4>
          <ul>{topicosCurtidos.map((t, index) => <li key={index}>{t}</li>)}</ul>
        </div>
        <div>
          <h4>Respondidos</h4>
          <ul>{topicosRespondidos.map((t, index) => <li key={index}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}