const chalk = require("chalk");
function log(value: any): void {
  console.log(chalk.red(JSON.stringify(value)));
}

class Person {
  constructor(
    public name: string,
    private age: number = 24,
    protected type: string
  ) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  public getAge(): void {
    log(this.age);
  }
}

let person = new Person("Deepak", undefined, "admin");
// log(person);
// person.getAge();

// static
class Helper {
  static PI: number = 3.14;
}
// log(Helper.PI);

// Inheritance
class Pi extends Helper {
  constructor() {
    super();
  }
}

// log(Pi.PI);

// Abstract
abstract class Project {
  abstract changeName(name: string): void;
}

// const project = new Project()

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    OnlyOne.instance = new OnlyOne("The Only One");
    return OnlyOne.instance;
  }
}

// const onlyOne = new OnlyOne()
log(OnlyOne.getInstance());
