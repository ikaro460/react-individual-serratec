import React, { useState } from "react";
import "./style.css";

function Contador() {
  const [count, setCount] = useState(0);

  const prova = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="card-count">
      <h2>Contador</h2>
      <button onClick={prova}>Contador: {count}</button>
    </div>
  );
}

export default Contador;
