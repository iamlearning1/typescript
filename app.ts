const chalk = require("chalk");
const log = console.log;
const red = chalk.red;

let myString: string = "deepak";
// myString = 12;

let myNumber: number = 12;
// myNumber = false

let hobby: boolean = false;
// hobby = 12;

// type: any
let age: any;
age = 27;
age = "None";

let myAge: number;
// myAge = 'red'

// array
let hobbies: string[] = ["reading", "learning"];
// hobbies = [100];

// tuples
let address: [string, number] = ["street", 2];

// enums
enum Color {
  Green = 100,
  Blue,
  Red
}

const myColor: Color = Color.Green;
// log(chalk.red(myColor));

// functions
function greeting(name: string): string {
  return "Hi " + name;
}

// console.log(greeting("Deepak"));
// console.log(greeting(45));

// void
function hello(): void {
  console.log("hello");
  //   return "hello";
}

// hello();

// function types

function multiply(x: number, y: number): number {
  return x * y;
}

let myMultiply: (a: number, b: number) => number;
// myMultiply = hello
myMultiply = multiply;
log(red(myMultiply(12, 14)));
