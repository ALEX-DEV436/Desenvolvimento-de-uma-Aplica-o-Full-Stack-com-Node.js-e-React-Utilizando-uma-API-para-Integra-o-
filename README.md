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
Atualizado em <strong>21/12/2024</strong>, após retomada do projeto e revisão geral do código e da documentação.
</small>

<br><br>

<img src="http://www.soumaisconquista.com/gitHub/icone/icone3.png" alt="Info" width="20" />
<strong> Observação:</strong> outras atualizações e ajustes estão descritos ao final deste README.

<br><br>

<img src="http://www.soumaisconquista.com/gitHub/icone/TEXTO.png" alt="Aviso" width="20" />
Durante a revisão, foi identificado que a API pública utilizada no projeto (<strong>SWAPI</strong>) sofreu alteração de domínio:

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
  <img src="http://www.soumaisconquista.com/gitHub/Badges/nodeJS.png" alt="Node.js" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/react.png" alt="React" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/express.png" alt="Express" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/nodemon.png" alt="Nodemon" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/cors.png" alt="CORS" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/apiRest.png" alt="API REST" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/npm.png" alt="NPM" />&nbsp;&nbsp;&nbsp;
  <img src="http://www.soumaisconquista.com/gitHub/Badges/gitHub.png" alt="GitHub" />
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


<h3>Visão - Front-End</h3> 
<h4>Implementamos nossa APi no Back-End, agora vamos ao Front-End</h4>
<p>
  Após criar a API, decidi começar no React com a interface da aplicação, pois é ponto de entrada de nosso sistema, nosso gatilho que inicia toda a sequencia de
  ações e decisões que vamos desenvolver.
</p>
<p>Pode deixar a tela do Back-End aberto, e abra novamente o prompt de comando do seu computador.</p>
<p>Nele digite : 
  
           ```
                      npx create-react-app app
           ```
</p>
<p>Aguarde... demora um pouquinho!</p>
<p>No final deve apresentar algo semelhante a tela abaixo! Obs: Selecione a pasta que voce quer baixar com o comando <strong>cd ./pasta/.</strong> </p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img1a.jpg" alt="Instalando o react" /></p>
<p>Vamos instalar agora a biblioteca axios</p>
<p>Entre na pasta app</p>
<p>
  Para instalar o axios&nbsp;:
</p>
<p>
  
        ```
                   npm i axios
        ```
</p>
<h4>Abrindo o visual code&nbsp;:</h4>
<p>
  
        ``` 
                  code .
        ```
</p> 
<p>Já no visual code observe as pasta e os arquivos pela imagem apresentada.</p>
<p>Veja que muita coisa retiramos, por não precisar para o nosso projeto. </p>
<p>Mais é opcional&nbsp;!</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img3a.jpg" alt="Tela do visual code apresentando o React" /></p>
<h3>Comandos no frontend&nbsp;! </h3>

<p>1º Primeiro vamos ativar o nosso servidor no Front End. No terminal digite na pasta app(se voce instalou o react na pasta app veja img 8):</p>
    
        ```
                  npm run start       
        ```  
     
<p>  
    <p>Deve aparecer uma mensagem informando que a porta 3000 esta em uso, apert y que vai direcionar para outra porta.</p>
     <p>Não dando erro o servidor vai esta ligado e operante </p>
     <p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img4a.jpg" alt="Acionando o servidor" /></p>
     <p>2º Quando vou começar uma aplicação nova, sempre inicio pelo ponto de entrada.Pois é apartir deste ponto que o nosso sistema vai rodar. Não funcionando corretamente 
     todo o nosso sistema fica comprometido</p>
     <p>Portanto para isso vamos criar um formulário básico de entrada para teste</p>  
       
               ```    
                             function App(){ 
                                 return (
                                       <div className="App">
                                          <header className="App-header">
                                             <div>            
                                               <h2>
                                                 Lista de personagens <br /> da saga starWars
                                               </h2>  
                                              <form>
                                                  <input 
                                                    id='inputID'
                                                    type='text'
                                                    name='personagem'
                                                    placeholder='Nome do personagem'
                                                    required
                                                    />
                                                  <button                  
                                                    type='submit'              
                                                   >Pesquisar
                                                  </button>
                                               </form> 
                                              </div>
                                           </header>       
                                        </div>
                                      );
                                    };
                                  export default App;
     
                ```  
     
</p> 
<p> Resultado:</p>
<p> <p> <img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img5a.jpg" alt="Teste de servidor" /></p>  
</p>
<h2>"Sebo nos dedos"</h2>
 <h3>Testes de introdução as tecnologias</h3>
 <h4>Teste do clique no botão.</h4>
 <p>Os testes são importantes quando estamos conhecendo uma nova tecnologia.Para esse teste criamos a <strong>Arrow Function</strong> <strong><i>handlePesquisar</i></strong> colocamos um console log com o texto "O botão foi clicado" e,no formulário fazemos a chamada da função.Verificamos no console se houve resposta.</p>
<p>
   
           ```
                       function App() {     
                              const cliqueNoBotao = async (e) =>{     
                              e.preventDefault();  
                              console.log('O botão foi clicado'); 
                             };
                       return (       
                                <div className="App">
                                   <header className="App-header">
                                      <div>          
                                         <h2>Lista de personagens <br/> da saga starWars</h2>    
                                         <form>
                                            <input 
                                              id='inputID'
                                              type='text'
                                               name='personagem'
                                               placeholder='Nome do personagem'
                                               required 
                                              />
                                             <button                    
                                               type='submit'
                                               onClick={(e) => cliqueNoBotao(e)}>Testar clique
                                             </button>
                                           </form> 
                                         </div>
                                       </header>       
                                      </div>
                                     );
                                    }
                                   export default App;
    
             ```   
