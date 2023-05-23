function soma() {
  let soma = 0;

  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma(4.1, 5.2, 2.3, ' teste'))
console.log(soma('a' + 'b' + 'c'))