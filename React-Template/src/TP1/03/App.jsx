import React, { useState } from 'react';
import styles from './Galeria.module.css';

const Galeria = () => {
  const [imagens, setImagens] = useState([
    'https://cdn-icons-png.flaticon.com/128/2504/2504929.png',
    'https://cdn-icons-png.flaticon.com/128/2504/2504929.png',
    'https://cdn-icons-png.flaticon.com/128/2504/2504929.png',
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://cdn-icons-png.flaticon.com/128/2504/2504929.png']);
  };

  const removerImagem = () => {
    setImagens(imagens.slice(0, -1));
  };

  return (
        <div className={styles.container}>
          <div className={styles.botoes}>
            <button className={styles.botao} onClick={adicionarImagem}>+</button>
            <span className={styles.contador}>{imagens.length}</span>
            <button className={styles.botao} onClick={removerImagem}>-</button>
          </div>
          <div className={styles.galeria}>
            {imagens.map((src, index) => (
              <img key={index} src={src} alt={`Imagem ${index + 1}`} className={styles.imagem} />
            ))}
          </div>
        </div>
      );
};

export default Galeria;
