Array.prototype.filter2 = function(callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
          if(callBack(this[i], i, this)){
            newArray.push(this[i])
          }
    }
    return newArray
}

const produtos = [
    { nome: 'notebook', preco: 5000, fragil: true},
    { nome: 'ipad', preco: 3500, fragil: true},
    { nome: 'copo de vidro', preco: 1200, fragil: true},
    { nome: 'copo de plastico', preco: 2400, fragil: false},
]

const fragil = item => item.fragil
const caro = item => item.preco > 3000
console.log(produtos.filter2(fragil).filter2(caro))

console.log(produtos.filter2(function(p){
    return p.preco > 4000
}))

// const apenasPreco = item => item.preco 
// const precoMaior2000 = e => e > 2000
// console.log(produtos.map(apenasPreco).filter2(precoMaior2000))