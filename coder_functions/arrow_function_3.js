let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


const obj2 = {}
let comparaComThis2 = param => console.log(this === param)
comparaComThis(global)
comparaComThis2 = comparaComThis2.bind(obj2)
comparaComThis2(obj2)