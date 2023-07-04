function area (altura, largura){
    const area = altura * largura
    if (area > 20){
        console.log(`Valor acima do permitido ${area}m2`)
    }else {
        return area
    }
}
area(5, 6)
console.log(area(4, 3))