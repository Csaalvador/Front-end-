const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//CAMINHO SICRONO
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//CAMINHO ASSICRONA
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}:${config.bd.port}`)
})

const config = require('./arquivo.json')
console.log(config.bd)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo....')
    console.log(arquivos)
})