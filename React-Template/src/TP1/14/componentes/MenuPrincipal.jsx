import React, { useState } from 'react';
import estilos from './MenuPrincipal.module.css';

export default function MenuPrincipal() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className={estilos.menu}>
      <div className={estilos.logo}>Fórum AT Mobile</div>
      <button className={estilos.hamburguer} onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>
      <ul className={menuAberto ? estilos.menuAberto : ''}>
        <li>Início</li>
        <li>Discussões</li>
        <li>Meus Tópicos</li>
        <li>Notificações</li>
        <li>Configurações</li>
      </ul>
    </nav>
  );
}