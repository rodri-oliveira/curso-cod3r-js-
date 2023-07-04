String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Escola de loucos'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 5, 5].first())