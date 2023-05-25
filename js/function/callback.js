const garagem = ['Golfão', 'Civic', 'BMW', 'AUDI']

function imprimir(nome, indice){
    console.log(`${indice} ${nome}`)
}
garagem.forEach(imprimir)
console.log('\n')
garagem.forEach((a,b) => console.log(b,a))