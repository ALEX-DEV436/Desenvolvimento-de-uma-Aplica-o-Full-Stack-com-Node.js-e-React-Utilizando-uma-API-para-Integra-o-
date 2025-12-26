#"Desenvolvimento de uma Aplicação Full Stack com Node.js e React&nbsp;: Utilizando uma API para Integração entre Front-end e Back-end"
<h2 align="left">
Aplicação Full Stack para Integração e Consumo de API Externa utilizando Node.js e React.
</h2>
<h3>Descrição</h3>
<p align="justify">
Este projeto consiste no desenvolvimento de uma aplicação <strong>Full Stack</strong>, utilizando <strong>Node.js</strong> no Back-End e <strong>React</strong> no Front-End, com o objetivo de integrar e consumir dados de uma API externa (SWAPI – Star Wars API).
</p>
<p align="justify">
A aplicação foi construída seguindo os princípios de uma <strong>API REST</strong>, promovendo uma comunicação padronizada, clara e eficiente entre servidor e cliente. O Back-End atua como intermediário entre o Front-End e a API pública, realizando as requisições, o tratamento dos dados e a exposição de endpoints próprios para consumo da interface.
</p>
<p align="justify">
Embora eu já possua experiência no desenvolvimento de aplicações web, este projeto marca uma etapa importante de transição para o uso de ferramentas e frameworks modernos, como <strong>Express</strong>, <strong>React</strong> e o ecossistema <strong>Node.js</strong>, anteriormente explorados de forma mais tradicional e sem o uso de frameworks.
</p>
<p align="justify">
O projeto foi desenvolvido como um desafio técnico e também como um exercício prático de aprendizado, visando consolidar conceitos de integração entre APIs, organização de código, boas práticas de desenvolvimento e arquitetura Full Stack.
</p>

<h3>🔎 Notas Técnicas e Atualizações</h3>
<small>
Atualizado em <strong>24/12/2025</strong>, após retomada do projeto e revisão geral do código e da documentação.
</small>
<img src="http://www.soumaisconquista.com/gitHub/icone/TEXTO.png" alt="Aviso" width="20" />
Durante uma revisão, foi identificado que a API pública utilizada no projeto (<strong>SWAPI</strong>) sofreu alteração de domínio:
<ul>
  <li><strong>Antigo:</strong> https://swapi.dev</li>
  <li><strong>Atual:</strong> https://swapi.py4e.com</li>
</ul>

Essa mudança pode impactar versões anteriores do projeto.  
Caso ocorra erro <strong>404</strong>, recomenda-se verificar o endpoint configurado.

<hr>
<h2>Protótipo</h2>
<p align="justify">
Abaixo está um protótipo funcional em formato de GIF, desenvolvido com o objetivo de visualizar e validar o fluxo principal da aplicação antes do refinamento final da interface.
</p>
<p align="justify">
O protótipo representa uma etapa inicial do processo de desenvolvimento, onde a prioridade foi compreender o comportamento do sistema, a interação do usuário e as principais funcionalidades, antes de ajustes mais finos relacionados a layout, tipografia e identidade visual.
</p>
<p align="justify">
A metodologia aplicada neste projeto segue um fluxo simples e iterativo:
</p>
<ul>
  <li>Definição da ideia e do conceito</li>
  <li>Implementação funcional</li>
  <li>Refinamento progressivo da interface e da experiência do usuário</li>
</ul>
<p align="justify">
Versões evolutivas do protótipo são mantidas no repositório para fins de estudo e acompanhamento da evolução do projeto, permitindo observar as decisões tomadas ao longo do desenvolvimento.
</p>
<p>
  <img src="http://www.soumaisconquista.com/gitHub/gifAnimado/prototipo15.gif" 
       alt="Protótipo funcional da aplicação em formato GIF" />
</p>
## 📚 Dicas e Referências

Durante o desenvolvimento deste projeto, foram utilizadas algumas referências técnicas e recursos de apoio:

- https://katex.org/docs/supported.html#line-breaks  
- https://gist.github.com/alexpeattie/4729247  
- Apostila de Introdução a Sistemas de Informação – UFU
## ✅ Checklist de Desenvolvimento

Este checklist representa as principais etapas planejadas e executadas durante o desenvolvimento da aplicação.

### ✔ Estrutura Inicial
- [x] Definição do conceito e protótipo funcional
- [x] Configuração do ambiente de desenvolvimento
- [x] Instalação das dependências
- [x] Configuração do Express no Back-End
- [x] Criação da API REST
- [x] Configuração de CORS e Nodemon

