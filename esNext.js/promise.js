// function falarDepoisDe(segundos, frase){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(frase)
//         }, segundos * 1000)
//     })
// }

// falarDepoisDe(3, 'que legal !!')
//     .then(frase => console.log(frase.concat('?!')))
//     .then(outraFrase => console.log(outraFrase))
//     .catch(e => console.log(e))

function falarDepoisDe(segundos, num1){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 4)
    .then(res => res * 5)
    .then(div => div / 3)
    .then(lucro => lucro * 0.10)
    .then(outro => console.log(outro))
    // .catch(e => console.log(e))