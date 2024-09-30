import React from "react";
import Carrinho from "./Carrinho";

const itensExemplo = [
  { id: 1, nome: "Disco Saturday Night Wrist - Deftones", precoUnitario: 50.0 },
  { id: 2, nome: "Disco White Pony - Deftones", precoUnitario: 30.0 },
  { id: 3, nome: "Disco Diamond Eyes - Deftones", precoUnitario: 20.0 },
];

const App = () => {
  return <Carrinho itens={itensExemplo} />;
};

export default App;