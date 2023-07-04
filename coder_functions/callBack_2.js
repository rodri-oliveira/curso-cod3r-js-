const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1]

const notasMenorQue_5 = nota => nota < 5
const notasMaioresQue_5 = nota => nota > 5 

const resultado1 = notas.filter(notasMenorQue_5)
console.log(resultado1)

const resultado2 = notas.filter(notasMaioresQue_5)
console.log(resultado2)