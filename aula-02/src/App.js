import "./App.css";
import "./styles/global.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";
import Gatinhos from "./components/Gatinhos";
import Header from "./components/Header";

function App() {
  const pessoas = [
    { nome: "Joao", idade: 32 },
    { nome: "Icaro", idade: 28 },
    { nome: "Lamar Odom", idade: 43 },
  ];
  const titulos = ["Salvar", "Editar", "Excluir"];

  return (
    <div className="App">
      <Header />
      <div className="bios">
        {pessoas.map((item, index) => (
          <Bio key={index} nome={item.nome} idade={item.idade} />
        ))}

        <div className="botoes">
          {titulos.map((item, index) => (
            <Botao key={index} title={item} />
          ))}
        </div>
      </div>
      <Gatinhos />
    </div>
  );
}

export default App;
