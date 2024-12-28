//see promise behaviour in defiiferent scenarios 
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!!");
    }, 5000);

});

const fetchData = (time) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 Resolved Value!!");
        }, time);

    });
    return prom;
}

// Get the current date and time
const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}
console.log(`Hello JS Start ${currentTime()}`);
//ACCESSE  SAME PROMISE TWICE SEE RESULTS 
// ========>> CASE 1
async function getdataAwait2() {
    //js engine await till promise to be consumed
    console.log(`Funct Await starting cur time ${currentTime()}`);

    /*  prom1 is a variable which is holding a promise resolved value in perespective of global context
     prom1 memry heap m phle hi aa chuki hai ais ehi prom2 bhi kyunki global contexxt m declare hai 
     to inka settime func k call back ka  delay time global context ya jb yh create hue memory m tbse delay count ho ra ha hai inka 
     to basucally yh execution m chal rhi hai kyunki yh getdataawait k phle call hone se phle hi inke call backs
     taskqueue m yh  */

    const val1 = await prom1; // WITH 5 SECONDS DELAY
    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);

    const val2 = await prom1;
    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);
}
// getdataAwait2();
//============================>>  Behind the Scenes Story 

/* Let's break it down step by step:

Initial Setup:

Assume prom1 is already defined in the global scope and stored in the memory heap. It's a promise that resolves after 5 seconds.
The getdataAwait function is defined and stored in the memory heap.
The global execution context is created and pushed onto the call stack.


Execution of getdataAwait():

When getdataAwait() is called, a new execution context is created for it and pushed onto the call stack.
The function starts executing.


First console.log:

The first console.log statement is executed, logging the start time.
This operation is synchronous and happens directly on the call stack.


First await prom1:

The await keyword is encountered with prom1. /IS PROMISE 1 KA TASKQUEUE ME ALREADY SET  INTERVAL BN GAYA KYUNKI YH 
GLOBAL DECLARE HAI EHA SE JB FUNCTION LOAD HUA THA TB HI PROM1 AND PROM 2 KE CALLBACKA YANI SET TIME OUT LOAD HO CHUKE THE 
CALL BACK QUEUE/ TASK QUEUE ME 
The JavaScript engine checks the state of prom1:
a. If prom1 is already resolved, execution continues synchronously.
b. If prom1 is still pending (which is likely the case), the following happens:

The execution of getdataAwait is suspended.
Its execution context is popped off the call stack.
The function registers itself to resume when prom1 resolves.


The JavaScript engine is now free to do other work.


After 5 seconds (assuming prom1 wasn't already resolved):

The timer associated with prom1 (set up when prom1 was created) completes.
The callback function that resolves prom1 is pushed to the callback queue.
If the call stack is empty, the event loop moves this callback to the call stack.
prom1 is resolved with its value.
This triggers the continuation of getdataAwait.


Resuming getdataAwait:

The execution context of getdataAwait is pushed back onto the call stack.
Execution continues from where it left off.
The resolved value of prom1 is assigned to val1.


Next console.log statements:

The next two console.log statements are executed synchronously on the call stack.


Second await prom1:

The await keyword is encountered with prom1 again.
This time, prom1 is already resolved (from step 5).
The resolved value is immediately available.
Execution continues synchronously without any delay.


Final console.log statements:

The last two console.log statements are executed synchronously on the call stack.


Function Completion:

After the last console.log, the getdataAwait function completes.
Its execution context is popped off the call stack. */


//NOW ACCESING SAME BUT USING FUNCTION PROMISE
// =========================================================>> CASE 2

async function getdataAwait() {
/* js engine await till promise to be consumed
console.log(`Funct Await starting cur time ${currentTime()}`);
yh fetch data function h iska memory jb yh call hoga tb seprate bnta hai memory heap me */
const val1 = await fetchData(5000); // WITH 5 SECONDS DELAY
console.log(`Namaste java Script 1 ${currentTime()}`);
console.log(val1);

const val2 = await fetchData(5000);
console.log(`Namaste java Script 2 ${currentTime()}`);
console.log(val2);
}


getdataAwait();
console.log("Hello JS End Line ")


//================>> BEHIND THE SCENE STORY OF CASE 2


/* Initial Setup:

The fetchData function and getdataAwait function are defined and stored in the memory heap.
The global execution context is created and pushed onto the call stack.


Execution of getdataAwait():

When getdataAwait() is called, a new execution context is created for it and pushed onto the call stack.
The function starts executing.


First console.log:

The first console.log statement is executed, logging the start time.
This operation is synchronous and happens directly on the call stack.


First await fetchData(5000):

fetchData(5000) is called. A new execution context for fetchData is pushed onto the call stack.
Inside fetchData, a new Promise is created and stored in the memory heap ( AB BANA HAI  PROMISE YANI KI AB ISKA 
SET TIMEOUT JAKE TASKQUEUE M JAYEGA AB ISKA DELAY COUNT HONA START HOGA ).

The setTimeout is encountered. This is an asynchronous Web API, so:
a. The callback and delay (5000ms) are sent to the Web API environment.
b. The fetchData function returns the promise and its execution context is popped off the call stack.
The await keyword suspends the execution of getdataAwait. Its execution context is popped off the call stack.
The JavaScript engine is now free to do other work.


After 5 seconds:

The timer in the Web API environment completes.
The callback function (which resolves the promise) is pushed to the callback queue.
If the call stack is empty, the event loop moves this callback to the call stack.
The promise is resolved with "Promise 3 Resolved Value!!".
This triggers the continuation of getdataAwait.


Resuming getdataAwait:

The execution context of getdataAwait is pushed back onto the call stack.
Execution continues from where it left off.
The resolved value is assigned to val1.


Next console.log statements:

The next two console.log statements are executed synchronously on the call stack.


Second await fetchData(5000):

The process repeats similarly to steps 4-7 for the second fetchData call.
Another 5-second delay occurs, followed by promise resolution and logging.


Function Completion:

After the last console.log, the getdataAwait function completes.
Its execution context is popped off the call stack. */