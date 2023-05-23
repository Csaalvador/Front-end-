const carros = ['Mercedes', 'Civic', 'BMW' , 'Ferrari']

function imprimir(n,i){
    console.log(`${i + 1} ${n}`)
}

carros.forEach(imprimir)