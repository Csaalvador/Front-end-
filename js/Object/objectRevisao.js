/*const produto = new Object
produto.nome = '320i'
produto.marca = 'BMW'
produto.preco = 150.000

console.log(produto)*/

const Carro = {
    modelo: 'SI',
    valor: 50.000,
    proprietario: {
        nome: 'Kennedy',
        idade: 25,
        endereco: {
            cidade: 'Clementina',
            logradouro: 'RUA ABC',
            casa: 50
        }
        },
        condultores: [{
            nome: 'Cauã',
            idade: 18,
            endereco: {
                cidade: 'Birigui',
                logradouro: 'Rua AGD',
                casa: 1850
        
            }
        },
        {
            nome: 'Beatriz',
            idade: 17,
            endereco: {
                cidade: 'Birigui',
                logradouro: 'No meu coração',
                casa: 777
            },
        }],
    calcularValorSeguro: function(){
    return 'teste'
    }
}


console.log(Carro.condultores)