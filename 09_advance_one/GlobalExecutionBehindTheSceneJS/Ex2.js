console.log("Hello 1")
// console.log("Hello 1")


setTimeout(()=>{
    console.log("Hello 2")
} ,1000);

console.log("Hello 3")



/* Immediate Execution:

console.log("Hello 1") prints "Hello 1".
console.log("Hello 3") prints "Hello 3".
setTimeout:

setTimeout schedules the callback to print "Hello 2" after 1000ms.
The callback is placed in the callback queue.
After 1000ms:

The callback moves to the call stack and "Hello 2" is printed. */
/* 

OutPut:
Hello 1
Hello 3
Hello 2
 */