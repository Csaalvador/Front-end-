const { error } = require('console')
const fs = require('fs')

const produto = {
    nome: 'BMW',
    modelo: '320i',
    preco: 150.000,
    acelerar(){
        return 'VRUUUMMMMMMMM'
    }
}  

fs.writeFile(__dirname + 'ArquivoEscrito.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})