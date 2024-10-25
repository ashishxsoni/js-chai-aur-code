//promise with multiple time function
//fetchdata ek variable hai abhi yh undefined rhega 
// jb ise aise call kiya jayega fetchdata(parameter) tb is fetchdata me value aayegi rerturn hoke 
//tbhi iske respective function ka memory yani ki function execution context banega 
const fetchData = (time) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved Value!!");
        }, time);

    });
    return prom;
}

// Get the current date and time
const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}


//UNDERSTANDING OF THIS CONCEPT ISKE UNDERSTANDING HME EX3 DEKHNE K BAD AAYEGI USE BHI DEKHE 


/* The await keyword pauses the execution of the async function until
 the promise is resolved or rejected. However, it doesn't
  block the main thread, making it efficient. */


console.log("hello India Script 1");
async function getdataAwait() {
    //js engine await till promise to be consumed 

    console.log(`Funct Await starting cur time ${currentTime()}`);

    const val1 = await fetchData(5000); // WITH 5 SECONDS DELAY
    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);
    console.log(`Middle of both ${currentTime()}`);


    //every time new promise created and goes to the task que or call backQ after creation of it beacuse these are 
    // declared in global context so their delay time starts from the creations of it

    const val2 = await fetchData(10000); //WITH 5 SECONDS DELAY
    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);
}



//IMPORTANT =======>> ===>>

//AFTER REVERSING THE TIME DELAY NOW SEE DIFFERENCE 

// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val1 = await fetchData(10000); // WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     console.log(`Middle of both ${currentTime()}`);

//     const val2 = await fetchData(5000); //WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);
// }



getdataAwait()
console.log("hello India Script 2");

