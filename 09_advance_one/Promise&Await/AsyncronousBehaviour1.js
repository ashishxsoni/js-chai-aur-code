console.log("1");
console.log("2");
setTimeout(() =>
    console.log("Set 3"), 5000); //0 sec delay

console.log("4");
console.log("5");
setTimeout(() =>
    console.log("set 6"), 2000); // dono ko 0 sec delay par bhi check karo 
console.log("7");
console.log("8");
const greet = (name) => console.log(`Hello ${name}`);
greet("Ashish");
console.log("9");
greet("India")
console.log("10");


