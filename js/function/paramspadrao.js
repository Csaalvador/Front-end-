function soma(a, b ,c) {
 a = isNaN(a) ? 1 : a
 b = isNaN(b) ? 1 : b
 c = isNaN(c) ? 1 : c
 return a + b + c
}

console.log(soma(1,2,3))
console.log(soma(0, 0, 0))