# Processo de Desenvolvimento e Validação

Este documento registra a evolução do projeto de forma incremental, validando cada etapa antes de avançar para a próxima (Front-End ⇄ Back-End ⇄ API externa).

> **Observação:** As imagens citadas abaixo devem estar em `docs/img/`.

---

## 1) Testes de introdução às tecnologias

### 1.1 Teste de clique no botão (evento no React)

Os testes são importantes quando estamos conhecendo uma nova tecnologia.  
Para este teste, criamos uma **Arrow Function** chamada `cliqueNoBotao`, adicionamos um `console.log("O botão foi clicado")` e chamamos a função no clique do botão, validando a resposta no console do navegador.

```js
function App() {
  const cliqueNoBotao = async (e) => {
    e.preventDefault();
    console.log("O botão foi clicado");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>
            Lista de personagens <br /> da saga starWars
          </h2>

          <form>
            <input
              id="inputID"
              type="text"
              name="personagem"
              placeholder="Nome do personagem"
              required
            />

            <button type="submit" onClick={(e) => cliqueNoBotao(e)}>
              Testar clique
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}
Resultado: imagem a colocar









1.2 Utilizando Axios no React

No projeto React, no arquivo App.js, adicionamos o Axios e testamos uma requisição GET para o servidor local.

import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("http://localhost:3000/")
    .then((response) => {
      const retorno = response.data;
      console.log(retorno);
    })
    .catch((error) => console.log(error))
    .finally("");

  return null;
}
export default App;

No Back-End, no arquivo serve.js, criamos uma rota simples para responder a requisição.

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Resposta do servidor");
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});


1.3 Criar uma base de dados local para ser consumida por nossa API

No Back-End (arquivo serve.js), criamos um objeto simples para simular uma base de dados inicial.

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const dados = {
  Nome: "Luke Skywalker",
  Altura: "172",
  Peso: "77",
  Cabelo: "loiro",
  "Cor da pele": "branca",
  Olhos: "azul",
  gênero: "masculino",
};

app.get("/", (req, res) => {
  res.send(dados);
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});

1.4 Consumir a base de dados no Front-End (React)

No Front-End (arquivo App.js), consumimos o objeto retornado pelo Back-End e exibimos o resultado no console.

import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("http://localhost:3000/")
    .then((response) => {
      const retorno = response.data;
      console.log(retorno);
    })
    .catch((error) => console.log(error))
    .finally("");

  return null;
}
export default App;

1.5 Uso de try/catch (teste de erro controlado)

Neste teste, simulei um erro para forçar a exibição da mensagem "Usando Catch e try".

Desafio: descubra o erro (dica: nome de variável).
Simule outros erros, teste respostas com status e brinque com as possibilidades.

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const dado = {
  Nome: "Luke Skywalker",
  Altura: "172",
  Peso: "77",
  Cabelo: "loiro",
  "Cor da pele": "branca",
  Olhos: "azul",
  gênero: "masculino",
};

app.get("/", (req, res) => {
  try {
    res.send(dados);
  } catch {
    res.send("Usando Catch e try");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});

1.6 Teste de acesso à API da Star Wars (SWAPI)

Aqui testamos o consumo direto da API externa via Back-End.

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const axios = require("axios");

app.get("/", async (req, res) => {
  const response = await axios("https://swapi.dev/api/people/");
  try {
    res.send(response.data);
  } catch {
    res.send("Usando Catch e try");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});

2) Momento reflexão (arquitetura e objetivo)

Após instalar os aplicativos e bibliotecas necessárias, configuramos um listener (ouvido) para o servidor Back-End na porta 3000 e testamos acessando:

http://localhost:3000

No Front-End, inicializamos o servidor (porta padrão do React) e validamos a aplicação no navegador.

O desafio do projeto é:

buscar um personagem pelo nome em uma API externa (SWAPI)

encaminhar a requisição por meio de uma API desenvolvida por nós (Back-End)

retornar ao Front-End os dados do personagem

permitir cadastrar o personagem em uma lista de favoritos

permitir consultar a lista de favoritos na interface

Protótipo visual da ideia:

“Dividir para conquistar”: API criada, servidores iniciados, criamos um “ouvido” no Back-End e uma “boca” no Front-End.
Próximo passo: fazer os dois conversarem.

3) Testes de endpoints (SWAPI)
3.1 Primeiro teste: /people/ (listar recursos por página)

export default App;

