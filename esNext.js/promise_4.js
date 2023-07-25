function gerarNumero(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const numeroGerado = parseInt(Math.random() * (max - min + 1) + min)
            resolve(numeroGerado)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumero(1, 50, 2000),
        gerarNumero(1, 50, 500),
        gerarNumero(1, 50, 3000),
        gerarNumero(1, 50, 3000),
        gerarNumero(1, 50, 3000),
        gerarNumero(1, 50, 3000),
    ])
}
gerarVariosNumeros()
    .then(numeros => console.log(numeros))