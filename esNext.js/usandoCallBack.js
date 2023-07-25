//sem promise...
const http = require('http')

const getTurma = (letra, callBack) => {
    const url = `http:/files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callBack(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    const nomesAlunos = nomesAlunos => nomesAlunos.nome
    nomes = nomes.concat(alunos.map(nomesAlunos))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(nomesAlunos))
        console.log(nomes)
    })
})

