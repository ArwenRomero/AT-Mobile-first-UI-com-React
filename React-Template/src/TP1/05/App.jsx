import React from "react";
import styles from "./main.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.menuGlobal}>Menu Global</nav>
      <header className={styles.cabecalho}>Cabeçalho</header>
      <aside className={styles.menuContextualizado}>Menu Contextualizado</aside>
      <main className={styles.conteudoPrincipal}>Conteúdo Principal</main>
      <aside className={styles.anuncios}>Anúncios</aside>
      <footer className={styles.rodape}>Rodapé</footer>
    </div>
  );
};

export default App;