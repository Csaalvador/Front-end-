function pessoas({ nome, idade, profissao, foto }) {
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <img src={foto} alt="foto" />
      </div>
    );
  }
  
  export default pessoas;
  