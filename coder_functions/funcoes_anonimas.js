const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operação = soma) {
    console.log(operação(a, b))
}

// imprimirResultado(3,5)
// imprimirResultado(4,6, function (x, y) {
//     return x * y
// })

imprimirResultado(5, 7, (x, y) => x - y)

const pessoa = {
    falar: function () {
        console.log('opa')
    }
}

pessoa.falar()