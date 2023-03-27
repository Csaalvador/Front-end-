var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

//view the odd numbers from 1 to n
for (i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
