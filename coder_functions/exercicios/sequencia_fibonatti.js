const prompt = require('prompt-sync')()


const n = prompt('Digite o numero de sequencia: ')

const seqFibon = () => {

    let a = 0
    let b = 1
    let c = 0
    let nome = ''
    let newArray = []

    newArray.push(a, b)

    for (let i = 0; i < (n - 2); i++) {
        c = a + b
        newArray.push(c)
        a = b
        b = c
    }
    return newArray
}

console.log(seqFibon())
console.log(nome)

