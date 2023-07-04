const pai = {
    nome: 'Rodrigo',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
// console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'CARLA'
console.log(`${filha2.nome} tem cabelo cor ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}
