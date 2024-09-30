import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const expandirMenu = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const colapsarMenu = keyframes`
  from {
    opacity: 1;
    transform: scaleY(1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
  }
`;

const ContainerMenu = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #007bff;
  padding: 16px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
    align-items: center;
  }
`;

const Marca = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin: 0;
    text-align: left;
    flex: 1;
  }
`;

const Icones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    flex: 1;
  }
`;

const IconeBotao = styled.div`
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: ${props => (props.esconder ? "none" : "block")};
  }
`;

const Opcoes = styled.div`
  display: ${props => (props.expandido || props.tamanhoGrande ? "block" : "none")};
  margin-top: 16px;
  width: 100%;
  background-color: white;
  padding: 16px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${props => (props.expandido ? expandirMenu : colapsarMenu)} 0.4s ease forwards;
  transform-origin: top center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex: 2;
    margin-top: 0;
    box-shadow: none;
    animation: none;
    transform: none;
  }

  div {
    padding: 12px 16px;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    color: #007bff;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s ease, padding-left 0.2s ease;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f2f2f2;
      padding-left: 24px;
    }

    @media (min-width: 768px) {
      border-bottom: none;
      padding: 0 16px;
      &:hover {
        background-color: transparent;
        padding-left: 0;
      }
    }
  }
`;

const MenuExpansivel = () => {
  const [expandido, setExpandido] = useState(false);
  const [tamanhoGrande, setTamanhoGrande] = useState(window.innerWidth >= 768);

  const alternarMenu = () => {
    if (!tamanhoGrande) setExpandido(!expandido);
  };

  useEffect(() => {
    const ajustarTamanho = () => {
      setTamanhoGrande(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setExpandido(false);
    };

    window.addEventListener("resize", ajustarTamanho);
    return () => {
      window.removeEventListener("resize", ajustarTamanho);
    };
  }, []);

  return (
    <ContainerMenu>
      <Marca>AT Mobile Arwen</Marca>
      <Opcoes expandido={expandido} tamanhoGrande={tamanhoGrande}>
        <div>Opção 1</div>
        <div>Opção 2</div>
        <div>Opção 3</div>
        <div>Opção 4</div>
      </Opcoes>
      <Icones>
        <IconeBotao onClick={alternarMenu} esconder={tamanhoGrande}>
          <FontAwesomeIcon icon={faBars} />
        </IconeBotao>
        <IconeBotao>
          <FontAwesomeIcon icon={faUser} />
        </IconeBotao>
      </Icones>
    </ContainerMenu>
  );
};

export default MenuExpansivel;