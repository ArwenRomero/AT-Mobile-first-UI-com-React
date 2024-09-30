import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ComentariosProduto({ comentarios }) {
  return (
    <div className="comentariosProduto">
      <h2>Comentários</h2>
      <ul>
        {comentarios.map((comentario, index) => {
          const estrelas = Array(5)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{
                  color: i < comentario.nota ? "#FFD700" : "#CCC",
                }}
              />
            ));

          return (
            <li key={index}>
              <p><strong>{comentario.usuario}</strong> - {comentario.data}</p>
              <p>{comentario.mensagem}</p>
              <div className="notaComentario">{estrelas}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ComentariosProduto;