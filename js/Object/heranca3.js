const pai = {nome: 'Nivaldo', corCabelo: 'Black'}
const filho1 = Object.create(pai)
    filho1.nome = 'Kennedy'

const filho2 = Object.create(pai, {
        nome: {value: 'Cauã', writable: false, enumerable: true}
})

console.log(`O filho mais velho de ${pai.nome} é ${filho1.nome}, a cor do seu cabelo é ${filho1.corCabelo}`)

for(let key in filho2){
filho2.hasOwnProperty(key) ? 
console.log(key) : console.log(`Por herança: ${key}`)
}
