import React from 'react';
import './main.css'

function App() {
  return (
    <div className="menu">
      <div className="logo">
        <img src="./imagens/logo.png" alt="Logo" />
      </div>
      <div className="opcoes">
        <a href="#produtos">Produtos</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </div>
      <div className="icone">
        <button onClick={() => alert('vc foi redirecionado para o perfil!')}>
          <img src="./imagens/perfil.png" alt="Ícone" />
        </button>
      </div>
    </div>
  );
}

export default App;
