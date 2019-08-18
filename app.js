"use strict";
var chalk = require("chalk");
function log(value) {
    console.log(chalk.red(JSON.stringify(value)));
}
var Person = /** @class */ (function () {
    function Person(name, age, type) {
        if (age === void 0) { age = 24; }
        this.name = name;
        this.age = age;
        this.type = type;
        this.name = name;
        this.age = age;
        this.type = type;
    }
    Person.prototype.getAge = function () {
        log(this.age);
    };
    return Person;
}());
var person = new Person("Deepak", undefined, "admin");
log(person);
person.getAge();
