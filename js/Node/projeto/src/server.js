const porta = 3003

const express = require('express')
const app = express()


app.get('/produto', (req, res, next) => {
    res.send({ nome: 'Camaro', preco: 220.000 })
})

app.listen(porta, () => {
    console.log(`Servidor executado na porta ${porta}.`)
})