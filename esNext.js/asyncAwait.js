//com promises
const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http:/files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch (e) {
                    reject(e)
                }
            })
        })
    })
}


// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => [].concat(...turmas))
//     .then(nomeAlunos => nomeAlunos.map(nomeAluno => nomeAluno.nome))
//     .then(res => console.log(res))
//     .catch(e => console.log(`ERRO!! ${e}`))

//recurso do ES8

let obterAlunos = async() => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}
obterAlunos()
    .then(nomeAlunos => nomeAlunos
        .map(n => n.nome))
    .then(res => console.log(res))
    





