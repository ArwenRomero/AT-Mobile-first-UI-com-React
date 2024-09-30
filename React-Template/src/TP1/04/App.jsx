import React from "react";
import styles from "./main.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.cabecalho}>Cabeçalho</header>
      <nav className={styles.menuGlobal}>Menu Global</nav>
      <aside className={styles.anuncios}>Anúncios</aside>
      <aside className={styles.menuContextualizado}>Menu Contextualizado</aside>
      <main className={styles.conteudoPrincipal}>Conteúdo Principal</main>
      <footer className={styles.rodape}>Rodapé</footer>
    </div>
  );
};

export default App;