import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: purple;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

/* Definindo props para o componente */
function Artigo(props) {
  const formataPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <StyledArtigo>
      <h3>{props.categoria}</h3>
      <p>
        <b>Curso: </b>
        {props.nome}
      </p>
      <p>
        <b>Preço: </b>
        {formataPreco(props.preco)}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
