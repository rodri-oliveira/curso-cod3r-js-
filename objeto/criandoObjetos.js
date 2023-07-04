//notação literal
const objs = {}
console.log(objs)

//funçoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Rodrigo', 5000, 20/100)
console.log(p1.getPrecoComDesconto().toFixed(2))
p1.nome = 'Carlos'
console.log(p1, p1.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario () {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Rodrigo', 10000, 5)
console.log(`${f1.nome} vai receber R$ ${f1.getSalario().toFixed(2)}`)