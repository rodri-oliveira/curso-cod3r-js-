function fun1() {}

const fun2 = function() {}

const array = [function(a,b) {return a + b}, fun1, fun2]

console.log(array[0](2,7))

const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

function run(fun){
    fun()
}
run(function(){console.log('executando...')})

function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(3, 5)(7)
const seteMais = soma(3, 5)
seteMais(7)