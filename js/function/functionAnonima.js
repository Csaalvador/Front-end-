const soma = function(x, y) {
 return x + y
}

const imprimirResult = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResult(4,3)
imprimirResult(4, 3, soma)
imprimirResult(4, 3, function(a, b){
return a - b
})

imprimirResult(4, 3, (a, b) => a * b)
