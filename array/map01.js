const nums = [1, 2, 3, 4, 5]

const dobro = dobro => dobro * 2

console.log(nums.map(dobro))

const soma10 = e => e + 10
console.log(nums.map(soma10))

const triplo = e => e * 3
console.log(nums.triplo)

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).
    replace('.', ',')}`

const resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

