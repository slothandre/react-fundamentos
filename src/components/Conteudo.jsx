/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../api/cursos";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
  }

  button:hover {
    background-color: #69aaff;
    cursor: pointer;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & article {
        width: 48%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    .artigos {
      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  const exemplo2 = () => {
    alert("Exemplo 2");
  };
  const exemplo3 = () => {
    alert("Exemplo 3");
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <button onClick={exemplo2}>Exemplo 2</button>

      <br />
      <button onClick={exemplo3}>
        Exemplo 3 (Acionando o evento/função através do Conteudo (pai))
      </button>

      <img src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            key={curso.id}
            nome={curso.titulo}
            categoria={curso.categoria}
            preco={curso.preco}
          />
        ))}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
