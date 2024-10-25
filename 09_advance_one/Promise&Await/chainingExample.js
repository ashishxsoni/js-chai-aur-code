function fetchData(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data fetched after ${time / 1000} seconds`);
        }, time);
    });
}


// With Promises:

//  Chaining Promises
/* You can chain multiple .then() calls
if you need to handle the result of one promise and pass it to the next.
*/

/* promise chaing m hme promise ko baar bar hr then se return krna hoga last then tak 
last then fir nhi krega to chalega pr usse phle wale then saare k sare promise return karenge chaining k liye return krenge
*/

fetchData(1000)
    .then((data1) => {
        console.log(data1);
        return fetchData(2000);
    })
    .then((data2) => {
        console.log(data2);
        return fetchData(3000);
    })
    .then((data3) => {
        console.log(data3);
    });

// With Async/Await:
async function sequentialFetch() {
    const data1 = await fetchData(1000);
    console.log(data1);
    //this will block jb tak upr ka pura resolve hoke nhi aa jata hai 
    const data2 = await fetchData(2000);
    console.log(data2);

    //this will block jb tak upr ka pura resolve hoke nhi aa jata hai 
    const data3 = await fetchData(3000);
    console.log(data3);
}

sequentialFetch();



//<<<<<<=========  ============ ==========  ==========>>>>>>

//  ERROR Handling in Promise Chains
// It’s important to know where to place your .catch() block when chaining promises. It will catch any error that occurs in any of the previous .then() calls.


function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Step 1 failed!"), 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 2 completed!"), 1000);
    });
}

step1()
    .then(result => step2())  // Step 1 fails, this will be skipped
    .then(result => console.log(result))
    .catch(error => {
        console.error(error);  // Output: Step 1 failed!
    });

//IMPORTANT
/*  If any promise in the chain is rejected,
it will skip to the nearest.catch() block. */

//<<<<<<=========  ============ ==========  ==========>>>>>>

