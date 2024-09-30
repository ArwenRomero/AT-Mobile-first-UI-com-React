import React, { useState } from 'react';
import estilos from './FormularioResposta.module.css';

export default function FormularioResposta({ usuario }) {
  const [resposta, setResposta] = useState('');

  const enviarResposta = () => {
    alert(`Resposta enviada: ${resposta}`);
  };

  return (
    <div className={estilos.formulario}>
      <h3>Responder como {usuario}</h3>
      <textarea 
        value={resposta} 
        onChange={(e) => setResposta(e.target.value)} 
        placeholder="Escreva sua resposta aqui..." 
      />
      <button onClick={enviarResposta}>Enviar Resposta</button>
    </div>
  );
}