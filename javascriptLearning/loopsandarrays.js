var name = ["John", "Jacob", "Heimer", "Smith"];

for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

name.push("Tom");

for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

var whatever = ["Jeremy", true, 350];

for (var x = 0; x < whatever.length; x++) {
    console.log(whatever[x]);
}

var i = 0;

while  (i < 10) {
    console.log("Iteration: " + i);
    i++;
}

var i = 0;

do {
    console.log("Iteration: " + i)
    i++;
}
while (i < 10) {

}

whatever.splice(0, 2);
console.log(whatever);