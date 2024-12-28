console.log("Start");

setTimeout(() => {
  console.log("From Callback Queue (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("From Microtask Queue (Promise)");
});

console.log("End");


/* Execution Order:
"Start" is logged.
"End" is logged.
Microtask Queue:
The resolved promise queues a microtask, and it is executed next.
Logs: "From Microtask Queue (Promise)"
Callback Queue:
The setTimeout callback is queued and executed after the microtask queue is cleared.
Logs: "From Callback Queue (setTimeout)" */

/* 
Output:
Start
End
From Microtask Queue (Promise)
From Callback Queue (setTimeout)
 */