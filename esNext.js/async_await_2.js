const { reject } = require("lodash")

function numero_1_60(min, max, numerosProibidos){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const numeroGerado = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(numeroGerado)){
            reject('Numero repetido ')
        }else {
            // numerosProibidos.push(numeroGerado)
            resolve(numeroGerado)

        }

    })
    
} 

async function gerarNumeroMegaSena(qtdNumeros, tentativas=1){
    try {

        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await numero_1_60(1, 60, numeros))
        }
        return numeros
    }catch (e) {
        if(tentativas < 3){
            return gerarNumeroMegaSena(qtdNumeros, tentativas + 1)
        }else {
            throw "Excedeu o numero de tenttivas: "
        }
    }
}


gerarNumeroMegaSena(6)
    .then(console.log)
    .catch(console.log)
        

    


    