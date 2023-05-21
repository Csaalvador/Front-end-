const testArray = [5.1, 4.8, 9.6];
console.log(testArray);

testArray[3] = "indice tres";
console.log(testArray.pop()); //Mostra o ultimo valor da array

delete testArray.pop(); //deletou o utlimo valor da array
console.log(testArray);

//const test2 = []
//test2[0] = 'indice zero'
//console.log(test2)

//const test3 = [1.1, 2.8, 5.7]
//test3[1] = 1.0
//console.log(test3)
