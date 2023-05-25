function Carro(velMaX = 220, impulso = 10){
    let velAtual = 0

    this.acelerar = function(){
        if(velAtual + impulso <= velMaX){
            velAtual += impulso
        } else {
            velAtual = velMaX
        }
    }

    this.getVelAtual = function(){
        return velAtual
    }
}

const uno = new Carro
uno.acelerar()

console.log(uno.getVelAtual())

const Ferrari = new Carro(350, 50)

Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelAtual())