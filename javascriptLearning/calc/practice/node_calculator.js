var readline = require('readline-sync');

var num1 = parseInt(readline.question("Please enter a number: "));
var num2 = parseInt(readline.question("Please enter another number: "));
var operator = readline.question("Please enter and operator (+, -, /, *) ");

var result = function (num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2
    }
    if (operator == '-') {
        return num1 - num2
    }
    if (operator == '/') {
        return num1 / num2
    }
    if (operator == '*') {
        return num1 * num2
    }
};
console.log("Result of desired operation: " + result(num1, num2, operator));
