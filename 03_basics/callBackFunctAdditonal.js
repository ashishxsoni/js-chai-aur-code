//difference in Regular Functuion and a call back function
//sources ==> Freecode camp , chatgpt

// 1. Regular Function
// A regular function is any function that you define and can call directly in your code. It performs a specific task when called.


function sayHello() {
    console.log("Hello, world!");
}

sayHello(); // Output: Hello, world!


// Defined and executed directly: You define the function, and you decide when and where to call it.
// Synchronous execution: By default, regular functions are executed immediately when called

//<<<<<<=========  ============ ==========  ==========>>>>>>

// 2. Callback Function
// A callback function is a function that is passed as an argument to another function and is executed later, usually after the completion of some task. It allows asynchronous operations or delayed execution in JavaScript.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name); // The callback is invoked here
}

processUserInput(greet); // Output: Hello, Alice!



// Passed as an argument: A callback function is passed as a parameter to another function.
// Executed later: It is not executed immediately but at a later time, usually in response to an event or the completion of some task.
// Used in asynchronous operations: Callback functions are commonly used in scenarios like handling responses from server requests, handling user input, or waiting for a timer to complete.


//<<<<<<=========  ============ ==========  ==========>>>>>>

// Callback Function in Asynchronous Example (Using setTimeout):


function sayGoodbye() {
    console.log("Goodbye!");
}

setTimeout(sayGoodbye, 2000); // sayGoodbye will be executed after 2 seconds

// In this example, sayGoodbye is a callback function passed to setTimeout. It will be executed after the 2-second delay, not immediately when setTimeout is called.

//<<<<<<=========  ============ ==========  ==========>>>>>>
function one(call_2) {
    // call_2= two() the paremeter means this here
    console.log("step 1 done please call step 2");
    //callback fn
    call_2();
}

function two() {
    console.log("step 2 done");
}
one(two); // here passing the function 2 which further make the call back for function one

//<<<<<<=========  ============ ==========  ==========>>>>>>


let order = (call_production) => {
    console.log("Order, Placed, please call production");
    call_production();
}

let production = () => {
    console.log("Order received, start production");
}

order(production);


//<<<<<<=========  ============ ==========  ==========>>>>>>


