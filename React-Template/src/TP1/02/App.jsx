import React from 'react';
import './main.css';

function MenuVertical() {
  return (
    <div className="menu">
      <div className="topo-menu">
        <img 
          src="https://cdn-icons-png.flaticon.com/128/2504/2504884.png" 
          alt="Logomenu" 
          className="logo" 
        />
        <div className="icone-menu">☰</div>
      </div>
      <nav className="opcoes-menu">
        <a href="#perfil" className="opcao">Perfil</a>
        <a href="#postagens" className="opcao">Postagens</a>
        <a href="#amigos" className="opcao">Amigos</a>
        <a href="#fotos" className="opcao">Fotos</a>
        <a href="#videos" className="opcao">Vídeos</a>
        <a href="#configuracoes" className="opcao">Configurações</a>
      </nav>
    </div>
  );
}

export default MenuVertical;
