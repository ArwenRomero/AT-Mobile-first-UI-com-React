import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { Add, Remove } from "@mui/icons-material";

const CarrinhoContainer = styled(Container)({
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const ItemCarrinho = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: "15px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.12)",
  },
}));

const NomeItem = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#333",
  marginBottom: "8px",
});

const PrecoItem = styled(Typography)({
  color: "#666",
  fontSize: "1rem",
});

const TotalCompra = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontWeight: "bold",
  fontSize: "1.7rem",
  color: "#2e7d32",
  textAlign: "right",
}));

const BotaoAcao = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const BotaoDiminuir = styled(BotaoAcao)({
  backgroundColor: "#d32f2f",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#b71c1c",
  },
});

const BotaoAumentar = styled(BotaoAcao)({
  backgroundColor: "#2e7d32",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1b5e20",
  },
});

const Carrinho = ({ itens }) => {
  const [quantidades, setQuantidades] = useState(
    itens.map((item) => ({ ...item, quantidade: 1 }))
  );

  const aumentarQuantidade = (id) => {
    setQuantidades(
      quantidades.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  const diminuirQuantidade = (id) => {
    setQuantidades(
      quantidades.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  const calcularTotalItem = (item) => {
    return item.quantidade * item.precoUnitario;
  };

  const calcularTotalCompra = () => {
    return quantidades.reduce(
      (total, item) => total + calcularTotalItem(item),
      0
    );
  };

  return (
    <CarrinhoContainer maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Carrinho Loja de Discos
      </Typography>
      <Grid container spacing={2}>
        {quantidades.map((item) => (
          <Grid item xs={12} key={item.id}>
            <ItemCarrinho>
              <CardContent>
                <NomeItem>{item.nome}</NomeItem>
                <PrecoItem>
                  Preço unitário: R$ {item.precoUnitario.toFixed(2)}
                </PrecoItem>
                <PrecoItem>Quantidade: {item.quantidade}</PrecoItem>
                <PrecoItem>
                  Total: R$ {calcularTotalItem(item).toFixed(2)}
                </PrecoItem>
              </CardContent>
              <CardActions>
                <BotaoAumentar
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => aumentarQuantidade(item.id)}
                >
                  Aumentar
                </BotaoAumentar>
                <BotaoDiminuir
                  variant="contained"
                  startIcon={<Remove />}
                  onClick={() => diminuirQuantidade(item.id)}
                >
                  Diminuir
                </BotaoDiminuir>
              </CardActions>
            </ItemCarrinho>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <TotalCompra>
        Total da Compra: R$ {calcularTotalCompra().toFixed(2)}
      </TotalCompra>
    </CarrinhoContainer>
  );
};

export default Carrinho;