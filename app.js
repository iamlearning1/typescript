"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// log(person);
// person.getAge();
// static
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.PI = 3.14;
    return Helper;
}());
// log(Helper.PI);
// Inheritance
var Pi = /** @class */ (function (_super) {
    __extends(Pi, _super);
    function Pi() {
        return _super.call(this) || this;
    }
    return Pi;
}(Helper));
// log(Pi.PI);
// Abstract
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
// const project = new Project()
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        OnlyOne.instance = new OnlyOne("The Only One");
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// const onlyOne = new OnlyOne()
log(OnlyOne.getInstance());
