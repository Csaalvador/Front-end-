class Pessoa{
 constructor(nome){
    this.nome = nome
 }

 falar(){
    console.log(`Meu nome é ${this.nome}`)
 }
}

const user1 = new Pessoa('Cauã')
user1.falar()

const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Gaara')
p2.falar()