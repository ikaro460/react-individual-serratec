import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);
  const [mostrar, setMostrar] = useState("Vite + React");

  const prova = () => {
    setMostrar(nome + "\n " + idade + " " + email);
    console.log("EU SOU A FUNÇÃI PROVA!!!");
    setCount((prevState) => prevState + 1);
  };

  const cadastrar = () => {
    const infos = {
      nome: nome,
      email: email,
      idade: idade,
    };

    console.log(infos);
    setNome("");
    setEmail("");
    setIdade(0);
    localStorage.setItem("infos", JSON.stringify(infos));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{mostrar}</h1>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Digite sua idade..."
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <div className="card">
        <button onClick={cadastrar}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
