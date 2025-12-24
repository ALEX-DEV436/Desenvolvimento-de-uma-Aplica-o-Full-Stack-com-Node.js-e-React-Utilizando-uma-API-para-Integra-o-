#"Desenvolvimento de uma Aplicação Full Stack com Node.js e React&nbsp;: Utilizando uma API para Integração entre Front-end e Back-end"
<h2 align="left">
Aplicação Full Stack para Integração e Consumo de API Externa utilizando Node.js e React.
</h2>
<h3>Descrição</h3>
<p>Bem-vindos;</p>
<p align="justify">
Aqui você encontrará um ambiente de informação e muita animação para o desenvolvimento de uma API&nbsp;&nbsp;(Application Programming Interface), uma tecnologia muito utilizada no mercado de trabalho.&nbsp;Já tenho experiência como desenvolvedor Full stack, entretanto estou começando exatamente agora a trabalhar com essas ferramentas, pois sempre desenvolvi de forma tradicional (sem frameworks) e, para uso pessoal. É uma oportunidade única para voce que quer aprender&nbsp;!&nbsp;&nbsp;Pois vamos juntos conhecer essas tecnologias .&nbsp;&nbsp;Acompanhe toda a metodologia que utilizo quando enfrento um desafio para conhecer novas ferramentas de trabalho.</p>
<p align="justify">
Vamos desenvolver uma API muito bacana utilizando NodeJs para o Back-End e o framework React no Front-End. Nossa API deverá se comunicar com uma API externa (utilizaremos a da Star Wars) para atender às solicitações dos usuários que tenham acesso ao nosso sistema. Esta aplicação deverá seguir as diretrizes REST, garantindo que a comunicação entre o servidor e o cliente seja suave e padronizada.<p>
<p align="justify">
Um adendo:&nbsp;&nbsp;apesar de desenvolver aplicações web há muitos anos, eu nunca trabalhei com essas ferramentas. Ou seja, é uma ótima oportunidade para quem está começando. Trata-se do início de uma jornada, onde a próxima estação é o desenvolvimento de uma aplicação:&nbsp;&nbsp;completa,funcional e, com bastante aprendizado. Vamos trabalhar juntos na frente e nos bastidores de um sistema. Resolveremos um problema e, no final, sairemos melhores do que entramos, aprendendo novos conhecimentos que vão ser super úteis no mercado atualmente.<p>
<p align="justify">
Animados?&nbsp;&nbsp;Espero que sim&nbsp;!!!&nbsp;&nbsp; Você vai vivenciar uma experiência única e empolgante...&nbsp;A inquietude na vida de um desenvolvedor Full Stack&nbsp;!!!&nbsp;&nbsp; Não ficamos presos (digo restritamente...&nbsp; pois precisamos entender os princípios que regem cada tema; não dá para criar um site e colocar o texto amarelo sobre um vermelho cintilante) a nenhuma linguagem ou conceito de design.O escopo de nossa atuação é imenso, somos livres para desenvolver o que nos inspirar. Antes deste projeto, por exemplo, eu já estava criando um game com C# e Unity e, logo colocarei ele aqui também no GitHub. Mais neste momento, vamos focar neste projeto. Venha comigo nesta jornada e, "juntos e tambem misturados" vamos descobrir as possibilidades e oportunidades que essas novas ferramentas (digo "novas" para mim) podem oferecer.&nbsp;&nbsp;Vai ser muitooo!&nbsp;&nbsp;divertido!!!&nbsp;&nbsp;let's go&nbsp;!  
</p>
<hr>

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
<p>Fala devs, não ficou muito bem sincronizado mais já podemos ter uma ideia de como vai ficar a nossa aplicação. Até o final do projeto ele deve ficar perfeito.<br />Neste gif vcs já vão poder acompanhar um pouco da minha metodologia de trabalho,
1º penso na ideia/conceito 2º executo/implemento 3º vou lapidando/cor,fonte,desenhos(no caso do protótipo). Vou tentar colocar as versões do gif na base do projeto, é interessante para vcs verem a evolução do trabalho. Baixem os gifs e estudem as
  imagens internas&nbsp;.
