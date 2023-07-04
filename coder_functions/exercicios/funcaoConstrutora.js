function CriarPessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new CriarPessoa('Rodrigo')
p1.falar()