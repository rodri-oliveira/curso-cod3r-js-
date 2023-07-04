const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Rodrigo',
        idade: 44,
        endereco: {
            rua: 'novo',
            numero: 22,
            bairro: 'Vila Cintra'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Sonia',
        idade: 55
    }],
    calcularValorSeguro: function(){
        return 1 + 3
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro.condutores[0])
console.log(carro.calcularValorSeguro())
