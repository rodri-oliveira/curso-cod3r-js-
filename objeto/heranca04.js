function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'RODRIGO'

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}
MeuObjeto.prototype.falar()
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()