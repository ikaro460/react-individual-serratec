import "./App.css";
import Footer from "./components/Footer";
import MeuNome from "./components/MeuNome";
import HelloWorld from "./components/HelloWorld";
import "./styles/global.css";

function App() {
  function clique() {
    console.log("foi clicado");
  }

  return (
    <div className="App">
      <HelloWorld />
      <MeuNome />
      <Footer />

      <button onClick={clique}>Clique aqui</button>
    </div>
  );
}

export default App;
