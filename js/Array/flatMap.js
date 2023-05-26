const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Cauã',
        nota: 9.00
    }, {
        nome: 'Beatriz',
        nota: 10.00
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'João',
        nota: 8.00
    }, {
        nome: 'Maria',
        nota: 7.00
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const result1 = escola.flatMap(getNotaDaTurma)

console.log(result1)
