const lista = document.querySelector('[destino="escritorio"]')

console.log('teste')
console.log('childnodes', lista.childNodes)
console.log(lista.childElementCount)

lista.setAttribute('destino', 'empresa')
lista.setAttribute('Cauã-casado-com', 'Beatriz')
lista.removeAttribute('destino')