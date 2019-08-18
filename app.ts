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
log(person);
person.getAge();
