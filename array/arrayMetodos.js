const pilotos = ['veter', 'massa', 'chumaker', 'rubinho']

pilotos.pop() //remove ultimo elemento do array

pilotos.push('verstapen')
console.log(pilotos)

pilotos.shift()//remove primeiro
console.log(pilotos)

pilotos.unshift('roberto')
console.log(pilotos)

pilotos.splice(1, 0, 'carlos')
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//retorna um novo array
console.log(algunsPilotos)//removeu a partir indice 2

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

