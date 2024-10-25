//SOUCES ==> CHATGPT
// IN SETTIMEOUT WE HAVE TO GIVE A HANDLE AND A TIMING IN MICROSECONDS

// Example 1: setTimeout without parameters
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

// Example 2: setTimeout with parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 3000, "Alice");  // "Alice" will be passed as a parameter to the greet function

/*   In this example, the greet function takes a name as a parameter. After 3000 milliseconds (3 seconds), 
  setTimeout will call greet("Alice") and log "Hello, Alice!".
 */

// Example 3: setTimeout with multiple parameters
function introduce(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

setTimeout(introduce, 2000, "John", "Doe");  // Pass both "John" and "Doe" as parameters

// Example 4: setTimeout with anonymous function and parameters
setTimeout(() => {
    const a = 10;
    const b = 20;
    console.log(`Sum of a and b is ${a + b}`);
}, 1500);


