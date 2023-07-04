const pessoa = {
    nome: 'Rbeca',
    idade: 13,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// destruction
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // listada
    writable: false, // alterada
    value: '25/07/1978'
})
pessoa.dataNascimento = '01/02/2019'
console.log(pessoa.dataNascimento)

// Object.assign 

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)