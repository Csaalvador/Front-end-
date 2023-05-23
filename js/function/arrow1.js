let dobro = function(a){
    return 2 * a
}

console.log(dobro(2))


dobro = (a) => {
    return 2 * a
}

console.log(dobro(4))

dobro = a => a * 2
console.log(dobro(Math.PI))

saudacao = () => 'Olá mundo!'
console.log(saudacao())