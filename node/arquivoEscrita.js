const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    try {
        console.log('arquivo salvo')
    }catch (err) {
        console.log(`ocorreu um erro : ${err}`)
    }
})

