//Using of Promise all here 

/* What is Promise.all?
Promise.all is a method that allows you to run multiple promises concurrently and returns a single promise that resolves when all of the promises passed to it have resolved. If any promise rejects, Promise.
all will immediately reject and provide the error from the rejected promise.
 */

const prom1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 Resolved"), 5000); // 5 seconds delay
});

const prom2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 Resolved"), 10000); // 10 seconds delay
});

const prom3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 Resolved"), 15000); // 15 seconds delay
});

const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}

console.log(`Starting Promises at ${currentTime()}`);

Promise.all([prom1, prom2, prom3])
    .then((results) => {
        console.log(`All promises resolved at ${currentTime()}`);
        console.log(results);  // Logs ["Promise 1 Resolved", "Promise 2 Resolved", "Promise 3 Resolved"]
    })
    .catch((error) => {
        console.error(`One of the promises failed: ${error}`);
    });

/* 
    Key Characteristics of Promise.all:
Concurrent Execution: Unlike using await sequentially,
 Promise.all starts all the promises at the same time, 
 allowing them to run concurrently.

Returns a Single Promise: The result of Promise.
all is a single promise that resolves when all promises
 passed to it have resolved.
 
Order of Results: The result array will have values 
corresponding to the order of the promises passed, regardless of the order in which the promises themselves resolved.

 */