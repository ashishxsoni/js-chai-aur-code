//sources Freecode camporg and Chatgpt

//<<<<<<=========  ============ ==========  ==========>>>>>>
// 1. Function Declaration

function greet() {
    console.log("Hello, world!");
}
greet(); // Output: Hello, world!
//<<<<<<=========  ============ ==========  ==========>>>>>>

//2 . Function Expression
const greet = function () {
    console.log("Hello, world!");
};
greet(); // Output: Hello, world!

//<<<<<<=========  ============ ==========  ==========>>>>>>
// 3. Arrow Function (ES6)

const greet = () => {
    console.log("Hello, world!");
};
greet(); // Output: Hello, world!

// For single-line functions, you can omit the curly braces:


const greet = () => console.log("Hello, world!");
greet(); // Output: Hello, world!


// if there is only single argument then we can omit the parentheses

const greet = name => console.log(`Hello ${name} !`);

//<<<<<<=========  ============ ==========  ==========>>>>>>

// 4. Immediately Invoked Function Expression (IIFE)
// Functions can be invoked immediately after being defined 
// using an IIFE pattern. This is useful for code isolation.

(function () {
    console.log("Hello, world!");
})(); // Output: Hello, world!

//<<<<<<=========  ============ ==========  ==========>>>>>>

// 5. Constructor Function


function Person(name) {
    this.name = name;
}
const person1 = new Person("Alice");
console.log(person1.name); // Output: Alice

//<<<<<<=========  ============ ==========  ==========>>>>>>
// 6.Object Method
// You can define functions as methods inside objects.

const obj = {
    greet() {
        console.log("Hello, world!");
    }
};
obj.greet(); // Output: Hello, world!


//<<<<<<=========  ============ ==========  ==========>>>>>>
// 7. Generator Function
// A generator function uses the function* syntax and allows you to define 
// an iterative algorithm that can pause and resume its execution.

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFunction();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2


//<<<<<<=========  ============ ==========  ==========>>>>>>
// 8. Class Method(ES6)
// In ES6, classes can have methods that are defined
//  in a similar way to object methods.


class Greeter {
    greet() {
        console.log("Hello, world!");
    }
}
const greeter = new Greeter();
greeter.greet(); // Output: Hello, world!



//<<<<<<=========  ============ ==========  ==========>>>>>>