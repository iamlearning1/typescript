function personDecorator(constructor: Function): void {
  console.log("Person Class", constructor);
}

@personDecorator
class Person {
  constructor() {
    console.log("Person");
  }
}
