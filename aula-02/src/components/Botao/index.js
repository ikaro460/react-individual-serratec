import React from "react";

export default function Botao({ title }) {
  function mensagem() {
    console.log("Eu sou o botao: ", title);
  }

  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 15 }}>
      {title}
    </button>
  );
}
