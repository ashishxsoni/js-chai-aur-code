// Sequential Execution
// When you use await, the next line of code won't run until the promise resolves.

async function sequentialExecution() {
    console.log('Start');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log('After 1 second');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    console.log('After 2 more seconds');
}

sequentialExecution();

/* 
Parallel Execution
You can run multiple promises in parallel and then await their results using Promise.all. */

async function parallelExecution() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 2000));

    const results = await Promise.all([promise1, promise2]);
    console.log(results); // ['Promise 1', 'Promise 2']
}

parallelExecution();


//perforom this 
function getTime(){
    return new Date().toLocaleTimeString();
}

//sequential
console.log(`start : ${getTime()}`);
async function sequentialExecution() {
    console.log(`Before : ${getTime()}`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 1 second
    console.log(`Midd: ${getTime()}`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 2 seconds
    console.log(`end func : ${getTime()}`);
}

sequentialExecution();

console.log(`end : ${getTime()}`);

//Parallel
console.log(`start : ${getTime()}`);
async function parallelExecution() {
    console.log(`Before : ${getTime()}`);
    const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 2000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 3000));
    console.log(`Midd: ${getTime()}`);
    const results = await Promise.all([promise1, promise2]);
    console.log(results); // ['Promise 1', 'Promise 2']
    console.log(`end func : ${getTime()}`);
}

parallelExecution();

console.log(`end : ${getTime()}`);



