//Implemente a função ao lado, que recebe um preço e um booleano indicando se já está com desconto ou não. Se o preço for maior que 100 e não estiver com desconto, a função deve retornar Quero pechinchar. Caso contrário, deve retornar Negócio fechado
function verificarDesconto(preco, comDesconto) {
  if (preco > 100 && !comDesconto) {
    return "Quero pechinchar";
  } else {
    return "Negócio fechado";
  }
}
console.log(verificarDesconto(120, false)); // retorna "Quero pechinchar"
console.log(verificarDesconto(80, true)); // retorna "Negócio fechado"
