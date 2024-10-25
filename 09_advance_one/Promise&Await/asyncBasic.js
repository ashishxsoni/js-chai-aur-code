console.log("one");
console.log("two");
//handler means here need a function callback
const wait = function () {
    console.log("hello there");
}
setTimeout(wait, 4000);
console.log("three");
console.log("four"); 