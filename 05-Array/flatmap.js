const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Sumara',
        nota: 9.3
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotaTurma)
console.log(nota1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotaTurma)
console.log(nota2)