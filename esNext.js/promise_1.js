// let p = new Promise(function(cumprirPromessa) {
//     cumprirPromessa({
//         a: 4,
//         n: 7,
//         endereco: {
//              n: 9,
//              m: 2
//         }
//     })
// })

// p.then(res => console.log(res.endereco.m))
const primeiroElemento = primeiroElemento => primeiroElemento[0]
const primeiraLetra = primeiraLetra => primeiraLetra[0]
const maiuscula = maiuscula => maiuscula.toUpperCase()

let p = new Promise(function(resolve) {
    resolve(['ana', 'claudia', 'joao'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(maiuscula)
    .then(res => console.log(res))


p