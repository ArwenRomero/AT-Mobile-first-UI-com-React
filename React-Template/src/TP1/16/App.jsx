import React from 'react';
import Cabecalho from './componentes/Cabecalho';
import MenuPrincipal from './componentes/MenuPrincipal';
import DetalhesProduto from './componentes/DetalhesProduto';
import InformacoesVendedor from './componentes/InformacoesVendedor';
import ComentariosProduto from './componentes/ComentariosProduto';
import PerguntasProduto from './componentes/PerguntasProduto';
import ProdutosRelacionados from './componentes/ProdutosRelacionados';
import dados from "./dados";

function App() {
    return (
      <div className="aplicativo">
        <Cabecalho />
        <MenuPrincipal />
        <div className="conteudoPrincipal">
          <section id="detalhes-produto">
            <DetalhesProduto produto={dados.produto} />
          </section>
          <section id="informacoes-vendedor">
            <InformacoesVendedor vendedor={dados.vendedor} />
          </section>
          <section id="comentarios-produto">
            <ComentariosProduto comentarios={dados.comentarios} />
          </section>
          <section id="perguntas-produto">
            <PerguntasProduto perguntas={dados.perguntas} />
          </section>
          <section id="produtos-relacionados">
            <ProdutosRelacionados produtos={dados.produtosRelacionados} />
          </section>
        </div>
      </div>
    );
  }

export default App;