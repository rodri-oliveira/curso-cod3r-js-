function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro ')
        }else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...', 0.7)
    .then(res => console.log(res))
    .catch( err => console.log(`Erro: ${err}`))
    .then(() => console.log('fim !!'))

