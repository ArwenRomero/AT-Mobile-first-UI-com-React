const dados = {
  produto: {
    nome: "Carne Tomahawk Crua",
    imagem: "https://baconmockup.com/200/200/", // Substitua pela URL da imagem real
    descricao: "Carne Tomahawk de alta qualidade, conhecida pelo seu sabor intenso e textura macia. Ideal para grelhar ou assar, com um corte suculento que mantém a umidade e o sabor. Peso médio: 1.2kg.",
    preco: 199.99,
    nota: 4.8,
  },
  vendedor: {
    nome: "Gourmet Carnes Finas",
    email: "arwen@gourmetcarnes.com",
    telefone: "(11) 91234-5678",
    nota: 4.9,
  },
  comentarios: [
    {
      usuario: "Lucas",
      data: "15/08/2024",
      mensagem: "Ótima qualidade! A carne estava macia e saborosa, perfeita para um churrasco especial.",
      nota: 5,
    },
    {
      usuario: "Ana",
      data: "12/08/2024",
      mensagem: "A carne é boa, mas o preço é um pouco elevado. Esperava algo mais exclusivo pelo valor.",
      nota: 4,
    },
    {
      usuario: "Carlos",
      data: "10/08/2024",
      mensagem: "A entrega foi rápida e a carne veio bem embalada. Ótima opção para quem aprecia um bom corte.",
      nota: 5,
    },
  ],
  perguntas: [
    {
      usuario: "Bruno",
      data: "05/08/2024",
      duvida: "Qual é o prazo de validade desta carne?",
      resposta: "A carne possui validade de 30 dias se mantida refrigerada e até 6 meses se congelada.",
    },
    {
      usuario: "Fernanda",
      data: "03/08/2024",
      duvida: "Esta carne é fresca ou congelada?",
      resposta: "O produto é enviado fresco, mas pode ser congelado após o recebimento sem perder a qualidade.",
    },
  ],
  produtosRelacionados: [
    {
      nome: "Carne Ribeye Crua",
      imagem: "https://baconmockup.com/300/300/", // Substitua pela URL da imagem real
      preco: 149.99,
    },
    {
      nome: "Carne Picanha Wagyu",
      imagem: "https://baconmockup.com/350/350/", // Substitua pela URL da imagem real
      preco: 299.99,
    },
    {
      nome: "Carne Ancho Black Angus",
      imagem: "https://baconmockup.com/450/450/", // Substitua pela URL da imagem real
      preco: 129.99,
    },
  ],
};

export default dados;