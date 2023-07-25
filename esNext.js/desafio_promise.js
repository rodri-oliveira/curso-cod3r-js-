const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

function lerAarquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())

        })
    })
}

lerAarquivo(caminho)
    .then(res => console.log(res))