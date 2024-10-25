//Source ===> Akshya Saini Namste javascript , chatgpt , Chai aur code 


// 4. Async/Await: A Better Way to Work with Promises
// async/await is a modern syntax for handling promises that looks like synchronous code, making it easier to read and write.

// async: This keyword is placed before a function to make it asynchronous.
// await: This keyword is used to pause the execution of the function until the promise is resolved or rejected.


//<<<<<<=========  ============ NOTES  ==========  ==========>>>>>>

//=======>>>>> Notes about async 

/* 1. Async always return a Promise if in return statement there is string and other things that are returned
then asynsc automatically bind all those return into a promise and then return so 
in short Async func always return a promise */


/* Basic returning of a promise */

async function greet() {
    const p = new Promise(function (resolve, reject) {
        resolve("Promise Consumed!");
    });
    return p;
}

async function greet() {
    return "helloWorld"
}
const sayGreet = greet();
console.log(typeof sayGreet);  //object
console.log(sayGreet);   // Output : Promise { 'helloWorld' }
// console.log(greet()) //givem promise pending kyunki resolve nhi kiya hai 

/* so now we had confirm that it always return a promise if not a promise than bind it to promise 
so in console part we have to consume it like we did in promise part */

//right way of consume it as promises
sayGreet.then((data) => console.log(data));




//<<<<<<=========  ============ ==========  ==========>>>>>>


//<<<<<<=========  ============ ==========  ==========>>>>>>

// Common Mistakes
// Forgetting await: If you forget await, the async operation will run
//  in the background and may not behave as expected.

// When you forget to use await, the asynchronous function call will return a promise instead of the actual value you're expecting.


async function getData() {
    return "Data fetched!";
}

async function fetchingData() {
    const result = getData();  // Forgot to use await
    console.log(result);  // Output: Promise {<fulfilled>: 'Data fetched!'}
    console.log(typeof result);  //datatype object
}

fetchingData();

// In this case, the getData() function returns a promise that resolves to the string "Data fetched!". However, since we forgot to await, the result variable holds a promise, not the actual string. As a result, you see Promise {<fulfilled>: 'Data fetched!'}
//  logged to the console instead of "Data fetched!". 

// Fix:
// You need to use await to wait for the promise to resolve and get the actual value:

async function fetchData() {
    const result = await getData();
    console.log(result);  // Output: Data fetched!
}

//<<<<<<=========  ============ ==========  ==========>>>>>>

// Using await outside of an async function: await can only be
//  used inside functions declared with async. If used elsewhere, you'll get an error.
//ERROR
//let result = await fetchSomeData();  // Error: await is only valid in async function

//<<<<<<=========  ============ ==========  ==========>>>>>>

async function fetchData() {
    console.log("Fetching data...");

    try {
        let result = await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("Data fetched successfully!");
            }, 2000);
        });

        console.log(result); // "Data fetched successfully!" (after 2 seconds)
    } catch (error) {
        console.log(error);
    }
}

fetchData();
