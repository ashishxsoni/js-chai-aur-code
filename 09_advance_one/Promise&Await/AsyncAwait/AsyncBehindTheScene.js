
//BEHIND THE SEEN EXECUTION
console.log('Start');

async function fetchData() {
    console.log('Fetching data...');
    const result = await new Promise(resolve => setTimeout(() => resolve('Data'), 2000));
    console.log('Result:', result);
}

fetchData();

console.log('End');

/* Execution Steps:
Synchronous Code Runs First:

console.log('Start') is executed.
The fetchData function is invoked and added to the call stack.
Async Function Begins:

console.log('Fetching data...') runs inside fetchData.
The await keyword pauses the function's execution, and the promise (with setTimeout) is added to the microtasks queue.
The fetchData function returns a pending promise and exits the call stack.
Continue Synchronous Code:

console.log('End') runs.
Handle Microtasks:

Once the setTimeout promise resolves (after 2 seconds), the paused fetchData function resumes.
console.log('Result: Data') runs, completing fetchData. */

/* 
output:
Start
Fetching data...
End
Result: Data
 */