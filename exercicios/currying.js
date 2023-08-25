// const salarioLiquido = (fn1, fn2, fn3, salario) => {
//     let resultado = fn1(salario)
//     resultado = fn2(resultado)
//     resultado = fn3(resultado)
//     return resultado
// }

// const salarioLiquido = (...funcoes) => {
//     return function(salario) {
//         let resultado = salario
//         for(funcao of funcoes){
//             resultado = funcao(resultado)
//         }
//         return resultado
//     }
// }
const desc1 = salario => salario * (1 - 0.10)
const descInss = salario => salario * (1 - 0.05)
const descFundoGarantia = salario => salario * (1 - 0.15)


const salarioLiquido = (...funcoes) => {
    return function(salario){
        return funcoes.reduce((resultado, funcao) => funcao(resultado), salario)
    }
}

const compor = salarioLiquido(desc1, descInss, descFundoGarantia)
const salarioFinal = compor(500)
console.log(`Salario liquido R$ ${salarioFinal}`)