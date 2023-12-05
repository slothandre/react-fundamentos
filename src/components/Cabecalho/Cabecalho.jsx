import Menu from "../Menu";

/* Importação do módulo CSS como um objeto
chamado estilos (o nome é a seu critério) */
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        {/* DESAFIO: troque pelo 'destaque-texto'
        do Cabecalho.module.css. Utilize a sintaxe
        de acesso com estilos["nome-da-classe"] */}
        <span className={estilos["destaque-texto"]}>Olá</span>
        <span className={estilos.sombra}>React!</span> 😎
      </h1>
      <hr />
      <p className={`${estilos["destaque-texto"]} centralizar`}>
        Classes combinadas
      </p>
      <Menu />
    </header>
  );
}

export default Cabecalho;