</p> 
<p>Resultado.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testeCliqueNoBotao2.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
<h4>Utilizando o Axio;</h4> 
<p>No projeto react no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

               ```

                               import './App.css';
                               import axios from 'axios';

                               function App() {   
                                             axios.get('http://localhost:3000/')
                                            .then((response) =>{
                                             const retorno =response.data;  
                                             console.log(retorno);    
                                            })
                                            .catch((error) => console.log(error))
                                            .finally('');   
                                            }
                               export default App;
             ```
<p>No back-end no arquivo<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

             ```

                              const express = require('express');
                              const app = express();
                              app.use(express.json());
                              const cors = require('cors');
                              app.use(cors());

                              app.get('/', (req,res)=>{    
                                   res.send('Resposta do servidor');    
                              });

                              app.listen(3000, () =>{
                                   console.log('Servidor rodando');
                              });
           ```
    
<h4>Criar uma base de dados para ser consumida por nossa API;</h4> 
<p>No back-end no arquivo<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

           ```
      
                            const express = require('express');
                            const app = express();
                            app.use(express.json());
                            const cors = require('cors');
                            app.use(cors());

                            const dados = {
                                          "Nome": "Luke Skywalker",
                                          "Altura": "172",
                                          "Peso": "77",
                                          "Cabelo": "loiro",
                                          "Cor da pele": "branca",
                                          "Olhos": "azul",
                                          "gênero": "masculino",
                                       }

                           app.get('/', (req,res)=>{   
                                res.send(dados);  
                           });

                           app.listen(3000, () =>{
                               console.log('Servidor rodando');
                           });
           ```
<h4>Consumir a base de dados no front-end&nbsp;(react);</h4> 
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

           ```
                          import './App.css';
                          import axios from 'axios';

                          function App() {  
                                       axios.get('http://localhost:3000/')
                                      .then((response) =>{
                                       const retorno =response.data;  
                                       console.log(retorno);    
                                  })
                                      .catch((error) => console.log(error))
                                      .finally(''); 
                                  }
                          export default App;
         ```     
<h4>Uso do try e o catch;</h4>
<p>No back-end no arquivo<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>
<p>Neste teste veja que simulei um erro para aparecer a mensagem <strong>"Usando Catch e try"</strong>. Descubra o erro! Simule outros! Introduza status nas msg! Brinque com as posibilidades. </p>

         ```
                         const express = require('express');
                         const app = express();
                         app.use(express.json());
                         const cors = require('cors');
                         app.use(cors());

                         const dado = {
                                      "Nome": "Luke Skywalker",
                                      "Altura": "172",
                                      "Peso": "77",
                                      "Cabelo": "loiro",
                                      "Cor da pele": "branca",
                                      "Olhos": "azul",
                                      "gênero": "masculino",
                                }
                         app.get('/', (req,res)=>{     
                                 try{         
                                    res.send(dados);       
                              } catch{
                                    res.send("Usando Catch e try");
                               }   
                           });

                       app.listen(3000, () =>{
                                  console.log('Servidor rodando');
                          }); 
         ```
<h4>Teste de acesso a API da Star Wars; </h4>
<p></p>

         ```
	           const express = require('express');
                   const app = express();
                   app.use(express.json());
                   const cors = require('cors');
                   app.use(cors());
                   const axios = require('axios');
		   
                   app.get('/', async(req,res)=>{  
                           const response = await axios('https://swapi.dev/api/people/')    
                           try{         
                              res.send(response.data);       
                         } catch{
                             res.send("Usando Catch e try");
                      }    
   
                   });

                  app.listen(3000, () =>{
                         console.log('Servidor rodando');
                  });
	 ```
<h4>Teste de endpoints fornecidos na documentação da API Star Wars;</h4> 
<h3>Momento reflexão&nbsp;! Ufa&nbsp;!!! Vamos respirar um pouco.</h3>
 <p align="justify">Após instalar os aplicativos e as bibliotecas necessárias, configuramos um listener&nbsp;(ouvido)&nbsp;para o nosso servidor Back-End na porta 3000. Testamos o servidor acessando o endereço: <i><a 'href="http://localhost:3000"'>http://localhost:3000</a></i>. Além disso, configuramos uma rota e criamos um objeto de dados para ser consumido por nossa API.<br/> No front-end, inicializamos o servidor,na porta 3001, e testamos nossa aplicação no navegador acessando: <i><a 'href="http://localhost:3001"'>http://localhost:3001</a></i> .Criamos um formulário básico e, testamos a funcionalidade de clique do botão. </p>
 <p align="justify">
É importante lembrar que nosso desafio consiste em buscar um personagem pelo nome em uma API externa (a da Star Wars), encaminhando a requisição por meio de uma API desenvolvida por nós. Nossa API, por sua vez, retornará ao front-end os dados e as características do personagem de acordo com o que foi pesquisado. Junto a essas informações, o resultado virá acompanhado de um <strong><i>botão/link</i></strong> que, ao ser clicado, permitirá cadastra-lo a uma base de dados de favoritos. Essa lista de favoritos poderá ser acessada pela aplicação no Front-End por meio de um <strong><i></i>botão/link</strong>.
</p>
<p>Mais ou menos assim</p>
<p><img src="http://www.soumaisconquista.com/gitHub/index2a.jpg" alt="Rascunho de tela do app" /><br />
Entendido o problema "vortemos" ao velho jargão de programador "dividir para conquistar"&nbsp;!                         
API criada , servidores iniciado , criamos um "ouvido" no Back End (metodo get) e uma "boca" no Front-End (formulario), vamos agora fazer eles conversarem.</p>
<h4>Vamos voltar aos nossos testes de Endpoints&nbsp;!!!</h4>
<h5>Primeiro teste.</h5>   
<p><strong>/people/</strong> -- obtenha todos os recursos dos personagens por páginas</p>
<p>
      
          ```
                   const express = require('express');
                   const app = express();
                   app.use(express.json());
                   const cors = require('cors');
                   app.use(cors());
                   const axios = require('axios');

                   app.get('/', async(req,res) => { 
                         const{data} = await axios('https://swapi.dev/api/people/')
                         return res.json(data) 
                     }); 

                   app.listen(3000, () =>{
                        console.log('Servidor rodando');
                    });
         ```
</p>
<p>Veja que um objeto delimitado por <strong>{}</strong> e observe que dentro deste objeto temos um esquema json com duas partes separadas por <strong>:</strong> e na segunda parte temos strings (alguns com URL)
e arrays(com URL).</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndpoint2a.jpg" alt="Teste endpoint 2" /></p>
<h5>Segundo teste.</h5>
<p><strong>/people/1 </strong>-- obter um recurso específico de pessoas</p>
<p>
	
          ```    
                  const express = require('express');
                  const app = express();
                  app.use(express.json());
                  const cors = require('cors');
                  app.use(cors());
                  const axios = require('axios');

                  app.get('/', async(req,res) => { 
                       const{data} = await axios('https://swapi.dev/api/people/1')
                       return res.json(data) 
                   }); 

                 app.listen(3000, () =>{
                      console.log('Servidor rodando');

                  });
          ```
</p>
<p>Neste segundo teste percebemos que o retorno é muito similar ao primeiro só que apenas para um personagem.Teste tambem os retornos do<strong><i>data</i></strong>, quando coloquei
<strong><i>data.films</i></strong> no return , retornou um array com as urls dos filmes em que o personagem participou</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndPoint1a.jpg" alt="Teste endpoint 1" /></p>
<h5>Terceiro teste.</h5>
<p>Neste terceiro teste não conseguimos testar o endpoint <strong><i>/people/schema/</i></strong>.Então voltei para o verificar o retorno
das consultas</p>
<p><strong>/people/</strong> -- buscando retornar o <strong><i>results</i></strong> um array com os dados dos personagens</p>
<p>
     
     ```
                const express = require('express');
                const app = express();
                app.use(express.json());
                const cors = require('cors');
                app.use(cors());
                const axios = require('axios');

                app.get('/', async(req,res) => { 
                     const{data} = await axios('https://swapi.dev/api/people/')
                     return res.json(data.results) 
                }); 

                app.listen(3000, () =>{
                     console.log('Servidor rodando');

                });
     ```
</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEnpoint3a.jpg" alt="Teste endpoint 3" /> </p> 
<p>Neste teste retornou um array de objetos como podemos ver na imagem;</p>
<h4>Teste de retornos dos end points.Que tipos retornam?</h4> 
<p>Apesar de já identificar os tipos nos teste de endpoints precisei utilizar muito o recurso doa javascript <strong><i>typeof</i></strong>, veja um exemplo de sua utilização
, teste e brinque com a possibilidades.</p>

       ```
                const express = require('express');
                const app = express();
                app.use(express.json());
                const cors = require('cors');
                app.use(cors());
                const axios = require('axios');

                app.get('/', async(req,res) => { 
                    const{data} = await axios('https://swapi.dev/api/people/1')
                    console.log(typeof data.films)
                    return res.json(data.films)    
                }); 

               app.listen(3000, () =>{
               console.log('Servidor rodando');
               });
       ```
<p>O resultado aparece no console , quando atualizamos o navegador.</p>       

<h4>Teste de consumo da API externa , atraves de nossa API por nosso Front-end;</h4>  

<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

        ```
                      const express = require('express');
                      const app = express();
                      app.use(express.json());
                      const cors = require('cors');
                      app.use(cors());
                      const axios = require('axios');

                      app.get('/', async(req,res) => {        
                            let response = await axios('https://swapi.dev/api/people/1')   
                            try{         
                                 res.send(response.data);                            
                          } catch{
                        }   
                     });    

                     app.listen(3000, () =>{
                     console.log('Servidor rodando');
                   });              
                     
       ```
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>    

       ```
                   function App(){  
                      function buscaApi(){
                           axios
                          .get('http://localhost:3000/')
                          .then((response) => console.log(response.data))
                          .catch((error) => console.log(error))
                          .finally(console.log('dentro do finally'));
                      }

                    return (
                        <div className="App">
                           <header className="App-header">
                              <div>            
                                 <h2>Busque dados na API </h2>
                                 <form>
                                   <input 
                                      id='inputID'                                              
                                      required
                                 />
                                   <button                
                                      type='submit'
                                      onClick={(e) => buscaApi(e)}
                                      >Pesquisar
			          </button>
                              </form>
                          </div>        
                      </header>
                    </div>
                   );
                };
              export default App;
		    
      ```

<h4>Criar estilo para o formulario e pagina;</h4>
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>    

           ```
                       import './App.css';
                       function App() {     
                             const handlePesquisar = async (e) =>{     
                             e.preventDefault();        
                           };

                        return (       
                               <div className="App">
                                  <header className="App-header">
                                     <div className='conteiner-form'>
                                        <div className='adic_favoritos'>
					       <a href='*' >Lista de Favoritos</a>
                                        </div>
                                        <h2>Busque seu personagem </h2>
                                        <form className ='formulario'>
                                                <input 
                                                   id='inputID'
                                                   type='text'
                                                   name='personagem'
                                                   placeholder='personagem'
                                                   required
                                                  />
                                                 <button 
                                                    className='btn-login'
                                                    type='submit'
                                                    onClick={(e) => handlePesquisar(e)}
                                                   >Pesquisar
						  </button>
                                          </form>
                                         </div>      
                                       </header>
                                    </div>
                                  );
                               }
                        export default App;
	   
           ```
<p>Neste teste incluimos uma folha de estilo , não colocamos o css no projeto porque não é o nosso foco o aprendizado em CSS  , mais coloquei na pasta testes => introducao => formularioTeste, caso queira utiliza-lo.</p>
<h3>Testes de desenvolvimento</h3>
<h4>Teste de pesquisa pelo nome do personagem;</h4>
<p>Neste teste diferentemente de quando testamos o clique no botão, precisamos enviar um nome de nossa aplicação no Front-End para nossa API no Back-End, para que, partindo dessa informação nossa aplicação possa buscar na API da Star-Wars o personagem, tratar o dado e, responder a solicitação.A primeira tarefa que vem a mente é enviar o nome e nossa aplicação receber esta pesquisa e responder de algum forma. Veja neste momento não estou pensando na Api-Star-Wars, só estou 
querendo enviar um nome e receber a resposta;</p>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

           ```
                           const express = require('express');
                           const app = express();
                           app.use(express.json());
                           const cors = require('cors');
                           app.use(cors());
                           const axios = require('axios');

                           app.post('/', (req,res)=>{ 
                                      const { personagem} = req.body;
                                      res.send(`O personagem pesquisado é:${personagem}`);     
                                });
                           app.listen(3000, () =>{
                                      console.log('Servidor rodando');
                                });
       
          ```
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

          ```
                    import './App.css';
                    import {useState} from 'react';
                    import axios from 'axios';

                    function App(){ 
                            const [personagem, setPersonagem] = useState('');
                            const handlePesquisar = async (e) =>{      
                            e.preventDefault();
                            const response = await
			       axios.post('http://localhost:3000/',JSON.stringify({personagem}),
                                   {
                                       headers:{ 'Content-Type' : 'application/json'}
                                   }
                                );
                                       console.log(response);
                               };
                            return (       
                                 <div className="App">
                                   <header className="App-header">
                                      <div className='conteiner-form'>          
                                         <div className='adic_favoritos'>
					     <a href='*' >Lista de Favoritos</a>
                                         </div>
					 <h2>Busque seu personagem </h2>
                                         <form className ='formulario'>
                                             <input 
                                               id='inputID'
                                               type='text'
                                               name='personagem'
                                               placeholder='Nome do personagem'
                                               required onChange={(e) => 
					       setPersonagem(e.target.value) }
                                         />
                                         <button 
                                              className='btn-login'
                                              type='submit'
                                              onClick={(e) => handlePesquisar(e)}>Pesquisar
                                         </button>
                                       </form> 
                                     </div>
                                 </header>       
                              </div>
                          );
                        }
                        export default App;
         
         ```
<p>
Veja que neste teste já introduzir o <strong>Hook useState</strong> sem testa-lo neste momento, somente para ver se aparece algum erro no codigo. Neste artigo da Alura podemos entender sobre hooks e sua utilidade no react: <a href="https://www.alura.com.br/artigos/react-hooks?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068847699&hsa_ad=703853156311&hsa_src=g&hsa_tgt=aud-527303763294:dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMI_L6HhrmmiQMV8WFIAB3lKCtjEAAYASAAEgJ1yvD_BwE">Sobre Hooks</a><br/>
Neste projeto vamos utilizar muito o <strong>useState</strong>.
</p>
<h4>Teste de função para consulta pelo nome da API  Star Wars na tela do usuario; </h4>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

         ```
	               const express = require('express');
                       const app = express();
                       const axios = require('axios');
                       app.use(express.json());
                       const cors = require('cors');
                       app.use(cors());
	
                       let personagem = '';
                       let pg =0;
                      
		       app.post('/', (req,res,next)=>{      
                            personagem = req.body;     
                            let person = personagem;      
                            if(personagem != ''){
                                pg++;
                                buscaPersonagem(person);
                                res.send('retorno'); 
                           }else{
                                res.send('campo vazio'); 
                         }    
                     });

                    function buscaPersonagem(person){  
                        app.get(`/${pg}`, async(req,res) => {       
                          let response = await 
			    axios(`https://swapi.dev/api/people/?search=${person.personagem}`)     
                        try{ 
                          let users = response.data.results[0];         
                          res.send(users);          
                         }catch{
                       }   
                     });  
                   }          
                    app.listen(3000, () =>{
                    console.log('porta 3000');
 
                });
         ```
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

         ```
	                  import './App.css';
                          import {useState} from 'react';
                          import axios from 'axios';
 
                          let pg =0; 
                          function App(){     
                                   let [personagem, setPersonagem] = useState('');
                                   const [nome, setNome] = useState('');
                                   const [filmes, setFilmes] = useState('');
                                   const handlePesquisar = async (e) =>{  
                                        e.preventDefault();    
                                        const response = await 
					       axios.post('http://localhost:3000/',JSON.stringify({personagem}),
                                          {
                                              headers:{ 'Content-Type' : 'application/json'}
                                          }
                                   );
 
                         if(response.data=='retorno'){          
                                       pg++;
                                       buscaApi();
                                  }
                              }; 
                         function buscaApi(){ 
                                  axios 
                                 .get(`http://localhost:3000/${pg}`)
                                 .then((response) =>{
                                  let users =response.data; 
                                  console.log(users); 
                                  setNome(users.name);  
                                  setFilmes(users.films);   
                            })
                                 .catch((error) => console.log(error))
                                 .finally('');  
                           }

                         return (
                           <div className="App">
                              <header className="App-header">
                                  <div className='conteiner-form'>
                                  <div className='adic_favoritos'>
				    <button  type='submit' >
	                                   Lista de Favoritos
                                    </button>
                                  </div>
                                  <h2>Busque seu personagem </h2>
                                  <form className ='formulario'>
                                        <input 
                                            id='inputID'
                                            type='text'
                                            name='personagem'
                                            placeholder='personagem'
                                            required
                                            onChange={(e) => setPersonagem(e.target.value)}
					  />
                                        <button 
                                            className='btn-login'
                                            type='submit'
                                            onClick={(e) => handlePesquisar(e)}
                                           >Pesquisar
					</button>
                                   </form>
                                  <div className='personagem'>  
                                      <p>Personagem <hr /></p>                   
                                          <table>
                                            <tr>
                                              <td >Nome:</td>
                                              <td>{nome}</td>                             
                                            </tr>
                                            <tr>
                                              <td>Filmes:</td>
                                              <td colspan="2">{filmes[0]}</td>                         
                                            </tr>
                                            <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[1]}</td>                         
                                           </tr>
                                           <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[2]}</td>                         
                                          </tr>
                                          <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[3]}</td>                         
                                          </tr>
                                          <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[4]}</td>                         
                                          </tr>
                                          <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[5]}</td>                         
                                          </tr>
                                          <tr>
                                              <td></td>
                                              <td colspan="2">{filmes[6]}</td>                         
                                          </tr>
                                      </table>                     
                                   </div>
                                 </div>      
                               </header>
                             </div>
                           );
                          }
                           export default App;
	 
         ```
<h4>Teste de função para cadastramento de personagem na lista de favoritos;</h4>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

        ```
	               const express = require('express');
                       const app = express();
                       const axios = require('axios');
                       app.use(express.json());
                       const cors = require('cors');
                       app.use(cors());
	
                       let personagem = '';
                       let pg =0;
                       let nomes = [];
                       let paginas = [];

                       app.post('/', (req,res,next)=>{      
                             personagem = req.body;     
                             let person = personagem;   
     
                             if(personagem != ''){
                                    pg++;
                                    buscaPersonagem(person);
                                    res.send('retorno'); 
                            }else{
                                    res.send('campo vazio'); 
                            }     
                        });

                       function buscaPersonagem(person){   
                             app.get(`/${pg}`, async(req,res) => {       
                             let response = await axios(`https://swapi.dev/api/people/?search=${person.personagem}`)   
                             try{ 
                                  let users = response.data.results[0];         
                                  res.send(users);         
                           } catch{
                          }   
                       });  
                      }     

                     app.post('/cadastrar', (req,res)=>{      
                          nome = req.body; 
                          nomes.push(nome.nome) 
                          paginas.push(pg);    
                          res.send(`${pg} => Personagem cadastrado com sucesso na lista`)
                    })       
                    app.listen(3000, () =>{
                         console.log('porta 3000'); 
                    }); 
        ```
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

       ```
                  import './App.css';
                  import {useState} from 'react';
                  import axios from 'axios'; 
                  
		  let pg =0;
 
                  function App(){    
                      let [personagem, setPersonagem] = useState('');
                      const [nome, setNome] = useState('');
                      const [filmes, setFilmes] = useState('');
                      const [cadastrado, setCadastrado] = useState('');

                  const handlePesquisar = async (e) =>{  
                     e.preventDefault();    
                     const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem}),
                        {
                         headers:{ 'Content-Type' : 'application/json'}
                        }
                     );
 
                  if(response.data=='retorno'){          
                      pg++;
                      buscaApi();
                    }
                  };  
 
                 function buscaApi(){  
                   axios 
                  .get(`http://localhost:3000/${pg}`)
                  .then((response) =>{
                   let users =response.data;                    
                   setNome(users.name);  
                   setFilmes(users.films);  
                })
                  .catch((error) => console.log(error))
                  .finally('');  
                }

                 const cadastraPersonagem = async()=>{
                 const response = await axios.post('http://localhost:3000/cadastrar',JSON.stringify({nome,pg}),
                    {
                     headers:{ 'Content-Type' : 'application/json'}
                    }
                  );
                 console.log(response.data);
                 setCadastrado(response.data);
                }

                  return (
                     <div className="App">
                         <header className="App-header">
                           <div className='conteiner-form'>
                           <div className='adic_favoritos'><button  type='submit' >Lista de Favoritos</button></div>
                           <h2>Busque seu personagem </h2>
                           <form className ='formulario'>
                               <input 
                                 id='inputID'
                                 type='text'
                                  name='personagem'
                                  placeholder='personagem'
                                  required
                                  onChange={(e) => setPersonagem(e.target.value)} />
                               <button 
                                 className='btn-login'
                                 type='submit'
                                 onClick={(e) => handlePesquisar(e)}
                                >Pesquisar
			       </button>
                           </form>
                           <div className='personagem'>  
                           <p>Personagem <hr /></p>                   
                           <table>
                               <tr>
                                 <td >Nome:</td>
                                 <td>{nome}</td> 
                                 <td><button type='submit' onClick={() => cadastraPersonagem(nome, pg)}>Cadastrar</button> </td>                            
                              </tr>
                              <tr>
                                <td>Filmes:</td>
                                <td colspan="2">{filmes[0]}</td>                         
                              </tr>
                              <tr>
                                <td></td>
                                <td colspan="2">{filmes[1]}</td>                         
                              </tr>
                              <tr>
                                <td></td>
                                <td colspan="2">{filmes[2]}</td>                         
                               </tr>
                                <tr>
                                  <td></td>
                                   <td colspan="2">{filmes[3]}</td>                         
                                </tr>
                                <tr>
                                   <td></td>
                                   <td colspan="2">{filmes[4]}</td>                         
                                </tr>
                                 <tr>
                                   <td></td>
                                   <td colspan="2">{filmes[5]}</td>                         
                                 </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="2">{filmes[6]}</td>                         
                                  </tr>
                                </table>
                                <br />
                                <p>Cadastro de favoritos <hr /></p>
                                <p>{cadastrado}</p>                 
                            </div>
                         </div>      
                    </header>
                  </div>
                );
              }

                    export default App;
       ```
<h4>Teste de função para mostrar lista de personagem;</h4>
<p>Para otimizar um pouco o tamanho projeto! Vamos criar um DESAFIO, se já chegou até aqui, provalmente vai ser bom testar os seus conhecimentos.<br />
O desafio consiste em incluir os codigos abaixo no codigo acima. O objetivo é que quando o botão <strong><i>Lista de Favoritos</i></strong> for clicado
a lista seja mostrada abaixo do cadastro de favoritos.</p>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>
     
      ```       let listaPersonagem = [nomes,paginas];
                **************************************
	        app.get('/lista', async(req,res) => {          
                    res.send(listaPersonagem); 
                });    
    
      ```
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

      ```         
               const [lista, setLista] = useState('');
               let list = [];   
              *****************************************
	       function listaDeFavoritos(){  
                   axios 
                  .get('http://localhost:3000/lista')
                  .then((response) =>{
                   list =response.data;   
                   setLista(list[0]);    
               })
                 .catch((error) => console.log(error))
                 .finally('');   
               }
               
      ```
<h4>Resultado dos testes de desenvolvimento;</h4>
<p>Para fazer este teste siga os procedimentos abaixo</p>
<p>
1 - Reinicie o servidor na porta 3000 <br />
2 - Reinicie o react na porta 3001 <br />
3 - Abra a API da Star-Wars para consulta de personagens <br />
4 - Consulte o nome na API externa e cole no campo pesquisa <br />
5 - Clique no bt PESQUISAR <br />
6 - Clique no bt Cadastrar <br />
7 - Clique no bt Lista de Favoritos <br />	
</p>
<p>Veja na imagem abaixo como deve ser a nossa aplicação em funcionamento.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/img15a.jpg" alt="Aplicação em funcionamento" /></p>
<h3>Testes de implementação</h3>
<h4>Apresentar o aplicativo como mostrado no prototipo; </h4>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

         ```
	                    const express = require('express');
                            const app = express();
                            const axios = require('axios');
                            app.use(express.json());
                            const cors = require('cors');
                            app.use(cors());
    
                            let personagem = '';
                            let cout =0;
                            let pg =0;
                            let nomes = [];
                            let paginas = [];
                            let listaPersonagem = [nomes,paginas];

                            app.post('/', (req,res,next)=>{  
                                            personagem = req.body;     
                                            let person = personagem;
         
                                            if(personagem != ''){
                                                         pg++;
                                                         buscaPersonagem(person);
                                                         res.send('retorno'); 
                                           }else{
                                                         res.send('campo vazio'); 
                                                }
                                        });

                            function buscaPersonagem(person){     
                                           app.get(`/${pg}`, async(req,res) => {      
                                                        let response = await axios(`https://swapi.dev/api/people/?search=${person.personagem}`)     
                                                  try{ 
                                                        let users = response.data.results[0];          
                                                        res.send(users);        
                                             } catch{
                                                }     
                                     });      
                            }    

                           app.post('/personagem', (req,res)=>{               
                                          nome = req.body; 
                                          let link =`${nome.nome}`;
                                          nomes.push(link); 
                                          paginas.push(pg);      
                                          res.send('Personagem cadastrado com sucesso') 
                                     })  
     
                          app.get('/lista', async(req,res) => {          
                                          res.send(listaPersonagem);   
                                     }); 
 
                          function listaFavoritos(){        
                                        app.get('/1', async(req,res) => {                 
                                             res.send('lista de favoritos a caminho');   
                                        });    
                                        app.get('/2', async(req,res) => {                 
                                            res.send('lista de favoritos a caminho');     
                                        });                     
                                       app.get('/3', async(req,res) => {                 
                                            res.send('lista de favoritos a caminho');     
                                        });       
                                       app.get('/4', async(req,res) => {                 
                                            res.send('lista de favoritos a caminho');     
                                        });       
                                       app.get('/5', async(req,res) => {                 
                                            res.send('lista de favoritos a caminho');     
                                        });       
                                       app.get('/6', async(req,res) => {                 
                                           res.send('lista de favoritos a caminho');     
                                        });      
                                       app.get('/7', async(req,res) => {                 
                                          res.send('lista de favoritos a caminho');     
                                        });       
                                       app.get('/8', async(req,res) => {                 
                                          res.send('lista de favoritos a caminho');     
                                        });       
                                       app.get('/9', async(req,res) => {                 
                                          res.send('lista de favoritos a caminho');     
                                       });        
                                       app.get('/10', async(req,res) => {                 
                                         res.send('lista de favoritos a caminho');     
                                      });
                          };
          
                        app.get('/favoritos', async(req,res) => {  
                                        listaFavoritos();             
                         }); 
       
                       app.listen(3000, () =>{
                                       console.log('porta 3000'); 
                         });
         ```
	 
<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

         ```
	                       import './App.css';
                               import {useState} from 'react';
                               import axios from 'axios';
                               import coracao from './img/coracao.png'
                               import Informacao from  './componentes/Informacao' 

                               let pg =0;

                               function App(){ 
                                                 let entra = 2;
                                                 const [nome, setNome] = useState('');
                                                 const [filmes, setFilmes] = useState('');
                                                 const [listaNome, setlistaNome] = useState('');
                                                 const [listaFilmes, setlistaFilmes] = useState('');
                                                 const [cadastrado, setCadastrado] = useState('');  
  
                                                 let [estiloCadastro,setEstiloCadastro] = useState('none');
                                                 let [estiloPersonagem,setEstiloPersonagem] = useState('none');
                                                 let [estiloListaPersonagem,setEstiloListaPersonagem] = useState('none');
                                                 let [estiloFavoritos,setEstiloFavoritos] = useState('none');
                                                 let [estiloInformacao,setEstiloInformacao] = useState('block');
                                                 let visivelCadastro ={display:`${estiloCadastro}`};
                                                 let visivelPersonagem ={display:`${estiloPersonagem}`};
                                                 let visivelListaPersonagem ={display:`${estiloListaPersonagem}`};
                                                 let visivelFavoritos ={display:`${estiloFavoritos}`};
                                                 let visivelInformacao ={display:`${estiloInformacao}`};
    
                                                 let [personagem, setPersonagem] = useState('');    

                            const handlePesquisar = async (e) =>{  
                                                                e.preventDefault();     
                                                                const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem}) ,
                                                                     {
                                                                        headers:{ 'Content-Type' : 'application/json'}
                                                                     }
                                                             );
                                                                 if(response.data=='retorno'){         
                                                                                     pg++;
                                                                                     buscaApi();
                                                                                }        
                                                                            };   
 
                            function buscaApi(){     
                                              axios 
                                                   .get(`http://localhost:3000/${pg}`)
                                                   .then((response) =>{
                                                    let users =response.data; 
                                                    setNome(users.name);  
                                                    setFilmes(users.films);
                                                    setEstiloPersonagem('block');
                                                    setEstiloInformacao('none');
                                                    setEstiloListaPersonagem('none');  
                                             })
                                                   .catch((error) => console.log(error))
                                                   .finally('');  
                                             }

                             const cadastraPersonagem = async()=>{
                                                    const response = await axios.post('http://localhost:3000/personagem',JSON.stringify({nome,pg}),
                                                         {
                                                           headers:{ 'Content-Type' : 'application/json'}
                                                       });  
                                                    setCadastrado(response.data);
                                                    setEstiloPersonagem('none');
                                                    setEstiloCadastro('block');
                                                    setEstiloListaPersonagem('none');
                                                }
                            function buscarLista(e){  
                            let pag = e;
                            axios 
                                 .get(`http://localhost:3000/${pag}`)
                                 .then((resp) =>{
                                  let person =resp.data;
                                  setlistaNome(person.name);  
                                  setlistaFilmes(person.films);
                                  setEstiloFavoritos('none');
                                  setEstiloPersonagem('none');
                                  setEstiloCadastro('none');
                                  setEstiloInformacao('none');
                                  setEstiloListaPersonagem('block');     
                            })
                         }

                          function Favoritos(e){  
                                                 entra = e;
                                                 let [lista, setLista] = useState(''); 
                                                 let list = [];   
                                                 axios 
                                                     .get('http://localhost:3000/lista')
                                                     .then((response) =>{
                                                      list =response.data;  
                                                      setLista(list[0]);   
                                                if(entra === 1){
                                                       setEstiloFavoritos('block');
                                                       setEstiloPersonagem('none');
                                                       setEstiloCadastro('none');
                                                       setEstiloInformacao('none');
                                                       setEstiloListaPersonagem('none');
                                                    }  
                                                })
                                               .catch((error) => console.log(error))
                                               .finally('');
  
                          return(
                                  <>               
                                  <p>
                                     <a href='#' onClick={() => buscarLista (1)}>{lista[0]}</a><br />
                                     <a href='#' onClick={() => buscarLista (2)}>{lista[1]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (3)}>{lista[2]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (4)}>{lista[3]}</a><br /> 
                                     <a href='#' onClick={() => buscarLista (5)}>{lista[4]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (6)}>{lista[5]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (7)}>{lista[6]}</a><br /> 
                                     <a href='#' onClick={() => buscarLista (8)}>{lista[7]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (9)}>{lista[8]}</a><br />  
                                     <a href='#' onClick={() => buscarLista (10)}>{lista[9]}</a><br />      
                                  </p>    
                                  </>  
                                ) 
                             }

                           return (     
                                   <div id='pesq' className="App">
                                       <header className="App-header">
                                           <div className='conteiner-form'>
                                                <div className='adic_favoritos'><a onClick={() => Favoritos(1)} href='#'>Lista de favoritos</a></div> 
                                                <h2>Busque seu personagem </h2>
                                                <form className ='formulario'>
                                                <input 
                          id='inputID'
                          type='text'
                          name='personagem'
                          placeholder='personagem'
                          required
                          onChange={(e) => setPersonagem(e.target.value)} 
                       />
                     <button 
                          className='btn-login'
                          type='submit'
                          onClick={(e) => handlePesquisar(e)}
                         >Pesquisar
                      </button>
                     </form>                
                   <div style={visivelPersonagem} className='personagem'>  
                              Personagem <hr />                   
                              <table>
                                    <tr>
                                        <td >Nome:</td>
                                        <td>{nome}</td>
                                        <td><a href='#' type='submit' onClick={() => cadastraPersonagem (nome, pg)}><img alt='imagem de coração' src={coracao} /></a></td>
                                    </tr>
                                    <tr>
                                        <td>Filmes:</td>
                                        <td colspan="2">{filmes[0]}</td>                         
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colspan="2">{filmes[0]}</td>                         
                                    </tr>
                                </table>               
                      </div>
                                <div style={visivelListaPersonagem} className='listaPersonagem'>  
                                 Personagem <hr />                   
                                 <table>
                                       <tr>
                                            <td >Nome:</td>
                                            <td>{listaNome}</td>                              
                                        </tr>
                                        <tr>
                                            <td>Filmes:</td>
                                            <td colspan="2">{listaFilmes[0]}</td>                         
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td colspan="2">{listaFilmes[0]}</td>                         
                                        </tr>
                                   </table>               
                         </div>
                         <div style={visivelCadastro} className='cadastraFavoritos'>
                                    Cadastro de favoritos <hr />
                                    < cadastraPersonagem  />
                                    <p>{cadastrado}</p> 
                          </div>
                         <div style={visivelInformacao} className='informacao'>                 
                                    <Informacao />                 
                          </div>
                          <div style={visivelFavoritos} className='listaFavoritos'>                  
                                     Lista de favoritos<hr />  
                                    <Favoritos />                 
                           </div>
                          </div>
                       </header>
                     </div>   
                   )
                 }

                 export default App;
         ```

<p>Na página<strong><i>&nbsp;&nbsp;Informacao.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

        ```
	                function Informacao(){

                        return(  
                               <>
                               <p>Informação<hr /> </p>
                               <p> Olá, pesquise o seu personagem da Star Wars e,
                                   o inclua na sua lista de personagens favoritos </p> 
                               </>  
                          )
                      }
                        export default Informacao;
        ```
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/img17a.jpg" alt="Tela de resultado" /></p>   
<h4>Implementar lógica de erro de: Digitação, Ausencia de personagem, Nome inválido; </h4>
<p>Para otimizar um pouco o tamanho projeto! Vamos criar outro DESAFIO, se já chegou até aqui, provalmente vai ser bom testar os seus conhecimentos.<br />
O desafio consiste em incluir os codigos abaixo, no codigo acima. O objetivo é que quando for passado um nome que não existe na base da API da Star - Wars 
a nossa aplicação não venha a crashar .</p>
<p>Na página<strong><i>&nbsp;&nbsp;serve.js&nbsp;&nbsp;</i></strong>:</p>
<p>Na funçãoa<strong><i>&nbsp;&nbsp; buscaPersonagem(person)&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>

        ```
                   if(users != undefined) {        
                            res.send(users); 
                  }else{   
                            res.send('Personagem não localizado');                            
                 }        
       ```

<p>No front-end no arquivo<strong><i>&nbsp;&nbsp;App.js&nbsp;&nbsp;</i></strong> digite&nbsp;:</p>
<p>Crie tres variáveis</p>

      ```
                 const [semPersonagem, setSemPersonagem] = useState(''); 
                 let [estiloSemPersonagem,setEstiloSemPersonagem] = useState('none');
                 let visivelSemPersonagem ={display:`${estiloSemPersonagem}`};
      ```

<p>Neste ponto disponibilizo a função completa</p>

      ```
                 function buscaApi(){      
                                axios 
                               .get(`http://localhost:3000/${pg}`)
                               .then((response) =>{
                                         let users =response.data; 
                                         if(users != "Personagem não localizado"){ 
                                         setNome(users.name);  
                                         setFilmes(users.films);
                                         setEstiloPersonagem('block');
                                         setEstiloInformacao('none');
                                         setEstiloListaPersonagem('none');
                                         setEstiloSemPersonagem('none');
                              }else{   
                                         setEstiloInformacao('none');
                                         setEstiloListaPersonagem('none');  
                                         setEstiloCadastro('none');
                                         setEstiloPersonagem('none');
                                         setEstiloSemPersonagem('block'); 
                                         setSemPersonagem(users);             
                                    }
                                })
                           .catch((error) => console.log(error))
                           .finally('');  
                        }
      ```

<p>Abaixo do formulário de  pesquisa digite:</p>

     ```
                   <div style={visivelSemPersonagem} className='semPersona'>                  
                           Resposta<hr />  
                          {semPersonagem }                 
                   </div>
     ```
<h4>Implementar lógica de apresentação do nome dos filmes em vez de URL;</h4>
<h3>Conclusão</h3>  
<h4>Introduzir os conceitos simples de componentes para o projeto; </h4>
<h4>Desenvolver uma API rest para atualização da lista de personagens cadastrado; </h4>
 <h2>Reflexão</h2> 
 <p>
   Desenvolvendo com Paixão<br/>
Desenvolver é um ciclo constante de teste => implementação => teste => implementação. Isso requer estudo, paciência e, claro, muito café! ☕️ <br/>
Para aqueles que amam programar, o mundo se abre em um leque infinito de possibilidades. Temos a incrível oportunidade de transformar ideias 
em realidade, seja criando uma API, um jogo, um aplicativo ou um site, entre outras coisas.<br/>
Pessoalmente, gosto de desenvolver e aprender, e sempre fico maravilhado com as novas possibilidades que surgem. <br/>
Para os meus amigos devs.<br />
Aqui, vou compartilhar alguns dos projetos e ideias malucas que desenvolvi durante alguns anos e, espero em Deus que eles possam contribuir de alguma forma com a comunidade de desenvolvedores de nosso querido Brasil.Gostaria 
de ver um dia nosso Brasil como uma potencia de desenvolvimento.<br/>
<h2>Um forte abraço e até a próxima!</h2>  
      
 </p>
 <p id ="Resposta">
   RESPOSTAS:<br />
   Você  => Usuário;<br />
   Quitandeiro => Front-End;<br />
   Atravessador => API;<br />
   Mercado => Back-End; <br />
   Fornecedor => nossa API<br />
   Base => Interface<br />
 </p>
Warning: atualizado em:
<ul>
  <li>13/11/2024 publicando o prototipo 2.0;Corrigindo o README</li>	
  <li>12/11/2024 trabalhando no prototipo 2.0.Corrigindo o README</li>	
  <li>02/11/2024 incluindo versão final dos badges;criando um icone para o projeto;trabalhando no código; corrigindo código do readme.</li>	
  <li>01/11/2024 implementado lógica de busca de personagem não encontrado,trabalhando no código, corrigindo código do readme e acrescentado os testes.</li>	
  <li>31/10/2024 trabalhando no código, corrigindo código do readme e acrescentado os testes.</li>	
  <li>29/10/2024 trabalhando no código, corrigindo código do readme e acrescentado os testes</li>
  <li>24/10/2024 trabalhando no código, corrigindo código do readme e acrescentado os testes</li>	
  <li>23/10/2024 trabalhando no código, corrigindo código do readme</li>
  <li>21/10/2024 trabalhando no código, melhorando o readme</li>
  <li>15/10/2024 trabalhando no código, criando definição de API, corrigindo o readme</li>
  <li>14/10/2024 trabalhando no código, corrigindo o README</li>
  <li>13/10/2024 trabalhando no código, corrigindo o README</li>
  <li>11/10/2024 trabalhando no código, corrigindo o README</li>
  <li>09/10/2024 Organizando o README, corrigindo titulo, melhorando os textos,trabalhando no codigo</li>
  <li>01/10/2024 Organizando o README, corrigindo a apresentaçãos dos codigos, melhorando as imagens, melhorando os textos, lapidando o prototipo, a primeira após a publicação</li>
  <li>30/09/2024 Implementação das funcionalidade do projeto;Atualizado os arquivos das pastas backEnd e frontEnd; Corrigindo a apresentação dos blocos de codigos</li>
  <li>24/09/2024 Melhorando o texto, Observação; O gif do prototipo não aperece de imediato, temos que dar varios refresh na pagina para ele aparecer;</li>
  <li>22/09/2024 * Melhorias no texto; prototipo implementado;incluido pasta de testes;incluido checklist de acompanhamento; criação de Badge para o nodeJS</li>
  <li>19/09/2024 * Melhorias no texto; Providenciando um prototipo utilizando um gif animado</li>
  <li>18/09/2024 * melhorei a descrição; criação de Badges para as tecnologias react e express; correção gramatical, melhorias e correções no texto;</li>
</ul>

<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/pesquisaPorNomea.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>      

<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracao4a.jpg" alt="Implementando as funcionalidades" /></p>
