// setTimeout(() => {
//     console.log('executando callback 1 ')
    
//     setTimeout(() => {
//         console.log('executando callback 2 ')
        
//         setTimeout(() => {
//             console.log('executando callback 3 ')

//         }, 2000)

//     }, 3000)
// }, 2000)

function esperarPorTempo(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('executando promise ')
            resolve()
        }, tempo)
    })
}
esperarPorTempo()
    .then(esperarPorTempo)
    .then(esperarPorTempo)