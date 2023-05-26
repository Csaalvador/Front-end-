const carrinho  = 
[ 
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]



const converterParaObjt = json => JSON.parse(json)
const getPreco = json => json.preco
const getNome = json => json.nome


const imprimirArrays = carrinho.map(converterParaObjt).map(getPreco)
const imprimirNomeArrays = carrinho.map(converterParaObjt).map(getNome)


console.log(imprimirArrays)
console.log(imprimirNomeArrays)




