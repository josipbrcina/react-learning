var calculator = require('./calculator');

var model = new calculator();

model.add(5, 5);
model.substract(5, 5);
model.multiply(5, 5);
model.divide(5, 5);
console.log("Added: " + model.added + ", extracted: " + model.extracted + ", multiplied: " + model.multiplied
            + ", divided: " + model.divided);
