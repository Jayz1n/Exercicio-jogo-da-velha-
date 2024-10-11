import './App.css';
import BoasVindas from './BoasVindas';
import Saudacoes from './Saudacoes';
import Contador from './Contador';
import MensagemConsole from './MensagemConsole';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <BoasVindas />
      <Saudacoes nome="Johnathan"/>
      <Contador />
      <div className='box'></div>
      <MensagemConsole />
      <Game />
    </div>
  );
}

export default App;
