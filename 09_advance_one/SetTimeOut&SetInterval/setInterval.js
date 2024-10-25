/* setInterval is similar to setTimeout, but instead of running the function once after a delay, it 
repeatedly executes the function at regular intervals (in milliseconds). */


// Example 1: setInterval without parameters
setInterval(() => {
    console.log("This message appears every 2 seconds");
}, 2000);


// Example 2: setInterval with parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setInterval(greet, 3000, "Alice");  // "Alice" will be passed to the greet function every 3 seconds


// Example 3: setInterval with multiple parameters
function displaySum(a, b) {
    console.log(`Sum: ${a + b}`);
}

setInterval(displaySum, 4000, 5, 10);  // "5" and "10" will be passed to displaySum every 4 seconds



// Example 4: setInterval with anonymous function and logic
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Counter: ${count}`);

    // Stop after the counter reaches 5
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared after 5 iterations");
    }
}, 1000);
