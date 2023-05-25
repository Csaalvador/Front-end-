const notas = [5.5, 1.8, 9.9, 5.5, 7.7]

 let validos = notas.filter(function(nota) {
    return  nota < 7
 })

console.log(validos)


let validos2 = notas.filter(nota => nota > 7)
console.log(validos2)

let invalidos = notas.filter(nota => nota <  7)
console.log(invalidos)