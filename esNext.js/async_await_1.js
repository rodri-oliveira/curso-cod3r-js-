function esperarPorTempo(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}
// esperarPorTempo()
//     .then(() => console.log('executando promise '))
//     .then(esperarPorTempo)
//     .then(esperarPorTempo)

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function executar(){
    let valor = await retornarValor()
    
    await esperarPorTempo(1500)
    console.log(`Aync_await ${valor}`)

    await esperarPorTempo(1500)
    console.log(`Aync_await ${valor + 1}`)

    await esperarPorTempo(1500)
    console.log(`Aync_await ${valor + 2}`)

    return valor + 3
}

executar()
    .then(console.log)