</p>
<p>
Tentei colocar as principais funções de nossa aplicação nesta imagem e no meio dela uma breve reflexão de como o sistema se comporta por traz do espetáculo&nbsp;!... Nos bastidores&nbsp;!&nbsp;A ideia é essa&nbsp;!&nbsp;Vamos ver se funciona...Vou ficar refinando até o conceito ficar mais claro&nbsp;!&nbsp; Um forte abraço&nbsp;!	
</p>
<p>
  <img src="http://www.soumaisconquista.com/gitHub/gifAnimado/prototipo15.gif" alt="Prototipo do sistema em gif animado" /><br /> 
</p>
<h2>Dicas GitHub</h2>
<p>
<p>
1º - https://katex.org/docs/supported.html#line-breaks </br>
2º - https://gist.github.com/alexpeattie/4729247 </br>
3º - https://www.facom.ufu.br/~william/Disciplinas%202015-2/BSI%20-%20GSI003%20-%20Introducao%20Sistemas%20Informacao/Template/ApostilaLaTex.pdf
</p>	
</p>
<p>Para organizamos nosso projeto até a sua conclusão, vamos seguir um checklist básico&nbsp;:</p>
<p>
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Protótipo; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Dicas GitHub; <br />	
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Iniciar o projeto; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Instalar as bibliotecas; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Express; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar servidor com o express no Back-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma rota para acessar nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Nodemon para sempre reiniciar nosso servidor; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Servir a API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Cors; <br /> 
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar o projeto no React-Front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o servidor no Front-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar servidor com o express no Front-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Desenvolver a forma de entrada da pesquisa; <br /><br /> 
  <strong>Testes de introdução as tecnologias</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Testar clique no botão; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Utilizando o Axio; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma base de dados para ser consumida por nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Consumir a base de dados no front-end; <br /> 
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Uso do try e o catch; <br /> 
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de acesso a API da Star Wars; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de endpoints fornecidos na documentação da API Star Wars; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de retornos dos end points.Que tipos retornam?; <br />  
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de consumo da API externa , atraves de nossa API por nosso Front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar estilo para o formulario e pagina; <br /> <br />
  <strong>Testes de desenvolvimento</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de pesquisa pelo nome do personagem; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para consulta pelo nome da API  Star Wars na tela do usuario; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para cadastramento de personagem na lista de favoritos; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para mostrar lista de personagem; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Resultado dos testes de desenvolvimento; <br /> <br />
  <strong>Testes de implementação</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Apresentar o aplicativo como mostrado no prototipo; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Implementar lógica de erro de: Digitação, Ausencia de personagem, Nome inválido; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Implementar lógica de apresentação do nome dos filmes em vez de URL <br /><br />
  <strong>Conclusão</strong><br /> <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Introduzir os conceitos simples de componentes para o projeto; <br />  
  [&nbsp;&nbsp;&nbsp;]&nbsp;Desenvolver uma API rest para atualização da lista de personagens cadastrado; <br />  
</p>
<h2>Antes iniciarmos o nosso projeto vamos algumas informações que precisam ser vistas.</h2>
<h3>API externa</h3>
<h4>API starWar&nbsp;!</h4>
<p>
  A API de Star Wars, ou "swapi" (Swah-pee) é a primeira fonte de dados quantificada e acessível programaticamente do mundo para todos os dados do universo canônico de Star Wars&nbsp;!
</p>
<p>A API oferece o seguinte endpoints na sua documentação, entretanto com os teste realizados optamos utilizar outros, como veremos adiante.
<br/>Disponível em&nbsp;: <a titulo="Api externa" href="https://swapi.dev/api/">Api Star Wars</a>. Acesso em: 09 out. 2024.
 <ul>
   <li>/people/ -- obtenha todos os recursos de um personagem.</li>
   <li>/people/:id/ -- obter um recurso específico de um personagem.</li>
   <li>/people/schema/ -- exibir o esquema JSON para lista de personagens.</li>
 </ul> 
