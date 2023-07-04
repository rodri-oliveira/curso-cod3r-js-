function criarProduto(nome, preco, desconto = 0.1){
    return {
        nome,
        preco,
        desconto
    }
}

const prod1 = new  criarProduto('cadeeno', 1200.00)
const desconto = prod1.preco * prod1.desconto
const novoPreco = prod1.preco - (prod1.preco * prod1.desconto)
console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`)
console.log(`Preço ajustado: R$ ${novoPreco.toFixed(2)}`)