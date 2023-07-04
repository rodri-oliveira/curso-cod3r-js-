class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, prodissao = 'Professor'){
        super(sobrenome)
        this.prodissao = prodissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)