### ✔ Integração e Testes
- [x] Consumo da API externa (SWAPI)
- [x] Criação de rotas para acesso aos dados
- [x] Testes de endpoints e tratamento de retornos
- [x] Integração da API com o Front-End
- [x] Implementação de tratamento de erros (try/catch)

### ✔ Funcionalidades
- [x] Pesquisa de personagens por nome
- [x] Exibição de informações no Front-End
- [x] Cadastro de personagens em lista de favoritos

### ⏳ Em Desenvolvimento
- [ ] Exibição dos nomes dos filmes (em vez de URLs)
- [ ] Introdução de componentes React para melhor organização
- [ ] API REST para atualização da lista de favoritos

<h2>Contexto da API Externa</h2>

<h3>Star Wars API (SWAPI)</h3>

<p align="justify">
A <strong>SWAPI</strong> (Star Wars API) é uma API pública que disponibiliza dados estruturados do universo canônico de Star Wars, permitindo acesso programático a informações como personagens, filmes, planetas e espécies.
</p>

<p align="justify">
Durante a fase de testes e integração, foram analisados os endpoints disponibilizados na documentação oficial, sendo selecionados aqueles mais adequados ao escopo da aplicação.
</p>

<p>
Documentação oficial: 
<a href="https://swapi.dev/api/" target="_blank">https://swapi.dev/api/</a>  
(Acesso em: 09 out. 2024)
</p>

<ul>
  <li><strong>/people/</strong> — Retorna a lista de personagens</li>
  <li><strong>/people/:id/</strong> — Retorna um personagem específico</li>
  <li><strong>/people/schema/</strong> — Exibe o esquema JSON dos personagens</li>
</ul>
 
<h2>O Desafio</h2>

<p align="justify">
O desafio deste projeto consistiu no desenvolvimento de uma <strong>API REST</strong> capaz de integrar um <strong>Front-End em React</strong> com uma <strong>API externa</strong>, utilizando a SWAPI como fonte de dados.
</p>

<p align="justify">
A aplicação permite que o usuário pesquise personagens do universo Star Wars pelo nome. A requisição é enviada do Front-End para o Back-End, que atua como intermediário, consultando a API externa, tratando os dados recebidos e retornando uma resposta estruturada ao cliente.
</p>

<p align="justify">
A SWAPI é utilizada como base de dados externa, enquanto a API desenvolvida neste projeto é responsável por abstrair, organizar e disponibilizar essas informações de forma adequada ao Front-End.
</p>

<p align="justify">
As principais funcionalidades da aplicação incluem:
</p>

<ul>
  <li><strong>Busca de personagens:</strong> Pesquisa de personagens pelo nome, realizada através da API desenvolvida.</li>
  <li><strong>Cadastro em favoritos:</strong> Possibilidade de adicionar personagens a uma lista de favoritos.</li>
  <li><strong>Visualização de favoritos:</strong> Exibição da lista de personagens cadastrados pelo usuário.</li>
</ul>

<p align="justify">
O projeto integra <strong>Node.js</strong> e <strong>React</strong> em uma aplicação Full Stack, reforçando conceitos de integração entre sistemas, consumo de APIs externas e separação de responsabilidades entre Front-End e Back-End.
</p>


<h2>Tecnologias Utilizadas</h2>

<p>
  <img src="docs/badges/nodeJS.png" alt="Node.js" />
  <img src="docs/badges/react.png" alt="React" />
  <img src="docs/badges/express.png" alt="Express" />  
  <img src="docs/badges/nodemon.png" alt="nodemon.js" />
  <img src="docs/badges/cors.png" alt="cors" />
  <img src="docs/badges/apiRest.png" alt="apiRest" />
  <img src="docs/badges/npm.png" alt="npm" />
  <img src="docs/badges/gitHub.png" alt="gitHub" /> 
</p>

<ul>
  <li><strong>Node.js:</strong> Ambiente de execução utilizado no desenvolvimento do Back-End.</li>
  <li><strong>React:</strong> Biblioteca utilizada na construção da interface do usuário.</li>
  <li><strong>Express:</strong> Framework responsável pela criação da API REST e definição das rotas.</li>
  <li><strong>Nodemon:</strong> Ferramenta utilizada para reinicialização automática do servidor durante o desenvolvimento.</li>
  <li><strong>CORS:</strong> Middleware para controle de acesso entre domínios distintos.</li>
  <li><strong>API REST:</strong> Estilo arquitetural adotado para padronização da comunicação entre cliente e servidor.</li>
  <li><strong>NPM:</strong> Gerenciador de pacotes utilizado para controle das dependências do projeto.</li>
  <li><strong>GitHub:</strong> Plataforma utilizada para versionamento e compartilhamento do código-fonte.</li>
