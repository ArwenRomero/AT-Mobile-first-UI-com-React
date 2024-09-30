import React, { useState } from "react";
import estilos from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Aplicacao = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className={estilos.container}>
      <header className={estilos.cabecalho}>Cabeçalho</header>
      <nav className={`${estilos.menuGlobal} ${estilos.somenteDesktop}`}>
        Menu Global
      </nav>
      <nav className={`${estilos.menuGlobalMobile} ${estilos.somenteMobile}`}>
        <button className={estilos.botaoMenu} onClick={alternarMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`${estilos.opcoesMenu} ${menuAberto ? estilos.mostrar : estilos.esconder}`}>
          <a href="#">Opção 1</a>
          <a href="#">Opção 2</a>
          <a href="#">Opção 3</a>
          <a href="#">Opção 4</a>
        </div>
      </nav>
      <aside className={estilos.menuContextual}>Menu Contextual</aside>
      <main className={estilos.conteudoPrincipal}>Conteúdo Principal</main>
      <aside className={estilos.anuncios}>Anúncios</aside>
      <footer className={estilos.rodape}>Rodapé</footer>
    </div>
  );
};

export default Aplicacao;