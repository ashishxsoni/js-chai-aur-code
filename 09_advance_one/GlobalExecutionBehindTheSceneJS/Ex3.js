console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Executor starts");
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

console.log("End");


/* 
Behind the Scenes:

Synchronous Execution:

"Start" is logged.
The executor starts, logging "Executor starts".
The setTimeout schedules a task for later.
"End" is logged.
Promise Resolution:

After 1000ms, resolve("Done") is called.
The .then callback is queued in the microtask queue.
Microtask Execution:

"Done" is logged after the synchronous code finishes.
 */

/* 

Output:
Start
Executor starts
End
Don */e
