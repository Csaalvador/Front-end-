const alunos = [
    {nome: 'João', nota: 5, bolsista: false},
    {nome: 'Maria', nota: 5, bolsista: true},
    {nome: 'Pedro', nota: 5, bolsista: false},
    {nome: 'Ana', nota: 5, bolsista: true}
]

const result = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)

    return acumulador + atual
}, 10)

console.log(result)