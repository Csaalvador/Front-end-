const notas = [10.0, 4.5, 4.9 ,7.6]

for(let i in notas){
    console.log(i,' = ', notas[i])
}

///////////////////////////////////////////////////////////////////////
const user = {
    Username: 'Cauã',
    Age: 18,
    Girlfriend: 'Bia',
    Peso: 88
}

for(let atributo in user){
    console.log(`${atributo} = ${user[atributo]}`)
}
