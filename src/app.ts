interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

function greet(person: Person): void {
  console.log("Hi", person.name);
}

greet({
  name: "Deepak",
  age: 24,
  hobbies: ["reading"]
});
