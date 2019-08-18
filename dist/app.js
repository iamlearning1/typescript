"use strict";
function greet(person) {
    console.log("Hi", person.name);
}
// greet({
//   name: "Deepak",
//   age: 24,
//   hobbies: ["reading"]
// });
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.greet = function () {
        console.log("Hi", this.name);
    };
    return Human;
}());
var me = new Human("Deepak");
var senior = {
    name: "Deepak",
    age: 24
};
