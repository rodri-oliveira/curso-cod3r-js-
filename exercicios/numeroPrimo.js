function exibirPrimno(n){
    const newArray = []
    for(let numero = 3; numero <= n; numero++){
      if(testarPrimo(numero)){
        newArray.push(numero)
      }
    }
    return newArray
  }
  
  function testarPrimo(numero){
    for(let div = 2; div < numero; div++){
      if(numero % div === 0){
        return false
      }
    }
    return true
  }
  
  console.log(exibirPrimno(30))