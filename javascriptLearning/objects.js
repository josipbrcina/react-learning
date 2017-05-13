var person = {
    name: "Jack",
    age: 23,
    speakName: function (aName) {
        return "Hello, " + aName;
    }
};

console.log(person.name);

console.log(person.speakName("Harry"));

console.log("Name: " + person["name"]);

person.age += 5;

console.log("Age:" + person.age);

var Vehicle = function (make, color, premium) {
    var self = this;
    this.make = make;
    this.odometer = 0;
    this.engine = "V6";
    this.color = color;

    if (premium == true) {
        this.engine = "V8";
        this.color = "Platinum";
    }

    this.addTrip = function (newMiles) {
        if (newMiles > 0 ) {
            self.odometer += newMiles;
        }
    };
};

var benz = new Vehicle("Mercedes-Benz", "White", false);

console.log("Color: " + benz.color);
console.log("Odometer: " + benz.odometer);

benz.addTrip(501);

console.log("Odometer: " + benz.odometer);

benz.addTrip(-501);

console.log("Odometer: " + benz.odometer);

var volvo = new Vehicle("Volvo", "Ugly maroon", true);

console.log("Volvo color: " + volvo.color);
console.log("Color bracket syntax: " + volvo["color"]);
