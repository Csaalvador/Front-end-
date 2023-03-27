var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

if (N <= 800) {
    N = 1;
    console.log(N);
} else if (N > 800 && N <= 1400) {
    N = 2;
    console.log(N);
}
else if (N > 1400 && N <= 2000) {
    N = 3;
    console.log(N);
}

