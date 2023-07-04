function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    preco: 5000.00,
    desc: 0.20
}
//chamando a funcao com metodo CALL
console.log(getPreco.call(carro))

//chamndo a funcao com metodo apply
console.log(getPreco.apply(carro))