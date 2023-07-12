const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const paisChina = item => item.pais === 'China'
const mulherChinesa = item => item.genero === 'F'
const menorSalario = (acc, item) => 
    acc.salario < item.salario ? acc : item

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(paisChina)
        .filter(mulherChinesa)
        .reduce(menorSalario)
    console.log(func)
})

