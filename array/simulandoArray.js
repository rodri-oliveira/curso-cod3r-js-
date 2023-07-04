const quaseArray = { 0: 'rafael', 1: 'rodrigo', 2: 'carlos'}

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['rafael', 'ana', 'bia']
console.log(quaseArray.toString(), meuArray)