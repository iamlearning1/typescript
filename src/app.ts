function echo(data: any) {
  return data;
}

// console.log(echo("Deepak"));
// console.log(echo(24));
// console.log(echo({ name: "Deepak", age: 27 }));

function betterEcho<Type>(data: Type) {
  return data;
}

interface Person {
  name: string;
  age: number;
}

console.log(betterEcho<string>("Deepak").length);
console.log(betterEcho<number>(24));
console.log(betterEcho<Person>({ name: "Deepak", age: 27 }));
