const pessoa = {
    saudacao: 'Olá mundo',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

///////////////////////////////////---/////////////////////////////////2
const falar2 = pessoa.falar.bind(pessoa)
falar2()