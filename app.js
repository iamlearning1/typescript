var myString = "deepak";
// myString = 12;
var myNumber = 12;
// myNumber = false
var hobby = false;
// hobby = 12;
// type: any
var age;
age = 27;
age = "None";
var myAge;
// myAge = 'red'
// array
var hobbies = ["reading", "learning"];
// hobbies = [100];
// tuples
var address = ["street", 2];
// enums
var Color;
(function (Color) {
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 102] = "Red";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// functions
function greeting(name) {
    return "Hi " + name;
}
console.log(greeting("Deepak"));
// console.log(greeting(45));
// void
function hello() {
    console.log("hello");
    //   return "hello";
}
hello();