<h2>O desafio</h2>
<h4>Partindo dessas primeiras informações!!&nbsp;&nbsp;<strong>Qual seria de fato o nosso desafio&nbsp;?</strong></h4>
<p  align="justify">Vamos criar uma API Rest que permitirá aos fãns da série Star Wars buscar seus personagens favoritos, através de um Front-End interativo, que deve facilitar a busca e, cadastra-lo em uma lista.
Ao receber os dados da pesquisa do usuario! Nossa aplicação Front-End, comunicará com a nossa API no Back-End, que, por sua vez, faz uma solicitação à API oficial da Star Wars para obter o personagem. A pesquisa deve ser realizada pelo nome.Observem, vamos utilizar a Api da Star - Wars como nosso banco de dados. Vamos receber os dados da API externa, formata-los e responder ao nosso Front-End, que por sua vez repassará para o usuário a informação.<br />

As principais funcionalidades da aplicação incluem:
</p>
<ul>
<li><strong>Busca de Personagens:</strong> O cliente deve buscar pelo nome o personagem. Nossa API recebe essa solicitação e busca a resposta na API da star - Wars .</li>

<li><strong>Cadastro de personagem:</strong> Após a nossa API apresentar os resultados ao usuário, será disponibilizado um botão/link que permitirá adicionar o personagem à uma lista de favoritos.</li>

<li><strong>Visualização da lista de Favoritos:</strong> Será fornecido ao usuário um segundo botão/link que o possibilitará  visualizar e selecionar o seu personagem favorito, proporcionando assim uma experiência rica e personalizada.</li>
</ul>
Vamos integrar(bom demais) as tecnologias Node.js e React, criando uma aplicação completa entre Front-End e Back-End, fornecendo(espero) uma experiência rica, fluida e dinâmica para os nossos usuários.
</p>

<h3>Tecnologias utilizadas</h3>
<p><img src="http://www.soumaisconquista.com/gitHub/Badges/nodeJS.png" alt="Badges_nodeJS" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/react.png" alt="Badges_React" />
&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/express.png" alt="Badges_express" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/nodemon.png" alt="Badges_nodemon" />
&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/cors.png" alt="Badges_cors" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/gitHub.png" alt="Badges_gitHub" />	
&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/apiRest.png" alt="Badges_apiRest" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/npm.png" alt="Badges_npm" />
</p>
<ol>
  <li><strong>NodeJs&nbsp;:</strong>&nbsp; Para o desenvolvimento de toda nossa aplicação.</li>
  <li><strong>React&nbsp;:</strong>&nbsp; Framework para construção de nossa interface.</li>
  <li><strong>Express&nbsp;:</strong>&nbsp; Biblioteca para criar o nosso servidor.</li> 
  <li><strong>Nodemon&nbsp;:</strong>&nbsp; Biblioteca para manter o nosso servidor ativo.</li>
  <li><strong>Cors&nbsp;:</strong>&nbsp; Biblioteca que permite fazer solicitações ao servidor, implantado em domínios diferente </li> 
  <li><strong>GitHub&nbsp;:</strong>&nbsp; Compartilhamento de projetos e códigos.</li>
  <li><strong>REST&nbsp;:</strong>&nbsp; Diretrizes para padronizar a comunicação entre a API e o cliente.</li>
  <li><strong>NPM&nbsp;:</strong>&nbsp;gerenciador de pacotes para projetos Node.js</li>	
 </ol> 

<h2>Introdução</h2>

<p align="justify">Minhas primeiras providências ao iniciar qualquer projeto (não apenas os tecnológicos) é a busca por informações relevantes. Essa lição eu aprendi durante minha época de estudante e permanece comigo até hoje: "Informação é poder&nbsp;!"

Buscar conhecimento e entender qual é o contexto que vamos trabalhar. Antes de avançarmos&nbsp;!...&nbsp; É fundamental para o sucesso de um projeto. Ao reunir dados e insights, podemos tomar decisões mais assertivas e criar soluções mais eficazes.</p>

<p align="justify">Revise novamente o desafio e pense!... Pense novamente!...&nbsp;Quais perguntas devemos fazer? A principio, tudo é novo!&nbsp; Uma pergunta eficaz já é um grande passo na resolução de um problema.<br/>  
  <p align="justify">Para quem está começando! Começe com o basico e, se é muita coisa para aprender, faça a divisão do problema em parte menores, vá resolvendo cada parte, assim desta
  forma todo o problema é resolvido.</p>
