import React, { useState } from "react";
import "./style.css";

export default function Contador() {
  const [count, setCount] = useState(0);

  function somar() {
    setCount(count + 1);
    console.log("Contador: ", count);
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={somar}>Adicionar + 1</button>
    </div>
  );
}
