{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//template string

const produto = 'ipad'
console.log(`${produto}`)

//destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const { idade, nome} = { nome: 'rodrigo', idade: 9}
console.log(idade, nome)