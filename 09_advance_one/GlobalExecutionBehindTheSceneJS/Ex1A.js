let x;
const myName="Ashish";
console.log("1 global");
function outerFunction() {
    const outerVar = "Outer";
console.log("2 in outer");
    function innerFunction() {
        console.log("Accessing:", outerVar);
console.log("3 in inner");
    }
console.log("4 in outer ");

    return innerFunction;
}

console.log("5 global")
const myFunc = outerFunction();
console.log(myfunc);

myFunc();

console.log("6 global");


/* See notes fro behind the scene */


