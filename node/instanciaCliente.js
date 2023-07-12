const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incre()
contadorA.incre()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)