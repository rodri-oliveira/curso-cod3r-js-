const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 1.45}',
    '{ "nome": "Kit de Lapis", "preco": 33.56}',
    '{ "nome": "Caneta", "preco": 55.90}'
]

const paraObjeto = json => JSON.parse(json)//transforma objeto
const apenasPreco = produto => produto.preco
const exibirReal = e => `R$ ${parseFloat(e)}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(exibirReal)
console.log(resultado)



