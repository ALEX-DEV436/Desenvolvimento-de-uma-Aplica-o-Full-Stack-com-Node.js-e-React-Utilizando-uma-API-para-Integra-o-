import './App.css';
import {useState} from 'react';
import axios from 'axios';
import coracao from './img/coracao.png'
import Informacao from  './componentes/Informacao'



let pg =0;
 

function App(){ 
  
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
  
     //console.log(personagem);
      const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem})
      ,
      {
          headers:{ 'Content-Type' : 'application/json'}
      }
  );
 
        if(response.data=='retorno'){
           //console.log('buscou API');
           pg++;
          buscaApi();
        }

        
  };

 
  const [nome, setNome] = useState('');
  const [filmes, setFilmes] = useState('');
  const [listaNome, setlistaNome] = useState('');
  const [listaFilmes, setlistaFilmes] = useState('');
  const [cadastrado, setCadastrado] = useState('');
  
 
  function buscaApi(){  
    
  axios 
  .get(`http://localhost:3000/${pg}`)
  .then((response) =>{
  let users =response.data;   
  //console.log(typeof users);   
  console.log(users); 
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
  const response = await axios.post('http://localhost:3000/personagem',JSON.stringify({nome,pg})
    ,
    {
        headers:{ 'Content-Type' : 'application/json'}
    }
);
  console.log(response.data);
  setCadastrado(response.data);
  setEstiloPersonagem('none');
  setEstiloCadastro('block');
  setEstiloListaPersonagem('none');
}

function buscarLista(e){
  console.log('entrou ioioi');
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




let entra = 2;
function Favoritos(e){  
  entra = e;
  let [lista, setLista] = useState(''); 
  let list = [];   
  axios 
  .get('http://localhost:3000/lista')
  .then((response) =>{
   list =response.data;
  
  setLista(list[0]); 
  //console.log(list[0][0,0]);
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
                onChange={(e) => setPersonagem(e.target.value)} />
                <button 
                className='btn-login'
                type='submit'
                onClick={(e) => handlePesquisar(e)}
                >Pesquisar</button>
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


);
}

export default App;
