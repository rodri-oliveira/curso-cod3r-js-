const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velocidadeMaxima: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velocidadeMaxima){
            this.velAtual += delta
        }else {
            this.velAtual = this.velocidadeMaxima
        }
    },
    status(){
        return `${this.velAtual}Km/h ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(500)
console.log(ferrari)

volvo.acelerar(140)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())