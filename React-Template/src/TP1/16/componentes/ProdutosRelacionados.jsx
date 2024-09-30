import React from 'react';

function ProdutosRelacionados({ produtos }) {
  return (
    <section className="produtosRelacionados">
      <h2>Produtos Relacionados</h2>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p>Preço: {produto.preco}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProdutosRelacionados;