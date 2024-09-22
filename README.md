#"Desenvolvimento de uma Aplicação Full Stack com Node.js e React: Utilizando uma API para Integração entre Front-end e Back-end"

<h2>Primeiras impressões de um dev para um trabalho, com os seguintes temas: API,&nbsp; Git,&nbsp; GitHUB,&nbsp;NnodeJS,&nbsp;React,&nbsp;Express,&nbsp;Nodemon,&nbsp;Cors.&nbsp;Quer aprender?&nbsp;Me acompanhe nesta jornada!</h2>
Warning: atualizado em 22/09/2024 * Melhorias no texto; prototipo implementado;incluido pasta de testes;
Obs: outras atualizações estão no final da pagina.
<h3>Descrição</h3>
<p>Bem-vindos ao meu projeto!
  Aqui você encontrará um ambiente de informação e animação para o desenvolvimento de uma API, 
  partindo da premissa de um dev (com certa experiência) e..., que esta começando a trabalhar com essas ferramentas agora. Oportunidade unica!!! Acompanhe toda metodologia que utilizo quando fico frente a frente com uma proposta nova de trabalho.<br />
  Vamos desenvolver uma API muito legal utilizando o Node.js para back-end e o React no front-end. Nossa (API) devera comunicar com uma API externa - (utilizaremos a da star - wars) para conseguir dar as resposta as solicitações dos usuarios que tenham acesso ao nosso sistema. Esta aplicação devera seguir as diretrizes REST,  garantindo que a comunicação entre o servidor e o cliente seja super suave e padronizada. E um adendo! Apesar de desenvolver aplicações web a muitos anos eu, nunca trabalhei com estas ferramentas.Ou seja, é uma otima portunidade para quem esta começando acompanhar. Trata-se de um inicio de viagem onde a proxima estação é o desenvolvimentoo de uma aplicação completa, vamos trabalhar na frente e nos bastidores de um sistema. Resolveremos um problema e  no final vamos sair bem melhor do que entramos, aprenderemos novos conhecimentos, super uteis no mercado de trabalho atualmente.Animados?&nbsp;Espero que sim! voce vai vivenciar uma experiencia unica e empolgante em loco, a inquietude na vida de um desenvolvedor Full Stack,pois não estamos presos (digo restritamente, pois temos que entender,os principios que regem cada tema, não dá para criar um site e colocar o texto amarelo por cima de um vermelho citilante ) a nenhuma linguagem, nem a conceitos de designer, somos livres para desenvolvermos o que der na telha, antes deste projeto a exemplo, eu já estava criando um game com c# e unity, logo coloco aqui tambem no git Hub. Neste momento vou focar neste projeto. Venha comigo nesta jornada e vamos juntos descobrir as possibilidades e oportunidades que estas novas ferramentas (digo novas para mim) podem oferecer.Vai ser divertido!!&nbsp;&nbsp;let's go!  
</p>
<h2>Prototipo</h2>
<p>Fala devs não ficou muito bem sincronizado mais já podemos ter uma ideia de como vai ficar o nosso sistema, até o final do projeto ele fica perfeito.</p>
<p>
  <img src="http://www.soumaisconquista.com/gitHub/gifAnimado/prototipo8.gif" alt="Prototipo do sistema em gif animado" />
</p>
<p>Para organizamos nosso projeto até a sua conclusão vamos seguir um checklist:</p>
<p>
  []&nbsp;iniciar o projeto; <br />
  []&nbsp;Instalar as bibliotecas; <br />
  []&nbsp;Criar uma rota para acessar nossa API; <br />
  []&nbsp;Servir a API; <br />
  []&nbsp;Habilitar o Cors; <br />
  []&nbsp;Habilitar o Nodemon para reiniciar nosso servidor; <br />
  []&nbsp;Habilitar o Express; <br />
  []&nbsp;Criar o formulario; <br />
  []&nbsp;Criar estilo para o formulario e pagina; <br />
  []&nbsp;Testar clique no botão; <br />
  []&nbsp;Criar uma base de dados no back end para ser cosumida no front-end; <br />
  []&nbsp;Utilizar o fetch para consumir nossa API no backend; <br />
  []&nbsp;Usar try e o catch; <br />
  []&nbsp;Usar o Axio; <br />
  []&nbsp;Acessar a API da Star Wars; <br />
  []&nbsp;Testar endpoints fornecidos na documentação; <br />
  []&nbsp;Analisar retornos dos end points, que tipos retornam; <br />
  []&nbsp;Testar pesquisa pelo nome do personagem enviado pelo formulario; <br />
  []&nbsp;Teste de consumo da API externa , atraves de nossa API; <br />
  []&nbsp;Mostrar resultado na tela do usuario; <br />
  []&nbsp;Criar base de dados para cadastramento de personagem favorito; <br />
  []&nbsp;Criar função base para mostrar lista de personagem; <br />
  []&nbsp;Apresentar dados do personagem após ser clicado na lista; <br />
  
</p>
<h3>API starWar - Vamos conhece-la um pouco já de inicio!</h3>
<p>
  A API de Star Wars, ou "swapi" (Swah-pee) é a primeira fonte de dados quantificada e acessível programaticamente do mundo para todos os dados do universo canônico de Star Wars!(Retirado do site)
</p>
<p>A API oferece o seguinte endpoints na sua documentação, entretanto com os teste realizados optamos utilizar outros, como veremos adiante.
<br/>https://swapi.dev/api/
 <ul>
   <li>/people/ -- obtenha todos os recursos de um personagem</li>
   <li>/people/:id/ -- obter um recurso específico de um personagem</li>
   <li>/people/schema/ -- exibir o esquema JSON para lista de personagens</li>
 </ul> 
<h2>Partindo dessas primeiras informações!!&nbsp;&nbsp;<strong>Qual seria de fato o nosso desafio?</strong></h2>
Este projeto têm como objetivo criar uma API REST que permitirá aos fãns da série Star Wars, buscar seus personagens favoritos, através de um Front-end interativo, que deve facilitar essa busca.
Ao receber os dados de uma pesquisa, nossa aplicação Front-end deve comunicar com a API desenvolvida por nós no Back-end, que, por sua vez, fará uma solicitação à
API oficial da Star Wars para obter as informações sobre os personagens.Observem, vamos utilizar a Api da Star - Wars como nosso banco de dados. Vamos receber os dados da API externa trabalha-los e responder 
ao nosso front -end.

As funcionalidades principais de no aplicação incluem:
<ul>
<li><strong>Busca de Personagens:</strong> O cliente poderá buscar pelo nome um personagem.Nossa API deve receber essa solicitação e buscar a resposta na API da star - Wars .</li>

<li><strong>Lista de Favoritos:</strong> Após a nossa API apresentar os resultados ao usuario, será disponibilizado um botão/link que permitirá adicionar o personagem à uma lista de favoritos.Observe precisamos guardar a informação
de forma persistente em algum lugar</li>

<li><strong>Visualização de Favoritos:</strong> Sera fornecido ao usuario um segundo botão/link que o possibilitará  visualizar sua lista completa de personagens favoritos, proporcionando assim uma experiência rica e personalizada.</li>
</ul>
Neste projeto vamos integrar as tecnologias Node.js e React, criando uma aplicação completa entre Front-end e back-end possibilitando criar uma experiência rica, fluida e dinâmica para os usuários de nossa aplicação.
</p>

<h3>Tecnologias utilizadas</h3>
<p><img src="http://www.soumaisconquista.com/gitHub/Badges/Badges_REACT.png" alt="Badges_REACT" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/badges_express.png" alt="Badges_express" /></p>
<ol>
  <li><strong>Node.js:</strong> Para o desenvolvimento no servidor.</li>
  <li><strong>Express:</strong> Biblioteca para facilitar a criação da API.</li>
  <li><strong>React:</strong> Framework para construir uma interface de usuário dinâmica.</li>
  <li><strong>REST:</strong> Diretrizes para padronizar a comunicação entre a API e o cliente.</li>
 </ol> 

<h2>Visão - Back -end</h2>

<h4>Inicio</h4>

<p>A primeira providência a ser realizada ao iniciar qualquer projeto(não só tecnologico) é a busca por informações relevantes. Essa lição, aprendi durante minha época de estudante e, permanece comigo até hoje: "informação é poder!"

Buscar conhecimento e entender em qual contexto que vamos trabalhar, antes de avançarmos, é fundamental para o sucesso de um projeto. Ao reunir dados e insights, podemos tomar decisões mais assertivas e criar soluções mais eficazes.</p>

<p>Revise novamente o desafio e pense!&nbsp;Quais perguntas devemos fazer, a principio tudo é novo?&nbsp; Uma pergunta eficaz ajuda bastante na resolução do problema.<br/>   
  <p>Para quem está començando! Começe com o basico se é muita coisa para aprender . Divide em parte menores e vai avançando. </p>
<p>Como eesas ferramentas não fazem parte de nossa rotina devemos começar perguntando para cada tecnologia que vamos usar: <br /><br />
  1º -O que? <br />
  2º - O que faz?  <br />
  3º - E como faz? <br /><br />
 </p>
 <p>
   Vamos pegar o nodeJS:<br />
  1º A primeira pergunta: O que é?<br />
   Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 
   A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos
  2º O que faz ou para que serve?<br />
   O Node. js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador. Quando executamos um comando escrito 
   em JavaScript, o Node. js interpreta esse comando e faz a sua conversão para a linguagem de máquina a ser executada pelo computador.
   3º E como faz ou como uso?<br />
   Abra o terminal ou prompt de comando e navegue até o diretório onde deseja criar seu projeto. Em seguida, execute o comando npm init . Responda às perguntas do assistente 
   de configuração para criar um arquivo package. json personalizado para seu projeto.
 </p>
 <p> Em uma rapida consulta na web já conseguimos essas informações, já podemos dizer que o nodeJS é multiplataforma, o codigo não é compilado, usa a linguagem java script  e roda fora do navegador,utiliza arquitetura assíncrona e orientada por eventos.
 Voce pode esta pensando! Assincrona? Orientada por eventos? Esta me xingando!!! Veja no site da IBM uma explicação:&nbsp;&nbsp;<a href="https://www.ibm.com/br-pt/topics/event-driven-architecture">IBM</a>
 </p>
<p>Na verdade particularmente já tinha visto ou lido sobre todas estas tecnologias ,mais de fato não realizado nenhum trabalho com elas.No momento estava voltado para c# e unity na criação de jogos, mais surgiu esse desafio deixei 
o game um pouquinho, aguardem que vou colocar o jogo aqui tambem, é bem simples mais é o primeiro que faço na unity.</p>
<p>Votando ao desafio para responder essas perguntas para todas as tecnologias vamos ao: pai, mãe, irmão, professor... de todo dev.A famosa "web", 
  com seus recursos ilimitados e muita, mais muita mesmo, disponibilidade em ajudar, com seus personagens : youtube, foruns, documentação, blogs, cursos on-line, tudo gratis(nem todos os cursos) e disponivel 24 horas todos os dias(não sei se lembrei de todos.) </p>
<h2>A dica aqui é ESTUDE,TESTE,ESTUDE, TESTE...Fontes pesquisadas</h2>
<ul>
   <li>1° Youtube - https://www.youtube.com/</li>
   <li>2° Google - www.google.com.br</li>
   <li>3° Nodejs - https://nodejs.org/pt</li>
   <li>4° React - https://react.dev/</li>
   <li>5° Express - https://expressjs.com/pt-br/</li>
   <li>6° Cors - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS</li>
   <li>7° Nodemon - https://www.npmjs.com/package/nodemon</li>
   <li>8° Rest - https://pt.wikipedia.org/wiki/REST</li>
   <li>9° API - https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es </li>  
   <li>10°Git - https://git-scm.com/</li>
   <li>11°GitHub - https://github.com/ </li>
 </ul> 
 <p>Obs:O visual code não precisei estudar, pois já utilizo ele para criação de games junto com a unity.Caso voce não conheça a aplicação acrecente a lista por gentileza</p>
 <p>Realizada essa etapa vamos botar a mão na massa!Ops, desculpe! no codigo</p>
 <p>Antes de iniciar qualquer fase na programação, é fundamental preparar adequadamente o ambiente de trabalho verificando nossas ferramentas de trabalho. No nosso caso, isso envolve o download e a instalação das bibliotecas necessárias para o projeto.

Essa etapa inicial é crucial e obrigatoria não avance sem completa-la com exito.Pois garante que todas as ferramentas e dependências estejam prontamente disponíveis para execução e conclusão de nosso desafio, permitindo um fluxo de trabalho mais eficiente e evitando possíveis obstáculos durante o nosso desenvolvimento.<br />
Geralmente começo com prototipando, seja de papel ou mesmo em um rascunho, para este desafio devido ao curto espaço de tempo, para entrega do projeto, não fiz o prototipo, mais agora que já entreguei o desafio mesmo de forma incompleta, estou providenciando o prototipo com um gif animado.


</p>
   
<h2>Setup</h2>
<h4>Iniciando os trabalhos</h4>
<h4>Instalação dos aplicativos</h4>
<ul>
<li>1° Node - https://nodejs.org/en/download/package-manager</li>
<li>2° Visual code - https://code.visualstudio.com/download</li>
<li>3° Git - https://git-scm.com/downloads </li>  
<li>4° GitHub - Realizar o cadastro(o git e o gitHub é só mesmo para compartilhar o projeto, caso não queira pode desconsiderar as instalações </li>
</ul>
<p>Veja as versões que uso neste projeto</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/Versoes.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
<p>img:1</p>

<p>Vamos começar iniciar o nosso desafio, abrindo o <strong>prompt de comando</strong> para criarmos as pastas, onde vamos guardaremos o nosso projeto e instalarmos as bibliotecas.</p>
<ul>
    <li>Veja os comandos iniciais<li>
   <li>1º Criar a pasta => <strong>mkdir</strong></li>
   <li>2º Entrar na pasta =>  <strong>cd ./pasta/</strong> </li>
   <li>3° Criar o projeto => <strong>npm init</strong></li>
   <li>Obs: na web tem varios tutoriais que ajudam no passo a passo para estes procedimentos</li>
   <li>Veja na imagem abaixo como ficou no meu pc, para exemplificar melhor o processo:</li>   
 </ul> 
<p><br/>
  <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img1.jpg" alt="Iniciando o projeto" /></p>
  <p>img:2</p>
  <p>Logo em seguida instalamos as bibliotecas são 3 no total</p>
  <ul>
   <li>1º express => <strong>npm i express</strong></li>
   <li>2º nodemon =><strong> npm i nodemon</strong></li>
   <li>3° cors => <strong>npm i cors</strong></li>
   <li>4º Vamos abrir o visual code => <strong> code .</strong> </li>
 </ul> 
<p>Veja como ficou a minha instalação</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img2.jpg" alt="Instalações das bibliotecas" /></p>
<p>img:3</p>
<p>Chegou até aqui! Tudo tranquilo? Tá suave? Se divertindo? Então vamos lá...</p>
<p>Para ver se deu tudo certo voce pode dar os seguintes comandos, obeserve que na img1 - minhas versões, mostro o resultado destes comandos</p>
<ul>
  <li>1º <strong> git --version </strong> Para ver se o git esta instalado</li>
  <li>2º <strong> node --version</strong> Para ver se o node esta instalado</li>
  <li>3° <strong> code --version</strong> Para ver se visual code esta instalado</li>
 </ul> 
<p>Obs: se o comando <strong>code .</strong> não abrir o visual code automaticamente , reinstale o programa , comigo resolveu.</p>
<p>
  <p>Imagem do visual code aberto após o comando code .</p>
   <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img3.jpg" alt="Visualização do projeto no visual code" /></p>
   <p>img:4</p>
   Obs: Veja a sua tela se esta acompanhando as setas que indico na imagem para os pontos a serem observados.
</p>
<h2>PRONTO!!!!!!!! TUDO CERTO !!!!! VAMOS COMEÇAR OS PROCEDIMENTOS</h2>
<h3>Instalando o servidor</h3>
<p>Na pagina <strong>serve.js</strong> efetue os seguintes comandos: <br /> <br />
     <i>const express =require('express');</i>  <br />
         <i>const app = express();</i> <br />
            <i>const app.use(express);</i> </p>
<p>

    <i>app.get('/', (req,res) =>{</i><br />
         <i>res.send('starWars');{</i> <br />
   <i>});</i>  

 <i>app.listen(3000,() =>{</i><br />
        <i>console.log('Testando o Servidor');</i> <br />
 <i>});</i> 

<p>
  <p>Veja a imagem para uma comparação!</p>
  <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img4.jpg" alt="Iniciando o servidor" /></p>
  <p>img:5</p>
<p>Para um melhor aproveitamento e organização, vamos verificar alguns passos a serem seguidos, para a nossa primeira experiencia no desenvolvimento de uma API.</p>
<p>Aqui vamos fazer um cheklist para o nosso passo a passo!</p>
<ul>
   <li><h3>Objetivo :criar Uma Api</h3></h3></li>
  <li>1º Inciar o projeto: Para isso abra o terminal no visual code e digite:<strong> npm init -y</strong> <img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>2º Instalar as dependencias: Se voce seguiu o passo a passo já estão instaladas<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>3º Criar uma rota para acessar a API:<br />
    Crie o arquivo rotas.js e nele importe a biblioteca express com os seguintes comandos:<br />
    1-<strong> const express =require('express'); </strong> <br />
    2-<strong> const rotas = express.Routers();</strong>
    <p>Imagem referente a este procedimento <img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></p>
    <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img5.jpg" alt="Criando rotas" /></p> 
    <p>img:6</p>    
  </li>
  <li><p>4º Servir a API<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></p>
    <p>Veja a imagem abaixo como é a implementação para este serviço:</p>
    <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/consumindoDadosDaAPI.jpg" alt="Consumindo dados da API criada" /></p>
    <p>img:7</p>
    <p>Observe, criamos um array de objeto, verificamos junto a porta 3000 a sua visualização e enviamos para o front-end pela porta 3001.</p>
  </li>
  <li>5° Habilitar o CORS :  digite no arquivo serve.js:  <strong>const cors = require('cors');</strong><img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>6º Habilitar o NODEMON : Observe que esta etapa já foi realizada conforme a img 3, caso voce não tenha feito verifique a imagem novamente.<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
 </ul> 
<h2>PRONTO!!! os seis passos concluidos e o nosso servidor esta ok! Backend ok! Vamos trabalhar o frontend</h2>
<h2>Visão Frontend</h2>
<p>Pode deixar o visualcode do backend aberto, e abra novamente o prompt do seu computador.</p>
<p>Nele digite : <strong>npx create-react-app app</strong></p>
<p>Aguarde... demora um pouquinho!</p>
<p>No final deve apresentar algo semelhante a tela logo abaixo deve aparecer! Obs: Selecione a pasta que voce quer baixar com o comando <strong>cd ./pasta/.</strong> </p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img1.jpg" alt="Instalando o react" /></p>
<p>img:8</p>
<p>Vamos instalar agora a biblioteca axios</p>
<p>Entre na pasta app</p>
<p>Para instalar o axios escreva no prompt: <strong>npm i axios</strong></p>
<p>Já no visual code observe as pasta e os arquivos pela imagem apresentada.</p>
<p>Veja que muita coisa retiramos por não precisar para o nosso projeto. </p>
<p>Mais é opcional!</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img3.jpg" alt="Tela do visual code apresentando o React" /></p>
<p>img:9</p>
<h3>Comandos no frontend! Lembrando que o backend esta rodando e ativo, na porta 3000</h3>
<ul>
   <li>
     <p>1º Primeiro vamos ativar o nosso servidor. No terminal digite na pasta app(se voce instalou o react na pasta app veja img 8): <strong> npm star</strong></p>
     <p>Deve aparecer uma mensagem informando que a porta 3000 esta em uso, apert y que vai direcionar para outra porta.</p>
     <p>Não dando erro o servidor estara ligado e operante</p>
     <p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img4.jpg" alt="Acionando o servidor" /></p>
     <p>img:10</p>
   </li>
  <li>    
     <p>2º Lembre-se que no frontend codificamos, mais ele se caracteriza mais pela parte visual.</p>
     <p>Portanto para isso vamos criar um formulario basico para teste</p>
     <p>
        
    <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><a href='*' >Lista de Favoritos</a></div>
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
                >Pesquisar</button>
                </form>
           </div>

     </p>
     <p>Resultado.</p>
   </li> 
   <li> <p> <img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img5.jpg" alt="Teste de servidor" /></p>  
   <p>img:11</p>   
   </li>
 </ul> 
 <h3>Vamos testar o botão do formulario .</h3>
 <p>Para isso criamos uma função colocamos um console log e clicamos.Verificamos no console se hove resposta.</p>
 <p>

<i>function App() {</i><br />
   <i> const [personagem, setPersonagem] = useState(''); </i>  <br /> 
   <i>  const handlePesquisar = async (e) =>{</i>  <br />
     
      <i>  e.preventDefault();</i>  <br />

           <i>console.log(personagem);</i>   <br /> 

         <i> const response = await axios.post('http://localhost:3000/pesquisar',JSON.stringify({personagem}),    {</i>  <br />
       <i>  headers:{ 'Content-Type' : 'application/json'}</i><br />      
     <i>}</i>  <br />
  <i>);</i><br />
<i>};</i><br />
   
 </p>
 <p>Resultado.</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testeCliqueNoBotao.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
 <p>Img:12</p>
 <h2>Momento reflexão</h2>
 <p>Após instalar os aplicativos e as bibliotecas necessárias, configuramos um listener para o nosso servidor backend na porta 3000. Testamos o servidor acessando o endereço: <a href="http://localhost:3000">http://localhost:3000</a>. Além disso, configuramos uma rota no backend e criamos um array de dados que foi consumido perfeitamente pela nossa API. No frontend, inicializamos o servidor, provavelmente na porta 3001, e testamos no navegador acessando: <a href="http://localhost:3001">http://localhost:3001</a>. Também criamos um formulário básico e testamos a funcionalidade do nosso botão.</p> <p>Continuando...</p> <p>É importante lembrar que nosso desafio consiste em buscar um personagem pelo nome em uma API externa (Star Wars), encaminhando a requisição através de nossa API. Esta, por sua vez, retornará ao frontend os dados e características do personagem. Junto com essas informações, o personagem virá acompanhado de um botão/link que, ao ser clicado, permitirá adicioná-lo a uma base de dados de favoritos. Essa lista de favoritos poderá ser acessada pelo frontend por meio de um botão/link dedicado.</p>
 <p>Mais ou menos assim</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/index2.jpg" alt="Rascunho de tela do app" /></p>
 <p><img:13</p>
<p>Entendido o problema vamos do velho jargão de programador "vamos dividir para conquista"!</p>                         
<p>API criada , servidores iniciado , criamos o ouvido no backende (metodo get) e a boca no frontend (formulario)</p>
<p>Vamos testar nossa API consumindo a API da starWars</p>
  
<h2>Teste dos endpoints</h2>
<p>
   <p>
     Um personagem.<br />
        <i>app.get('/', async(req,res) => {  </i> <br />
             <i>const{data} = await axios('https://swapi.dev/api/people/1')</i>  <br />
               <i>return res.json(data)</i>  <br />
         <i> });</i> <br />
   </p>
    <p>
     Todos os personagens.Volta um objeto<br />
              <i> app.get('/', async(req,res) => {  </i><br />
                <i>const{data} = await axios('https://swapi.dev/api/people/')</i>   <br />
                  <i>return res.json(data)</i>  <br />  
 <i> });</i> <br />
</p>
   <p>
     Todos os personagem. Mais volta um array.<br />
           <i>app.get('/', async(req,res) => {  </i>  <br />
             <i>  const{data} = await axios('https://swapi.dev/api/people/')</i>  <br />
               <i>  return res.json(data.results)</i>  <br />
 <i> });</i> <br />
</p>
  <ul>
   <li><strong>/people/1 </strong>-- obter um recurso específico de pessoas</li>
   <li><strong>/people/</strong> -- obtenha todos os recursos das pessoas</li>
   <li><strong>/people/results/</strong> -- um array com os dados dos personagens</li>
  <li> Selecionando apenas um personagem</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndPoint1.jpg" alt="Teste endpoint 1" /> 
    <p>img:14</p></li>
 
  <li>Voltando toda a estrutura da API em formato de objeto</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndpoint2.jpg" alt="Teste endpoint 2" />
  <p>img:15</p></li>
  <li>Retorna um array somente com os personagens (opção escolhida para darmos prosseguimento)</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEnpoint3.jpg" alt="Teste endpoint 3" />
  <p>img:16</p>
  </li>
 </ul> 
<h2>Vamos testar a comunicação entre backend e frontend</h2>
<p>
<i> function App() {</i> <br />
      <i>const handlePesquisar = async (e) =>{ </i>       <br />
        <i> const response = await axios.post('http://localhost:3000/pesquisar'),</i>    {<br />
     <i> headers:{ 'Content-Type' : 'application/json'}</i>   <br />
    <i>}</i> <br />
 <i>);</i><br />
 <i>console.log(response);</i><br />
 <i>};</i><br />
    
  return (<br />
    <div className="App"><br />
      <header className="App-header"><br />
         <div className='conteiner-form'><br />
            <div className='adic_favoritos'><a href='*' >Lista de Favoritos</a></div><br />
               <h2>Busque seu personagem </h2><br />
                <form className ='formulario'><br />
                <input <br />
                id='inputID'<br />
                type='text'<br />
                name='personagem'<br />
                placeholder='personagem'<br />
                required<br />
                onChange={(e) => setPersonagem(e.target.value)} /><br />
                <button <br />
                className='btn-login'<br />
                type='submit'<br />
                onClick={(e) => handlePesquisar(e)}<br />
                >Pesquisar</button><br />
                </form><br />
           </div>   <br />    
      </header><br />
    </div><br />
  );<br />
}<br />
</p>
<p>Aqui colocamos um evento onClick no formulario que dispara uma função que faz essa comunicação com o backend e
recebe a resposta.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/enviandoOnomeParaOservidor.jpg" alt="Enviando o nome para o servidor" /></p>
<p><img:17</p>
<h2>Vamos testar a comunicação entre frontend => backend => ApiStarwars => backend => frontend</h2>
<p>
   <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><a href='*' >Lista de Favoritos</a></div>
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
                >Pesquisar</button>
                </form>
           </div>
</p>
<p>Ao ser acionada pelo cliente neste momento sem nome de personagem, minha API aciona uma função que busca na API starWars os dados e retorna para
o cliente todos os personagens em um array</p>
<p>Veja a imagem abaixo</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracaoBackendFrontendAPIstarWars.jpg" alt="Integração frontEnd, bacKend e API" /></p>
        <p>img:18</p>
<h3>Vencida esta etapa vamos adiante!</h3>
<p>Nossa API já esta comunicando com o front atraves de um retorno da API starwAR.</p>
<p>Esta na hora de comerçarmos trabalhar o retorno da API externa, ou seja, devolver ao cliente somente o que ele solicitou.</p>
<p>Como mostramos a seguir:</p>
<p>
         <i>app.get('/', async(req,res) => {  </i> <br />
                <i> const{data} = await axios('https://swapi.dev/api/people/')</i>   <br />    
                   <i>let testePesquisa = data.results;</i>   <br />
                       <i>const retornoPesquisa = </i>   <br />
                       <i>testePesquisa.find((persona) => persona.name === "Luke Skywalker"); </i>   <br /> 
                            <i> return res.json(retornoPesquisa);</i>  <br />
          <i></i> }); <br />
</p>
<p>Aqui utilizamos o methodo find passando o nome que vem do frontend para selecionarmos o personagem escolhido e devolvermos o resultado ao cliente.</p>
<p>Veja a imagem</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/pesquisaPorNome.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
        <p>img:19</p>
<p>Neste momento o negocio travou não conseguimos mostrar para o nosso cliente o resultado na tela, ou seja a resposta esta chegando no frontEnd mais fica no console.  
</p>

<h2>Contribuições são bem vindas</h2>
<p>Por ser o nosso primeiro projeto com essas tecnologias , não concluimos o desafio com todo processo realizado , caso seja do seu interesse .<br />
  Vamos precisar para terminar:
</p>
<ul>
   <li>Mostrar na tela o resultado da pesquisa</li>
  <li>Implementar uma base de dados para colocarmos os personagens na lista de favoritos</li>
  <li>Criar uma função para responder para o frontend quando solcitado a lista de favoritos</li>
 </ul> 

 <h2>Conclusão</h2> 
 <p>
   Desenvolvendo com Paixão<br/>
Desenvolver é um ciclo constante de teste => implementação => teste => implementação. Isso requer estudo, paciência e, claro, muito café! ☕️ <br/>

Para aqueles que amam programar, o mundo se abre em um leque infinito de possibilidades. Temos a incrível oportunidade de transformar ideias 
em realidade, seja criando uma API, um jogo, um aplicativo ou um site, entre outras coisas.<br/>
Pessoalmente, gosto de desenvolver e aprender, e sempre fico maravilhado com as novas possibilidades que surgem. Mesmo quando não consigo completar um
desafio dentro do prazo, fico animado por ter sido apresentado a ferramentas que eu conhecia, mas com as quais ainda não havia trabalhado.<br/>

Aqui, vou compartilhar alguns dos projetos que desenvolvi e espero que eles possam contribuir de alguma forma com a comunidade.<br/>

<h2>Um forte abraço e até a próxima!</h2>
  
      
 </p>
Warning: atualizado em:
<ul>
  <li>18/09/2024 * melhorei a descrição; criação de Badges para as tecnologias react e express; correção gramatical, melhorias e correções no texto;</li>
  <li>19/09/2024 * Melhorias no texto; Providenciando um prototipo utilizando um gif animado</li>
</ul>
