const alunos = [
    {nome: 'João', nota: 5, bolsista: false},
    {nome: 'Maria', nota: 5, bolsista: true},
    {nome: 'Pedro', nota: 5, bolsista: false},
    {nome: 'Ana', nota: 5, bolsista: true}
]

const  Todosbolsistas = (resultado, bolsista) => resultado && bolsista
const AlgumBolsista = (r, b) => r || b

console.log(alunos.map(a  => a.bolsista).reduce(Todosbolsistas))
console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista))