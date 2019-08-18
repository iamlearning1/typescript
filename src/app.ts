interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

function greet(person: Person): void {
  console.log("Hi", person.name);
}

// greet({
//   name: "Deepak",
//   age: 24,
//   hobbies: ["reading"]
// });

class Human implements Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log("Hi", this.name);
  }
}

const me = new Human("Deepak");
// me.greet();

interface Senior extends Person {
  age: number;
}

const senior: Senior = {
  name: "Deepak",
  age: 24
};
