var input = require("fs").readFileSync("/dev/stdin", "utf8"); // Reading data from stdin
var lines = input.split("\n"); // Split the data by new line

var A = parseInt(lines.shift()); // Get the first line and parse to integer

var months = { // Create a dictionary with the months
  1: "January", 
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

if (A >= 1 && A <= 12) { // Check if the month is valid
  console.log(months[A]); 
} else {
  console.log("Invalid month"); // If the month is not valid
}
