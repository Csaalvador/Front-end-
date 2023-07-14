import './App.css';
import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName'
import Pessoas from './components/pessoas'

function App() {

  return (
    <div className="App"> 
  
    <HelloWorld />
    <SayMyName nome="Cauã"/>
    <SayMyName nome="Kennedy"/>
    <SayMyName nome="Cauã"/>

    <Pessoas nome="Cauã" idade="18" profissao="Estudante" foto="https://avatars.githubusercontent.com/u/83279598?v=4"/>
    
    </div>
  ); 
}

export default App;
