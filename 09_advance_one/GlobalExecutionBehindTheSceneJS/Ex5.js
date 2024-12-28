console.log("Start");

setTimeout(() => {
  console.log("setTimeout - Callback Queue");

  Promise.resolve().then(() => {
    console.log("Promise in setTimeout - Microtask Queue");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Direct Promise - Microtask Queue");
});

console.log("End");


/* Execution Breakdown:
"Start" is logged.
"End" is logged.
Microtask Queue:
Direct promise is resolved, logs: "Direct Promise - Microtask Queue"
Callback Queue:
setTimeout callback is executed, logs: "setTimeout - Callback Queue"
Inside the callback, a promise is resolved, which queues another microtask.
Logs: "Promise in setTimeout - Microtask Queue" */

// Start
// End
// Direct Promise - Microtask Queue
// setTimeout - Callback Queue
// Promise in setTimeout - Microtask Queue
