function App() {
  return (
    <>
      <header>
        <h1>Olá React!</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/* Comentário no meio do JS
        É normal ficar entre {} nesta
        situação */}
      <main>
        <section>
          <h2>Conteúdo da aplicação</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            maxime eveniet quaerat assumenda natus dolor, excepturi ab corporis
            perspiciatis fugit quasi aliquam optio cum eos fuga asperiores totam
            vel reiciendis?
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo 1....</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo 2....</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo 3....</p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Rodapé da aplicação</h2>
      </footer>
    </>
  );
}

export default App;
