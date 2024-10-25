// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //push 9 from front
// console.log("unshifting  " + myArr)
myArr.shift() //shift the array to left
// console.log("shifting  " + myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(" Ashish ") //convert into string 
// const newArr = myArr.join() //convert into string ans har value  pr Ashish jod dega

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof myArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice method se wo cut hoke to aa jayega original 
// se par original par koi change nahi hoga wo aise hi rhega sirf ek part cut hoke aayega 

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //yh indexing hai 0 based boyh inclusive
//splice se cut hoke to aayega wo subaray ka part aur sath me
// original bhi modify ho jayega aur yh splice indexing k alava wala part usme rh jayega
console.log("C ", myArr);
console.log(myn2);
