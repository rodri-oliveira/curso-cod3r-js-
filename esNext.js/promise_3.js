function numero_1_60(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const numeroGerado = parseInt(Math.random() * (max - min + 1) + min)
        resolve(numeroGerado)

    })
    
}

numero_1_60(1, 30)
    .then(res => res * 10)
    .then(numx10 => `o numero multiplicado por 10 foi ${numx10}`)
    .then(console.log)
    