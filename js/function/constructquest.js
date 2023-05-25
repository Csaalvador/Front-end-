function Pessoa(nome) {
  this.nome = nome;
  
  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
  };

  (imprimirNome) => {
    return falar();
  };
}

const user2 = new Pessoa("Cauã");
user2.falar();
