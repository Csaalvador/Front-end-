var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i <= 6; i++) {
    var x = parseint(lines.shift());
    if (x > 0) {
        total += + 1;
    }


}

console.log(total + " valores positivos");

