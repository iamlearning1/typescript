"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function personDecorator(constructor) {
    console.log(constructor);
}
// @personDecorator
var Person = /** @class */ (function () {
    function Person() {
        console.log("Person");
    }
    return Person;
}());
// Factory
function logging(value) {
    if (value) {
        console.log(personDecorator);
    }
    else {
        console.log(null);
    }
}
// @logging(false)
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
function printable(Fn) {
    Fn.prototype.print = function () {
        console.log(this);
    };
}
// @logging(false)
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Eucalyptus";
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
// (<any>plant).print();
// console.log(plant);
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.hello = function () {
        console.log("hello");
    };
    __decorate([
        editable(false)
    ], Greeting.prototype, "hello", null);
    return Greeting;
}());
var greet = new Greeting();
greet.hello();
// greet.hello = function() {
//   console.log("hi");
// };
// greet.hello();
