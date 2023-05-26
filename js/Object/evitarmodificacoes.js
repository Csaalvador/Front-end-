const produto = Object.preventExtensions({
    Nome: 'BMW',
    preco: 182.833,
    tag:'Promoçãoo'
})

console.log(Object.isExtensible(produto))
produto.descricao = 'teste'


produto.Nome = 'GTI'
delete produto.tag

Object.seal(produto)
console.log(produto)

console.log(produto)
