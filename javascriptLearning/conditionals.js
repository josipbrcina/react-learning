console.log(true == false);
console.log(true == true);


var amICool = true;

if (amICool) {
    console.log('This is good. I\'m cool');
}

if (true == true) {
    console.log("This is true.");
} else if (true != true) {
    console.log("Should not see this!");
} else {
    console.log("Why would we ever get here?!!?");
}

var val1 = 6;
var val2 = "6";

if (val1 == val2) {
    console.log("Whaaat??");
}

if (val1 === val2) {
    console.log("We should not see this!!!");
} else {
    console.log("Always use strict equality!");
}
