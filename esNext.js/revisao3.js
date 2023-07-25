const obj = { a: 1, b: 2, c: 3}



console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notoção literal

const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'oi'
    }
}
console.log(pessoa.nome)