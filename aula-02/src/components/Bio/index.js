import React from "react";
import Botao from "../Botao";
import "./style.css";

export default function Bio({ nome, idade }) {
  return (
    <div className="bio">
      <h1 className="bio-title">BIO</h1>
      <p>
        <strong>Nome: </strong>
        {nome}
      </p>
      <p>
        <strong>Idade: </strong>
        {idade}
      </p>
    </div>
  );
}
