import React, { useState } from "react";
import "./style.css";
import Botao from "../Botao";

export default function Gatinhos() {
  const gatinhos = [
    {
      idNum: 0,
      id: "z0cI0mqjr",
      url: "https://cdn2.thecatapi.com/images/z0cI0mqjr.jpg",
      width: 1600,
      height: 1207,
    },
    {
      idNum: 1,
      id: "e07",
      url: "https://cdn2.thecatapi.com/images/e07.jpg",
      width: 600,
      height: 485,
    },
    {
      idNum: 2,
      id: "bla",
      url: "https://cdn2.thecatapi.com/images/bla.jpg",
      width: 1843,
      height: 2764,
    },
  ];

  const [gato, setGato] = useState(gatinhos[0]);

  function sortear(aux) {
    if (aux === "proximo") {
      if (gato.idNum < gatinhos.length - 1) {
        setGato(gatinhos[gato.idNum + 1]);
      }
    } else if (aux === "anterior") {
      if (gato.idNum > 0) {
        setGato(gatinhos[gato.idNum - 1]);
      }
    }
  }

  return (
    <div className="gatos">
      <h2>Gatinhos API</h2>
      <div className="gato-container">
        <div className="gato-sort">
          <img src={gato.url} alt="gatinho" />
          <button onClick={() => sortear("anterior")}>Anterior</button>
          <button onClick={() => sortear("proximo")}>Próximo</button>
        </div>

        {gatinhos.map((item, index) => (
          <div className="gato-box" key={item.idNum}>
            <img src={item.url} alt={"gatinho " + (index + 1)} />
          </div>
        ))}
      </div>
    </div>
  );
}
