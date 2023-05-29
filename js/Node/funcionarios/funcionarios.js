const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAltual) => {
    return func.salario < funcAltual.salario ? func : funcAltual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
})


