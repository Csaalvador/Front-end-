// Function in JS is first class object (citizen)
// higher order function


// Create literaly
function fun1() {

}

// Store in a variable
const fun2 = function(){ 

}

// Store in a array
const array = [function(a, b){
    return a + b
}, fun1, fun2]

console.log(array[0](2,3))


// Store in object
const obj = {}
obj.falar = function(){
    return 'Olá Mundo!'
}
console.log(obj.falar())


// Function as parameters
function run(fun){
    fun()
}

run(function(){
    console.log('Execuntando...')
})

// A function can return/contain a function
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)


