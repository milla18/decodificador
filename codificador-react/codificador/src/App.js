
import './App.css';
import {useState} from 'react';
const CryptoJS = require('crypto-js');

function App() {

  const [message, setMessage] = useState('');
  const [valorCodificado, setValorCodificado] = useState('');
  const [valorDecodificado, setValorDecodificado] = useState('');

  const handleChange = event => {
    const valorCodificar = setMessage(event.target.value);
  };

  const mensagemCodificada = (event) => {
     var encriptar = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(message));
     var encriptado = encriptar.valueOf(encriptar)
    const resultado = setValorCodificado(encriptado);
    console.log(resultado)
    
  };

  const mensagemDecodificada = (event) => {
    var decriptar = CryptoJS.enc.Base64.parse(valorCodificado).toString(CryptoJS.enc.Utf8);
    var decriptado = decriptar.valueOf(decriptar)
    const resultado = setValorDecodificado(decriptado)
    console.log(decriptar)
  }
 

    
   
  return (

  <div class="estiloPagina">
    <h1>Codificador e decodificador</h1>
    <p>Mensagem:</p>
  <input
  type="text"
  id="message"
  name="message"
  onChange={handleChange}
  value={message}
/>



<button 
name="valorCodificado"
onClick={mensagemCodificada}
value={message}
>Codificar</button>
<p>Mensagem Codificada: {valorCodificado}</p>

<button 
name="valorDecodificado"
onClick={mensagemDecodificada}
value={valorDecodificado}
>Decodificar</button>
<p>Mensagem Decodificada: {valorDecodificado}</p>

</div>
  );
}

export default App;
