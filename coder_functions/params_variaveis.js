function soma() {
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,4,6,4,8))