<p>Como essas ferramentas não fazem parte da minha rotina de trabalho, começo perguntando para cada tecnologia que vou usar&nbsp;: <br /><br />
  1º -O que é&nbsp;? <br />
  2º - O que faz&nbsp;?  <br />
  3º - E como faz&nbsp;? <br /><br />
 </p>
<p align="justify">
  Para exemplo vamos pegar o nodeJS, observe:<br /><br />
  1º O que é&nbsp;?<br /><br />  
  Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 
  A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.Disponível em:<a titulo="wikipedia" href="https://pt.wikipedia.org/wiki/Node.js">Wikipedia</a>  . Acesso em: 09 out. 2024.<br /><br />
  2º O que faz ou para que serve?<br /><br />
  O Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador. Quando executamos um comando escrito 
  em JavaScript, o Node.js interpreta esse comando e faz a sua conversão para a linguagem de máquina a ser executada pelo computador.<br /><br />
  3º E como faz ou como posso usar&nbsp;?<br /><br />
<p>Abra o terminal ou prompt de comando (com o Node.js instalado) e navegue até o diretório onde deseja criar seu projeto. Em seguida, execute o comando<br /></p>
    
          ```
                    npm init
          ```
   
<p>Após este comando é só responder às perguntas do assistente de configuração para criar um arquivo package onde é guardado todas as informações do projeto. Não com este comando agora logo adiante vamos usá-lo na prática.</p>
  

<p align="justify"> Veja que uma rapida consulta na web e, já conseguimos respostas para nossas perguntas iniciais , já podemos dizer então que o Node.js é multiplataforma, o codigo não é compilado, usa a linguagem Java Script e roda fora do navegador,utiliza arquitetura assíncrona e orientada por eventos.
 Voce pode esta pensando! Assincrona&nbsp;? Orientada por eventos? Esta me xingando&nbsp;!!! Veja no site da IBM uma explicação:&nbsp;&nbsp;<a href="https://www.ibm.com/br-pt/topics/event-driven-architecture">IBM</a>
</p>
<p align="justify">Na verdade particularmente já tinha visto ou lido sobre todas estas tecnologias. Mais de fato, não ter realizado nenhum trabalho com elas.No momento estava voltado para c# e unity na criação de jogos digitais, mais surgiu esse desafio e, deixei o game um pouquinho de lado. Mas, aguardem, pois vou termina-lo e colocar aqui no gitHUB tambem, é bem simples mais é o primeiro que faço na unity.</p>
<p align="justify">Voltando ao desafio&nbsp;! Para responder a essas perguntas, temos ajuda, vamos ao: pai, mãe, irmão, professor... de todo dev.A famosa "web", 
  com seus recursos ilimitados e, muita, mais muita mesmo... disponibilidade em nos auxiliar, apresento-lhes os meus personagens favoritos da web : youtube, foruns, documentação, blogs, cursos on-line, tudo gratis(nem todos os cursos) e disponivel 24 horas todos os dias(não sei se lembrei de todos.) </p>
<h2>A dica aqui é: ESTUDE,teste,ESTUDE, teste...</h2>
<h3>Fontes pesquisadas para este trabalho</h3>
<ul>
   <li>1° Youtube--=>&nbsp;&nbsp;<a title="" href="https://www.youtube.com">Link</a></li>
   <li>2° Google----=>&nbsp;&nbsp;<a title="" href="www.google.com.br">Link</a></li>
   <li>3° Nodejs----=>&nbsp;&nbsp;<a title="" href="https://nodejs.org/pt">Link</a></li>
   <li>4° React------=>&nbsp;&nbsp;<a title="" href="https://react.dev/">Link</a></li>
   <li>5° Express---=>&nbsp;&nbsp;<a title="" href="https://expressjs.com/pt-br/">Link</a></li>
   <li>6° Cors--------=>&nbsp;&nbsp;<a title="" href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS">Link</a></li>
   <li>7° Nodemon=>&nbsp;&nbsp;<a title="" href="https://www.npmjs.com/package/nodemon">Link</a></li>
   <li>8° Rest---------=>&nbsp;&nbsp;<a title="" href="https://pt.wikipedia.org/wiki/REST">Link</a></li>
   <li>9° API----------=>&nbsp;&nbsp;<a title="" href="https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es">Link</a> </li>   
   <li>10°GitHub----=>&nbsp;&nbsp;<a title="" href="https://github.com/">Link</a></li>
   <li>11ºAlura------=>&nbsp;&nbsp;<a title="" href="https://www.alura.com.br/">Link</a></li>	
 </ul> 
 <h5>Estude cada plataforma e confira o que pode ser útil para o projeto. Você pode encontrar coisas bem interessantes&nbsp;! </h5>
 <p>Obs:O visual code não precisei estudar, pois já utilizo ele para criação de games junto com a unity.Caso voce não o conheça acrecente a lista por gentileza</p> 
 <p align="justify">Antes de iniciar qualquer fase na programação, é fundamental preparar adequadamente o ambiente de trabalho verificando nossas ferramentas de trabalho. No nosso caso, isso envolve o download e a instalação das bibliotecas necessárias para o projeto.Claro que conforme avançamos no projeto podemos ter que instalar outras, mais de acordo com a nescessidade.<br />
