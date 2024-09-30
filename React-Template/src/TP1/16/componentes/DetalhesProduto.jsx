import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DetalhesProduto({ produto }) {
  const estrelas = Array(5)
    .fill(0)
    .map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{
          color: index < produto.nota ? "#FFD700" : "#CCC",
        }}
      />
    ));

  return (
    <div className="detalhesProduto">
      <h2>{produto.nome}</h2>
      <img src={produto.imagem} alt={produto.nome} />
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <div className="notaProduto">{estrelas}</div>
    </div>
  );
}

export default DetalhesProduto;