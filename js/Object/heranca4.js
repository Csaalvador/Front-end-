/*
function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto*/


function Familia(){

}
const filho1 = new Familia
const filho2 = new Familia

Familia.prototype.nome = ''
Familia.prototype.idade = ''
Familia.prototype.falar = function(){ 
    console.log(`Meu nome é ${this.nome}`)
}
filho1.nome ='Cauã'
filho1.falar()

console.log(filho1.__proto__ === Familia.prototype)
console.log(Familia.__proto__ === Function.prototype)