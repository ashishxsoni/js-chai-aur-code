// let score = "hitesh"
// let score = 123 // try both
let score = '33' // try with all

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // a type of parsing
console.log(typeof valueInNumber);
console.log(valueInNumber);
//jab ise print karayenge to yaha NAN aayega mtlb not a number 
//aise Number(varnam) krne se wo use number m convert to kr dgea par wo number hoga to print number ho jayega 
//wrna waha par nan hoga agr kuch string type ka ho to 


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber); 

// *********************** Operations ***********************

let value = 3
// let value = "3" //check this also
let negValue = -value
// console.log(negValue);
// console.log(typeof negValue);


console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); //power
console.log(2 / 3);
console.log(2 % 3);



let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);  //see note book of webdev
console.log(1 + "2");
console.log(1 - "2");
console.log("1" - "2");
console.log(typeof ("1" - "2"));

console.log("1" - 4);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1" - 2 + 2);
console.log(1 + 2 - "9");
console.log(1 - 2 - "2");

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");




let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion