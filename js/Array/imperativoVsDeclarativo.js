const alunos = [
    { nome: 'Cauã', nota: 9.00 },
    { nome: 'Beatriz', nota: 10.00 }
]

const getNota = estudante => estudante.nota
const getSoma = (a, b) => a + b

const result = alunos.map(getNota).reduce(getSoma)

console.log(result / alunos.length)