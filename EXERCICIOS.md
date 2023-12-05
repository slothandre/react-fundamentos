# Exercícios

## Branch 07-desafio-props

1. Crie uma nova branch chamada **07-desafio-props**
2. Traga o `cursos.js` (criado nas aulas de revisão/reforço de JS) para uma nova pasta chamada `api` dentro de `src`
3. Vá para o `Artigo.jsx` e substitua toda a estrutura atual do `<StyledArtigo>` por uma estrutura com:
   - Elemento `<h3>` mostrando a **categoria** do curso
   - Elemento `<p>` mostrando o **nome** do curso
   - Elemento `<p>` mostrando o **preço** do curso formatado em Reais
4. Vá para `Conteudo.jsx` e:
   - Importe o `cursos.js`
   - **Remova** todos os componentes `<Artigo>` de dentro da `div`
   - Com ajuda do `map`, faça o componente `<Artigo>` ser carregado com os dados dinâmicos do `cursos`

---

## Branch 06-props

1. Crie um array simples/numérico com a data de lançamento de cada livro (invente!)

2. Passe através de uma nova `prop` chamada `data` para o componente `<Artigo>` (na mesma sequência que está feito no array).

3. No componente `<Artigo>` receba esta data e a mostre
   em uma tag `<time>` logo após a descrição.

---

## Branch 05-styled-components

### 1) Componente Artigo.jsx

Transforme o `<Artigo>` em um componente estilizado (dê o nome que quiser) com as seguintes configurações:

- Cor de fundo de sua preferência
- Espaçamento interno de `1rem`
- Margem superior/inferior de `0.5rem` e esquerda/direita de `0`

Faça regras adicionais para:

- Colocar uma cor e uma borda inferior no elemento `<h3>`
- Aumentar o tamanho do `<p>` para 1.1rem

#### 📢 DESAFIO

- Crie uma **Media Query** que faça os 3 componentes `<Artigo>` ficarem lado a lado se a aplicação estiver em uma tela com largura mínima de `650px`.

- Faça os ajustes necessários no HTML/JSX e no CSS (Styled) para haja um espaço entre os artigos.

### 2) Componente Rodape.jsx

Transforme o `<Rodape>` em um componente estilizado chamado `StyledRodape` com as seguintes configurações:

- Plano de fundo com gradiente/degrade de cores de sua preferência
- Altura de `30vh`
- Recursos do flex para alinhamento centralizado total

#### 📢 DESAFIO DE REFATORAÇÃO

- Separe o componente estilizado (`StyledRodape`) do componente principal (`Rodape`)

- Você pode criar dentro do `src` uma nova pasta chamada `styles`, e nela criar um arquivo `styles.js` (ou outros nomes de sua preferência)

- No arquivo `styles.js`, importe a `lib` `styled-components`, tire a `const StyledRodape` do `Rodape.jsx` e a coloque aqui no `styles.js`.

- Em seguida, exporte esta `const` sem usar `default`.

- Volte para o componente `Rodape.jsx`, substitua o import do styled-component pelo import do styles.js trazendo a const `StyledMenu`
