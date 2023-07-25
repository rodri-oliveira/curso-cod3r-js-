const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log(chavesVariadas.has(123))