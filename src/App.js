import './App.css';
import { useState } from "react";


function App() {

  const [idade, setIdade] = useState();
  const handleIdadeChange = (e) => {
    setIdade(e.target.value);
  }

  const [checked, setChecked] = useState(false);
  const now = new Date();
  const anoAtual = now.getFullYear();
  const [block, setBlock] = useState(false);
  const [ano, setAno] = useState();
  
  const handleBtCalculaClick = () => {
    var calculoAno = checked ? (anoAtual - idade)  :  (anoAtual - idade) - 1
    setAno(calculoAno)
    handleBtBlock()
  
  }

  const handleBtBlock = () => {
    setBlock(!block)
  }

  const handleBtLimparClick = () => {
    setAno(0)
    setIdade(0)
    setChecked(!checked)
    handleBtBlock()
  }

  const handleBtChecked = () => {
    setChecked(!checked)
  }

  return (
    <div class="box">
      <h1>Cálculo do Ano de Nascimento</h1>
      <p>
      <label for="fname"> Informe sua Idade: </label>
      <input value={idade} readOnly={block} type="number" onChange={handleIdadeChange} />
      </p>
      <p>Já fez aniversário esse ano? <br />
      <a>SIM</a>
        <input type="checkbox" onChange={handleBtChecked} value={checked} checked={checked} /> <br/>
      </p>

      <button class='button' onClick={handleBtCalculaClick}>Calcular</button>
      <button class='button' onClick={handleBtLimparClick}>Limpar</button>

      <p>Seu Ano de Nascimento:<br />
        <input readOnly value={ano} />
      </p>

    </div>
  );
}

export default App;