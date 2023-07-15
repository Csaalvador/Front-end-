function Event({ numero }) {
    function meuEvento() {
      alert('Opa');
    }
    
    return (
      <div>
        <h3>Clique para disparar</h3>
        <button onClick={meuEvento}>Ativar</button>
      </div>
    );
  }
  
  export default Event;
  