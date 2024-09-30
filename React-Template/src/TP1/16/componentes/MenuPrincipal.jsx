import React from "react";

function MenuPrincipal() {
  return (
    <nav className="menuPrincipal">
      <ul>
        <li>
          <a href="#detalhes-produto">Detalhes do Produto</a>
        </li>
        <li>
          <a href="#informacoes-vendedor">Informações do Vendedor</a>
        </li>
        <li>
          <a href="#comentarios-produto">Comentários</a>
        </li>
        <li>
          <a href="#perguntas-produto">Perguntas</a>
        </li>
        <li>
          <a href="#produtos-relacionados">Produtos Relacionados</a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuPrincipal;