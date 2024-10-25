const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // yh precison ki value ko fix kar deta hai 2 matlb 2 dot tak

const otherNumber = 123.6866198418

console.log(otherNumber.toPrecision(2)); //1.2e+2
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.7

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives random values between 0 to 1 in  decimal places also 
console.log((Math.random() * 10) + 1); //to avoid with 0 like to grt value netween 1 to 9 including decimal places 
console.log(Math.floor(Math.random() * 10) + 1); //isse floor make it now int integer form


//when we need the value between a particuker fix range then we use this like here 
// if we need values between 10 to 20 then we use this min max technique to get our result in that range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //learn this format