Array.prototype.reduce2 = function(callBack, valorInicial){
    let acc = this[0] || valorInicial
    for(let i = 0; i < this.length; i++){
        acc = callBack(acc, this[i], i, this)
    }
    return acc
}

const alunos = [
    { nome: 'joão', nota: 4.5, bolsista: true},
    { nome: 'maria', nota: 6.9, bolsista: false},
    { nome: 'claudio', nota: 9, bolsista: true},
    { nome: 'jose', nota: 4, bolsista: false},
]

const todosBolsitas = (resultado, bolsista) => 
    resultado && bolsista
console.log(alunos.map( a => a.bolsista).reduce2(todosBolsitas))

const algumAlunoBolsista = (resultado, bolsista) => 
    resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce2(algumAlunoBolsista))