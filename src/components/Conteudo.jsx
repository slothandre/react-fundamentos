/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  const datas = ["10/10/1954", "01/01/1995", "15/12/2012"];

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

      <div className="artigos">
        <Artigo
          imagem={imagem1}
          data={datas[0]}
          icone="🎃"
          titulo="Senhor dos Anéis"
          descricao="Livro criado por Tokien"
        />
        <Artigo
          imagem={imagem2}
          data={datas[1]}
          icone="🎨"
          titulo="Game Of Thrones"
          descricao="Aventura maluca com gente sempre morrendo"
        />
        <Artigo
          imagem={imagem3}
          data={datas[2]}
          icone="💎"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
