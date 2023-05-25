function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (imposto + 1)}`
}

const produto = {
    nome: 'Notebook',
    preco: 2800.00,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 45444.00, desc: 0.20}
console.log(getPreco.call(carro))

console.log('\n')
console.log(getPreco.call(carro, 10.00, 'US'))
console.log(getPreco.apply(carro,[1200.00, '$']))