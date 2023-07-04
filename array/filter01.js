const produtos = [
    { nome: 'notebook', preco: 5000, fragil: true},
    { nome: 'ipad', preco: 3500, fragil: true},
    { nome: 'copo de vidro', preco: 1200, fragil: true},
    { nome: 'copo de plastico', preco: 2400, fragil: false},
]

const fragil = item => item.fragil
const caro = item => item.preco > 3000
console.log(produtos.filter(fragil).filter(caro))

console.log(produtos.filter(function(p){
    return p.preco > 4000
}))

const apenasPreco = item => item.preco 
const precoMaior2000 = e => e > 2000
console.log(produtos.map(apenasPreco).filter(precoMaior2000))