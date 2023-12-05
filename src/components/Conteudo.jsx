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
        >
          <h4>Volumes</h4>
          <ul>
            <li>A Sociedade do Anél</li>
            <li>As Duas Torres</li>
            <li>O Retorno do Rei</li>
          </ul>
        </Artigo>
        <Artigo
          imagem={imagem2}
          data={datas[1]}
          icone="🎨"
          titulo="Game Of Thrones"
          descricao="Aventura maluca com gente sempre morrendo"
        >
          <h4>Defuntos do livro</h4>
          <ol>
            <li>Aquele cara Stark</li>
            <li>Outra pessoa importante</li>
            <li>Mais uma pessoa surpreendente</li>
          </ol>
        </Artigo>
        <Artigo
          imagem={imagem3}
          data={datas[2]}
          icone="💎"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
        >
          <section>
            <h4>Assuntos</h4>
            <details>
              <summary>Estrutura</summary>
              <p>HTML5 para estruturar e etc...</p>
            </details>
            <details>
              <summary>Estilização</summary>
              <p>CSS3 para formatar e etc...</p>
            </details>
          </section>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
