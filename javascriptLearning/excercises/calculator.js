var Calculator = function () {
    this.added = 0;
    this.extracted = 0;
    this.multiplied = 0;
    this.divided = 0;
    this.add = function (number, number2) {
        this.added = number + number2;
    };
    this.substract = function (number, number2) {
        this.extracted = number - number2;
    };
    this.multiply = function (number, number2) {
        this.multiplied = number * number2
    };
    this.divide = function (number, number2) {
        this.divided = number / number2;
    }
};

module.exports = Calculator;