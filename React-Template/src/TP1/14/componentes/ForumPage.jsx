import React from 'react';
import Topico from './Topico';
import Contribuicoes from './Contribuicoes';
import FormularioResposta from './FormularioResposta';
import MenuPrincipal from './MenuPrincipal';
import TopicosRelacionados from './TopicosRelacionados';
import estilos from './ForumPage.module.css';

export default function ForumPage() {
  return (
    <div className={estilos.pagina}>
      <MenuPrincipal />
      <div className={estilos.conteudo}>
        <Topico 
          titulo="Fenomenologia Hegeliana" 
          subtitulo="A Dialética do Conhecimento e a Consciência em Busca da Verdade"
          descricao="Na obra Fenomenologia do Espírito, Hegel propõe uma jornada dialética 
    pela qual a consciência passa para alcançar o conhecimento absoluto. 
    Quero abrir este espaço para discutir os seguintes pontos:
    1. Como a dialética hegeliana pode ser aplicada em nossa compreensão moderna da epistemologia?
    2. O conceito de superação de Hegel é ainda relevante no contexto das crises existenciais contemporâneas?
    3. Em que medida a visão hegeliana do espírito se conecta com outras tradições filosóficas?"
          autor="Arwen Romero" 
          data="17 de Setembro, 2024"
          curtidas={150}
          respostas={45}
        />
        <Contribuicoes />
        <FormularioResposta usuario="Usuário Autenticado" />
        <TopicosRelacionados />
      </div>
    </div>
  );
}