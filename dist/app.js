"use strict";
function echo(data) {
    return data;
}
// console.log(echo("Deepak"));
// console.log(echo(24));
// console.log(echo({ name: "Deepak", age: 27 }));
function betterEcho(data) {
    return data;
}
// console.log(betterEcho<string>("Deepak").length);
// console.log(betterEcho<number>(24));
// console.log(betterEcho<Person>({ name: "Deepak", age: 27 }));
// Built-in generics
var testResults = [2, 3];
// Arrays
function print(arr) {
    arr.forEach(function (item) { return console.log(item); });
}
// print<string>(["Apple", "Mango"]);
// print<number>(testResults);
// generic class
var Simple = /** @class */ (function () {
    function Simple(base, multiplier) {
        this.base = base;
        this.multiplier = multiplier;
    }
    Simple.prototype.calculate = function () {
        return this.base * this.multiplier;
    };
    return Simple;
}());
