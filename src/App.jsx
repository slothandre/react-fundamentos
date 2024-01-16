import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import Container from "./components/Container";
import DetalhesProduto from "./pages/DetalhesProduto";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={DetalhesProduto} path="/produtos/:id" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
