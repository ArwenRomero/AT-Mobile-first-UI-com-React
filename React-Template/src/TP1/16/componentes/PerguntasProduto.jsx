import React from 'react';

function PerguntasProduto({ perguntas }) {
  return (
    <section className="perguntasProduto">
      <h2>Perguntas sobre o Produto</h2>
      <ul>
        {perguntas.map((pergunta, index) => (
          <li key={index}>
            <p>Usuário: {pergunta.usuario}</p>
            <p>Data: {pergunta.data}</p>
            <p>Pergunta: {pergunta.duvida}</p>
            <p>Resposta: {pergunta.resposta}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PerguntasProduto;