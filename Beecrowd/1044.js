var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" "); //The input is a string, so we need to split it to get the numbers 

var a = parseInt(lines[0]); //We need to convert the string to a number
var b = parseInt(lines[1]);

if (a % b === 0 || b % a === 0) { //We need to check if the numbers are multiples
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
