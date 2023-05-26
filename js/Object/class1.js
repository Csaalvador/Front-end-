class Avo{
    constructor(sobrenome){
        this.sobrenome = 'Salvador'
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao){
        super(sobrenome)
        this.profissao = 'Deeev'
    }
}

class Filho extends Pai{
    constructor(sobrenome, profissao){
        super(sobrenome, profissao)
    }
}

const p1 = new Filho()
console.log(p1)