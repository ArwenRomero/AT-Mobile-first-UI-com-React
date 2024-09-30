import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Cartao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #007bff;
  border-radius: 8px;
  max-width: 300px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f9f9f9;
`;

const Foto = styled.div`
  width: 100%;
  height: 150px;
  background-color: #ddd;
  margin-bottom: 16px;
`;

const Informacoes = styled.div`
  text-align: center;
  margin-bottom: 16px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
    font-size: 1rem;
    color: #555;
  }
`;

const Icones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 16px;

  svg {
    font-size: 1.5rem;
    color: #007bff;
  }
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Card = () => {
  return (
    <Cartao>
      <Foto />
      <Informacoes>
        <h2>Arwen Romero</h2>
        <p>18/06/2004</p>
        <p>Setor</p>
        <p>Cargo</p>
      </Informacoes>
      <Icones>
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faLocationDot} />
      </Icones>
      <Tabela>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faSquareCheck} /></td>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faSquareCheck} /></td>
            <td>Tarefa 2</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faSquareCheck} /></td>
            <td>Tarefa 3</td>
          </tr>
        </tbody>
      </Tabela>
    </Cartao>
  );
};

export default Card;