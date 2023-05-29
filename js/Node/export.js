
console.log(this === module.exports)
console.log(exports === module.exports)

this.a = 2
exports.b = 5
module.exports.c = 15

module.exports = {
    nome: 'Cauã',
    idade: 18
}
faker = ''
console.log(module.exports)
