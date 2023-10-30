import React, { useState } from "react";
import "./styles/global.css";
import Contador from "./components/Contador";
import SignIn from "./components/Signin";

function App() {
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      <h1>React + Vite</h1>
      {page ? <SignIn /> : <Contador />}

      <button
        className="change-button"
        onClick={() => setPage((prevState) => !prevState)}
      >
        Mudar de Página
      </button>
    </div>
  );
}

export default App;
