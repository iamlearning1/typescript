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

@logging(false)
@printable
class Plant {
  name: string = "Eucalyptus";
}

const plant = new Plant();
(<any>plant).print();
// console.log(plant);
