//PROTOTYPE CHAIN
/*
Object.prototype.attr0 = 'A' (((((((AVOID / EVITAR )))))))

const avo = { attr1: 'B' }   
const pai = { __proto__:avo, attr2: 'C' }
const filho = { __proto__:pai, attr3: 'D' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual =+ delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return(`${this.velAtual}km/h de ${this.velMax}`)
    }
}
 
    const ferrari = {
        modelo: 'F40',
        velMax: 324,
    }

    const golfao = {
        modelo: 'GTI',
        velMax: 303,
        status(){
            return `${this.modelo}: ${super.status()}`
        }
    }

    Object.setPrototypeOf(ferrari, carro)
    Object.setPrototypeOf(golfao, carro)

   ferrari.acelerar(100)
   golfao.acelerar(400)
   console.log(golfao.status())
