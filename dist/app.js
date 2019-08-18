"use strict";
function echo(data) {
    return data;
}
// console.log(betterEcho<string>("Deepak").length);
// console.log(betterEcho<number>(24));
// console.log(betterEcho<Person>({ name: "Deepak", age: 27 }));
// Built-in generics
var testResults = [2, 3];
// Arrays
// function print<Type>(arr: Type[]) {
//   arr.forEach(item => console.log(item));
// }
// print<string>(["Apple", "Mango"]);
// print<number>(testResults);
// generic class
var Simple = /** @class */ (function () {
    function Simple(base, multiplier) {
        this.base = base;
        this.multiplier = multiplier;
    }
    Simple.prototype.calculate = function () {
        return +this.base * +this.multiplier;
    };
    return Simple;
}());
var simple = new Simple("12", 10);
console.log(simple.calculate());
