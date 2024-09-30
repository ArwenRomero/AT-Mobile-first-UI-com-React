import React, { useState } from "react";
import styles from "./main.module.css";

const ListaCompras = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const itens = [
    { id: 1, nome: "Cupuaçu", valorUnitario: 8.5, quantidade: 4 },
    { id: 2, nome: "Manga", valorUnitario: 2.1, quantidade: 6 },
    { id: 3, nome: "Morango", valorUnitario: 4.0, quantidade: 5 },
  ];

  const valorTotalCompra = itens.reduce(
    (acc, item) => acc + item.valorUnitario * item.quantidade,
    0
  );

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <div className={`${styles.container} ${temaEscuro ? styles.escuro : ""}`}>
      <button className={styles.botaoTema} onClick={toggleTema}>
        Alternar Tema
      </button>
      <ul className={styles.lista}>
        {itens.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.nome}>{item.nome}</div>
            <div className={styles.detalhes}>
              <span>Valor Unitário: R${item.valorUnitario.toFixed(2)} |</span>
              <span> Quantidade: {item.quantidade} |</span>
              <span> Total: R${(item.valorUnitario * item.quantidade).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.valorTotal}>
        <strong>Valor Total da Compra: R${valorTotalCompra.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default ListaCompras;