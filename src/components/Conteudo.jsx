/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../api/cursos";

function Conteudo() {
  const aplicarFiltro = (event) => {
    console.log(event.currentTarget.innerText);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <img src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
        </p>
      </div>

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

  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
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

export default Conteudo;
