import './App.css';
import Event from './components/event'
import Form from './components/form'


function App() {

  return (
    <div className="App"> 
  
    <h1>Testando Eventos</h1>
    <Event numero ='1' />
    <Event numero ='2' />
<hr></hr>

    <Form />



    
    </div>
  ); 
}

export default App;
