import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function InformacoesVendedor({ vendedor }) {
  const estrelas = Array(5)
    .fill(0)
    .map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{
          color: index < vendedor.nota ? "#FFD700" : "#CCC",
        }}
      />
    ));

  return (
    <div className="informacoesVendedor">
      <h2>Informações do Vendedor</h2>
      <p>Nome: {vendedor.nome}</p>
      <p>E-mail: {vendedor.email}</p>
      <p>Telefone: {vendedor.telefone}</p>
      <div className="notaVendedor">{estrelas}</div>
    </div>
  );
}

export default InformacoesVendedor;