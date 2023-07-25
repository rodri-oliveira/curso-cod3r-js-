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


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(nomeAlunos => nomeAlunos.map(nomeAluno => nomeAluno.nome))
    .then(res => console.log(res))
    .catch(e => console.log(`ERRO!! ${e}`))

// let nomes = []
// getTurma('A').then(alunos => {
//     const nomesAlunos = nomesAlunos => nomesAlunos.nome
//     nomes = nomes.concat(alunos.map(nomesAlunos))
//     getTurma('B') .then(alunos => {
//         nomes = nomes.concat(alunos.map(nomesAlunos))
//         getTurma('C') .then(alunos => {
//             nomes = nomes.concat(alunos.map(nomesAlunos))
//             console.log(nomes)
//         })
//     })
// })
