const escola = [{
    nome: 'Turma MI',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callBack){
    return Array.prototype.concat.apply([], this.map(callBack))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)