Essa etapa inicial é crucial e obrigatoria, não avance sem completa-la com exito.Pois garante que todas as ferramentas e dependências (iniciais) estejam prontamente disponíveis para execução e conclusão de nosso desafio, permitindo um fluxo de trabalho mais eficiente e evitando possíveis obstáculos durante o nosso trabalho.
</p>
<h2>Setup</h2>
<h3>Iniciando os trabalhos</h3>
<p>
<img src="http://www.soumaisconquista.com/gitHub/Badges/npm.png" alt="Badges_npm" /><br />	
Para iniciarmos os trabalhos vamos conhecer uma ferramenta que vai nos ajudar na instalação dos aplicativos e bibliotecas que utilizaremos em nossa aplicação, trata-se do <strong><i>npm</i></strong>.<br />
NPM (Node Package Manager) é uma ferramenta de linha de comando que permite aos desenvolvedores gerenciar pacotes para projetos Node.js. <br />
O que faz?<br />	
1 - Instalar, desinstalar e atualizar dependências de projetos<br />
2 - Gerenciar dependências de projetos<br />
3 - Compartilhar dependências de projetos<br />
4 - Criar módulos públicos ou privados<br />
5 - Controlar pacotes próprios <br />
<p>Em minhas pesquisas verifiquei que existem outros gerenciadores de pacote, mais optamos por este, por ser o mais utilizado.</p>	
</p>
<h4>Instalação dos aplicativos</h4>
<ul>
<li>1° Node -...........=> <a title="" href="https://nodejs.org/en/download/package-manager">Link</a></li>
<li>2° Visual code -.=> <a title="" href=https://code.visualstudio.com/download">Link</a></li>  
<li>3° GitHub - Realizar o cadastro somente.(o gitHub é só mesmo para compartilhar o projeto, caso não queira pode desconsiderar as instalações neste momento</li>
</ul>
<p>Veja as versões que uso neste projeto</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/Versoes2.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>

<p>Vamos começar&nbsp;!!!,&nbsp; abrindo o <strong>Prompt de Comando</strong> para criarmos a estrutura de pastas, onde guardaremos o nosso projeto e tambem vamos instalar as bibliotecas.
Trata-se de algo pessoal e pode ser estruturado da forma que for mais confortavel para você.
</p>

<h4>Comandos iniciais no Prompt para criarmos um projeto Node.js</h4>
<h5>1º&nbsp;&nbsp;Criar a pasta =>Pode criar sua pasta com o nome de sua preferência.</h5> 
<p>
  
          ```
                    mkdir suaPasta
          ```
</p> 
 <h5>2º&nbsp;&nbsp;Entrar na pasta => Depois de criar você precisa entrar na pasta para o próximo passo com o comando <strong><i>cd .//</i></strong>. </h5>
<p>

           ```
                    cd ./suaPasta/
           ```
</p>

<h5>3°&nbsp;&nbsp;Criar o projeto => Com este comando o seu projeto sera criado.</h5>
<p>
  
           ``` 
                    npm init
           ```
</p>
<p>Acima eu passo os comandos para criação e acesso da pasta e, tambem como iniciar um projeto Node.js , isso
tudo pelo prompt.Existe outras formas de criação de projeto, mais esta é a mais utilizada segundo minha pesquisas.</p>
<p> Veja na imagem abaixo como ficou no meu pc, para exemplificar melhor todo o processo&nbsp;:  </p>

<p><br/>
 <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img1a.jpg" alt="Iniciando o projeto" /></p>
 <p>As bibliotecas são partes importantes no desenvolvimento de uma API , pois facilitam na criação do servidor e tambem na comunicação entre
    as partes que compoem a estrutura da aplicação, em todas as fontes que pesquisamos elas foram utilizadas e por isso coloco aqui as que vamos utilizar tambem  neste projeto;</p>
 <h4>Instalações das bibliotecas</h4>
  
<h5>1º&nbsp;&nbsp;express =></h5>
<p>
  
           ```
                    npm i express
           ```
</p>
<h5>2º&nbsp;&nbsp;nodemon =></h5> 
<p>

            ```
                    npm i nodemon
            ```
</p>
<h5>3°&nbsp;&nbsp;cors =></h5> 
<p>

            ```
                    npm i cors
            ```
</p>
<p>Veja como ficou as minhas instalações.Tenha calma na instalação para que não tenha problemas depois no desenvolvimento.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img2a.jpg" alt="Instalações das bibliotecas" /></p>
<p>Chegou até aqui! Tudo tranquilo&nbsp;? Tá, suave na nave? Se divertindo&nbsp;?&nbsp;Então vamos lá...</p>
<p>Para ver se deu tudo certo voce pode realizar os seguintes comandos, na imagem 1 <strong>- 'minhas versões'</strong> , mostro o resultado no prompt do meu computador.</p>

<h5>1º&nbsp;&nbsp;Para ver se o Node.js esta instalado</h5>
<p>

          ```
                    node --version
          ```
</p> 
<h5>2°&nbsp;&nbsp;Para ver se visual code esta instalado</h5>
<p>

           ```
                    code --version
           ```
</p>
<p>Vamos entra no projeto atraves do visual code, para começarmos a trabalhar</p>
<h4>Abrindo o visual code</h4>
<p>
  
           ```
                    code .
           ```
</p> 
<p>Obs: se o comando <strong><i>code .</i></strong> não abrir o visual code automaticamente , reinstale o visual code.Comigo resolveu.</p>
<p>Veja que criei uma pasta '<strong><i>src</i></strong>' dentro dela coloquei o arquivo '<strong><i>serve.js</i></strong>' e fiz a edição do arquivo '<strong><i>package.json</i></strong>' introduzindo a seguinte linha de codigo
'<strong><i>,"start": "nodemon src/serve.js</i>"</strong>'</p>
<p>
  <p>Imagem do visual code aberto após o comando code .</p>
   <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img3a.jpg" alt="Visualização do projeto no visual code" /></p>  
   Obs:Compare sua tela com a minha&nbsp;! Acompanhe as setas na imagem para observar os pontos que considero importantes.
</p>
<h4>Antes de colocar a mãos no código vamos entender rapidamente o que é uma API. Na minha percepção&nbsp;:</h4>
<p align="justify">
<img src="http://www.soumaisconquista.com/gitHub/Badges/api2.png" alt="Badges_api" /><br />	
API é uma tecnologia muito presente no mercado de trabalho atual, minhas primeiras impressões sobre este conceito é trata-se de algo que fica entre a fonte real de uma base de dados e o cliente ou solicitante. Fiz uma analogia na minha cabeça para tentar entender melhor a tecnologia.<br />
Vamos pensar em tomates&nbsp;!&nbsp; Pois estava comendo-os quando pensei nesta analogia.<br />
Imagine voce com vontade de comer uma salada de tomate&nbsp;!&nbsp; Abre a geladeira e não vê nenhum tomate. Provalvemente vai até a quintanda mais proxima para comprá-lo. Enquanto come tranquilamente sua salada, começa a refletir&nbsp;:&nbsp; Como esse tomate chegou à minha mesa&nbsp;?&nbsp;Qual foi o caminho que ele percorreu até se transformar em minha salada preferida&nbsp;?</p>
<p align="justify">
Na grande maioria das vezes, ele é plantado em uma fazenda por um agricultor e observe, voce não tenho acesso ao agricultor...&nbsp;&nbsp;O quitandeiro onde comprou também não&nbsp;!... &nbsp;Então... Entra em cena um terceiro personagem em nossa historia... &nbsp;&nbsp;O ATRAVESSADOR, que pega o tomate do agricultor, repassa para o quitandeiro, que, por sua vez, disponibiliza em sua quitanda para venda. Veja que nessa pequena história, já temos três personagens de nosso projeto&nbsp;:&nbsp; usuário,  front-end e Api! Consegue identificá-los&nbsp;?&nbsp; No rodapé deste projeto, deixei a resposta&nbsp;!&nbsp; Mas continuando...&nbsp;&nbsp; Estamos criando nossa própria API&nbsp;!&nbsp;E ai&nbsp;! como fica&nbsp;?&nbsp; Precisamos incluir mais dois personagens nesse imbróglio&nbsp;!&nbsp;Então vamos continuar a nossa histórinha&nbsp;!&nbsp;Imagine que o quitandeiro não pega o tomate diretamente do nosso atravessador; ele compra de um mercado/atacadão, que por sua vez possui um fornecedor que obtém os tomates diretamente do nosso atravessador. Já consegue identificar o back-end e a nossa API&nbsp;?&nbsp;&nbsp;Resposta no final deste projeto.</p>
<p align="justify">
Para finalizar-mos, como explicar nessa histórinha que uma API se trata de uma interface para receber e tratar os dados recebidos&nbsp;?&nbsp; Bom...&nbsp;O nosso atravessador e fornecedor, que são os que ganham mais dinheiro, possuem uma base (galpão) que trata os tomates antes de repassá-los, pois, conforme a  categoria de clientes, os tomates devem ser selecionados e limpos antes de serem postos a venda. E agora&nbsp;?...&nbsp;Consegue identificar a APi sendo uma interface&nbsp;?&nbsp; Na minha cabeça deu certo&nbsp;!!! E na sua&nbsp;?
</p>
<h4>PRONTO&nbsp;!!!&nbsp;&nbsp;TUDO CERTO&nbsp;!!!&nbsp;&nbsp;VAMOS COMEÇAR A CODAR&nbsp;???</h4>
<p>Prometo tentar ser o mais didático possível, mais quero que entendam que tambem estou começando a trabalhar com estas tecnologias e, portanto não tenho como
passar as informações como um expert no assunto, o que for aprendendo vou tentar compartilhar é o meu objetivo.</p>
<h3>Visão - Back-End</h3> 
<h4>Implementando nossa API</h4>
<p>Na pagina <strong><i>serve.js</i></strong> efetue os seguintes comandos&nbsp;: <br /> <br />
<h5>Criando o servidor</h5>
<p>
   
               ```
                            const express = require('express');
                            const app = express();
                            app.use(express.json());
  
               ```
</p>

<h5>Abrindo uma porta para o servidor</h5>  
<p>

              ```
                            app.listen(3000,() =>{
                                    console.log('Testando o Servidor');
                            });
             ```
</p>

<h5>Construindo uma rota para o consumo de nossa API</h5>
<p>

             ```
                           app.get('/', (req,res) =>{
                                  res.send('starWars');
                            });
            ```
</p>

<h5>Inicializando o servidor</h5>
<p>Abra o terminal do visual code e digite =></p>
<p>

            ```
                          npm start
            ```
</p>
<p>Resumidamente uma API já foi criada, quando ouvirem criar e consumir uma API já estamos fazendo isso, veja
  na img 05 , no navegador ao digitar 'http://localhost:3000/' aparece a mensagem 'HomeWorld - starWars', ou seja a mensagem esta sendo originada de nossa interface.<br/>
  Na linha  <strong><i></strong>app.use(express.json());</i> veja que o express , vem com .json, colocamos sem, mais não abre no navegador;
</p>
  <p>Na imagem abaixo podemos ver os comandos em meu pc.</p>
  <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img4a.jpg" alt="Iniciando o servidor" /></p>

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
