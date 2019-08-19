function personDecorator(constructor: Function) {
  console.log(constructor);
}

// @personDecorator
class Person {
  constructor() {
    console.log("Person");
  }
}

// Factory
function logging(value: boolean): any {
  if (value) {
    console.log(personDecorator);
  } else {
    console.log(null);
  }
}

// @logging(false)
class Car {
  constructor() {}
}

function printable(Fn: Function) {
  Fn.prototype.print = function() {
    console.log(this);
  };
}

// @logging(false)
@printable
class Plant {
  name: string = "Eucalyptus";
}

const plant = new Plant();
// (<any>plant).print();
// console.log(plant);

// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

class Greeting {
  @editable(false)
  hello() {
    console.log("hello");
  }
}

const greet = new Greeting();
greet.hello();
// greet.hello = function() {
//   console.log("hi");
// };
// greet.hello();
