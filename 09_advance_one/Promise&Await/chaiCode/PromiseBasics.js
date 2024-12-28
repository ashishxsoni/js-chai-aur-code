// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states:

// Pending: The operation has not completed yet.
// Fulfilled: The operation has completed successfully.
// Rejected: The operation has failed.


//<<<<<<=========  ============ ==========  ==========>>>>>>

// Creating a Promise
//Promise Always takes a callBack Function 
let promise = new Promise(function (resolve, reject) {
    // Do something async (e.g., an API call, file reading)
    let success = true; // Simulate an async task

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

//<<<<<<=========  ============ ==========  ==========>>>>>>

// Using Promises with .then() and .catch()

//this is defined above

//then is directly connected to resolve and 
// catch is directly related to reject 

//isme argument/paremeter hm jo resolve aur reject m pass karte h
// wo aate hai in then and catch me 

promise
    .then(function (result) {
        console.log(result); // "Operation successful"
    })
    .catch(function (error) {
        console.log(error); // "Operation failed"
    })


//we can use finally if we want
// .finally(() => console.log("The promise is either resolved or rejected"));

//<<<<<<=========  ============ ==========  ==========>>>>>>

// Example of Asynchronous Behavior Using Promises

let fetchData = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //is function k andr dena hota hai resolve 
        resolve("Data fetched successfully!");
    }, 2000); // Simulating 2 seconds delay
});


fetchData
    .then(function (result) {
        console.log(result); // "Data fetched successfully!" (after 2 seconds)
    })
    .catch(function (error) {
        console.log(error);
    });

console.log("Fetching data...");

//<<<<<<=========  ============ ==========  ==========>>>>>>


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataFetched = true;

            if (dataFetched) {
                resolve("Data has been fetched!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);  // Simulate 2 seconds delay
    });
}

fetchData()
    // .then(function (data) {
    //     console.log(data);  // Output: Data has been fetched! (after 2 seconds)
    // })
    //using arrow function single variable h to yaha (data )=> isko hm aise kar skte hai data =>
    .then(data => {
        console.log(data);  // Output: Data has been fetched! (after 2 seconds)
    })
    .catch(error => {
        console.error(error);  // Output: Failed to fetch data (if dataFetched is false)
    });

//<<<<<<=========  ============ ==========  ==========>>>>>>

//<<<<<<=========  ============ ==========  ==========>>>>>>
//<<<<<<=========  ============ ==========  ==========>>>>>>



//  Chaining Promises
// You can chain multiple .then() calls if you need to handle the result of one promise and pass it to the next.

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 completed!"), 1000);
    });
}

function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(previousResult + " Step 2 completed!"), 1000);
    });
}

step1()
    .then(result => step2(result))  // Pass result of step1 to step2
    .then(result => {
        console.log(result);  // Output: Step 1 completed! Step 2 completed! (after 2 seconds)
    });

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
// If any promise in the chain is rejected, it will skip to the nearest.catch() block.


//<<<<<<=========  ============ ==========  ==========>>>>>>

function fetchData(shouldResolve) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            if (shouldResolve) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 3000); // Simulates a 3-second delay
    });
}

//<<<<<<=========  ============ ==========  ==========>>>>>>
