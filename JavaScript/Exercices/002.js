function aprovado(nota, faltas) {

    let passou = (nota >=7) && (faltas <= 10)
if(passou){
  return "Aprovado"
} else{
  return "Reprovado"
    }
    
    console.log(aprovado(7, 9))

}


