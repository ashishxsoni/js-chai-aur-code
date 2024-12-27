//this will give me the random number in between 0 ansd 1 [0,1) 1 is not inclusive as a decimal number
let randomDecimal = Math.random();
console.log(randomDecimal); // Output: A random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(randomDecimal*10)); // Output: A random number from 0 to 10(exclsive)
console.log(Math.floor(randomDecimal*10 +1)); // Output: A ra we use this to avoid getting zeros

/* Generate a Random Integer in a Range
To get a random integer between min (inclusive) and max (inclusive):
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  // Output: A random integer between 1 and 10
}
console.log(getRandomInt(1, 10));
/* 
Generate a Random Float in a Range
To get a random floating-point number between min (inclusive) and max (exclusive):
 */

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomFloat(1.5, 5.5)); // Output: A random float between 1.5 and 5.5


/* Generate a Random Boolean
Randomly generate true or false:
 */

let randomBoolean = Math.random() < 0.5;
console.log(randomBoolean); // Output: true or false

/* Generate a Random Element from an Array
Select a random item from an array:
 */

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
let colors = ["red", "blue", "green", "yellow"];
console.log(getRandomElement(colors)); // Output: A random color