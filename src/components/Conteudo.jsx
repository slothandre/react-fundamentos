/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../api/cursos";
import { useState } from "react";

function Conteudo() {
  /* Criando um gerenciador de state para mudança/filtro
  de categorias. Inicialmente, começa como null pois ainda não
  temos uma escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    // Capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setCategoria(null);
  };

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
    /* Se o state categoria for igual a uma
    das categorias dos cursos, então será retornada
    a lista de cursos daquela categoria. Senão, será
    retornada lista completa devido ao state ser null (ou seja,
    não há uma categoria para filtrar) */
    return curso.categoria === categoria || categoria === null;
  });

  /* Guardando a quantidade de cursos filtrados */
  const quantidade = cursosFiltrados.length;

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
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar filtro</button>
          )}
        </p>
        <p>Quantidade de cursos: {quantidade}</p>
        {/* Renderização Condicional
        O texto/tag/componente somente será renderizado/exibido
        se o state categoria existir (ou seja, não é
        null, undefinided, false) */}
        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>
          </p>
        )}
        {quantidade === 0 && (
          <p style={{ color: "red", textAlign: "center" }}>
            Não há notícias desta categoria!
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
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
  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
    font-size: 1.1rem;
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