</ul>

<h2>Introdução</h2>

<p align="justify">
Este projeto foi iniciado a partir da necessidade de compreender e aplicar, de forma prática, conceitos relacionados à integração de APIs, arquitetura Full Stack e utilização de ferramentas modernas do ecossistema JavaScript.
</p>

<p align="justify">
Antes da implementação, foram realizadas análises conceituais e técnicas para entendimento do problema, definição do escopo e escolha das tecnologias mais adequadas. Esse processo permitiu estruturar a aplicação de forma incremental, priorizando clareza, organização e funcionamento correto antes de refinamentos visuais.
</p>

<p align="justify">
A abordagem adotada neste projeto reforça a importância do estudo prévio, da validação de conceitos e da experimentação prática como parte do processo de desenvolvimento de software.
</p>
<h2>Setup do Projeto</h2>

<p align="justify">
A seguir estão os passos necessários para executar o projeto localmente em ambiente de desenvolvimento.
</p>

<h3>Pré-requisitos</h3>
<ul>
  <li>Node.js</li>
  <li>NPM</li>
  <li>Visual Studio Code (ou editor de sua preferência)</li>
</ul>

<h3>Instalação</h3>

<ol>
  <li>Clone o repositório:</li>
</ol>

```bash
git clone https://github.com/ALEX-DEV436/Desenvolvimento-de-uma-Aplica-o-Full-Stack-com-Node.js-e-React-Utilizando-uma-API-para-Integra-o-
```
<ol start="2"> <li>Acesse a pasta do projeto:</li> </ol>

cd backend

<ol start="3"> <li>Instale as dependências:</li> </ol>

npm install

<ol start="4"> <li>Inicie o servidor:</li> </ol>

npm start

## Visão Geral – Back-End

O Back-End foi desenvolvido em Node.js utilizando o framework Express e é responsável por intermediar a comunicação entre o Front-End e a API externa do Star Wars (SWAPI).

### Principais responsabilidades
- Expor endpoints REST
- Consumir dados da API externa
- Tratar e retornar respostas para o Front-End

### Inicialização do servidor

Para iniciar o servidor Back-End, execute:

```bash
npm start
```
Exemplo de rota disponível

```js
app.get('/', (req, res) => {
  res.send('starWars');
});
```
## Visão Geral – Front-End

O Front-End foi desenvolvido em React e é responsável por fornecer a interface de interação com o usuário, permitindo a busca de personagens da saga Star Wars por meio da comunicação com a API interna.

### Principais responsabilidades
- Capturar a entrada do usuário
- Enviar requisições para o Back-End
- Exibir os dados retornados pela API

### Inicialização do Front-End

Para iniciar o servidor Front-End, execute:

```bash
npm start
```

## Processo de desenvolvimento e validação

O projeto foi construído de forma incremental, validando cada etapa antes de avançar para a próxima (Front-End ⇄ Back-End ⇄ API externa).

### O que foi validado durante a evolução
- Eventos e fluxo do formulário no React
- Comunicação HTTP entre Front-End e Back-End (Axios)
- Configuração de CORS para liberar requisições do cliente
- Consumo da API externa (SWAPI) através do Back-End
- Tratamento de respostas e cenários de erro (personagem não encontrado)
- Cadastro e listagem de favoritos (estado e rotas dedicadas)

> Documentação completa com testes, prints e códigos: `docs/Processo-Desenvolvimento-Validacao.md` (em breve também em PDF).

## Conclusão

Este projeto teve como objetivo consolidar, na prática, o desenvolvimento de uma aplicação Full Stack,
integrando Front-End (React), Back-End (Node.js / Express) e o consumo de uma API externa (SWAPI).

Durante o processo, foi possível aplicar conceitos fundamentais como:
- Comunicação entre cliente e servidor via HTTP
- Consumo e tratamento de dados de APIs externas
- Criação de rotas REST
- Controle de estado no Front-End
- Validação incremental por meio de testes manuais

### Próximos passos (evoluções planejadas)
- Introdução de componentes reutilizáveis no Front-End
- Criação de endpoints REST para atualização e persistência da lista de favoritos
- Melhor tratamento de erros e respostas da API
- Organização do código em camadas (controllers, services)

Este repositório representa um marco de aprendizado prático, servindo tanto como registro da evolução
técnica quanto como base para futuras melhorias e estudos.

      

