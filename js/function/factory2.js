function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Camaro', 220.000))
console.log(criarProduto('Golf', 120.000))
console.log(criarProduto('Civic', 50.000))
console.log(criarProduto('BMW', 150.000))