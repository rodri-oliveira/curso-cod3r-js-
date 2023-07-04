const alunos = [
    { nome: 'joão', nota: 4.5, bolsista: true},
    { nome: 'maria', nota: 6.9, bolsista: false},
    { nome: 'claudio', nota: 9, bolsista: true},
    { nome: 'jose', nota: 4, bolsista: false},
]

const todosBolsitas = (resultado, bolsista) => 
    resultado && bolsista
console.log(alunos.map( a => a.bolsista).reduce(todosBolsitas))

const algumAlunoBolsista = (resultado, bolsista) => 
    resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumAlunoBolsista))