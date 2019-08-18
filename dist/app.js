"use strict";
function echo(data) {
    return data;
}
// console.log(echo("Deepak"));
// console.log(echo(24));
// console.log(echo({ name: "Deepak", age: 27 }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Deepak").length);
console.log(betterEcho(24));
console.log(betterEcho({ name: "Deepak", age: 27 }));
