/* Sequential Execution:

When you use multiple await expressions one after another, JavaScript waits for each Promise to resolve before moving on to the next one.
This means each asynchronous task happens one after the other, and the total time will be the sum of all individual task times.
 */

async function sequential() {
    console.log('Sequential Start');
    const res1 = await fetchData1(); // Waits for fetchData1
    const res2 = await fetchData2(); // Then waits for fetchData2
    console.log('Sequential End');
}

function fetchData1() {
    return new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
}

function fetchData2() {
    return new Promise((resolve) => setTimeout(() => resolve('Data 2'), 1000));
}

sequential(); // Takes 2 seconds


/* Parallel Execution:

With parallel execution, you can start multiple asynchronous operations at once without waiting for them to complete.
You then await them all using Promise.all() to wait for all Promises to resolve simultaneously.
This makes the operations run concurrently, significantly reducing the overall time if the operations are independent. */

async function parallel() {
    console.log('Parallel Start');
    const p1 = fetchData1();  // Starts fetchData1
    const p2 = fetchData2();  // Starts fetchData2
    const [res1, res2] = await Promise.all([p1, p2]); // Waits for both in parallel
    console.log('Parallel End');
}

parallel(); // Takes 1 second
