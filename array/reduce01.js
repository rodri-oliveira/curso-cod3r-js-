const alunos = [
    { nome: 'joão', nota: 4.5, bolsista: true},
    { nome: 'maria', nota: 6.9, bolsista: false},
    { nome: 'claudio', nota: 9, bolsista: true},
    { nome: 'jose', nota: 4, bolsista: false},
]

const resultado = alunos.map( a => a.nota).
    reduce((acc, item) => acc > item ? acc : item)
console.log(resultado)
