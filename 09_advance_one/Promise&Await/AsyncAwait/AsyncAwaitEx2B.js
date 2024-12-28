//This is totaly similair in meaning of AynscAwaitEx2 both are same just slight 
// modification in declartion but dono ka kaam ek hi hai 


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
    //js engine await till promise to be consumed 
    console.log(`Funct Await starting cur time ${currentTime()}`);

    const val1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1  Resolved Value!!");
        }, 5000)
    }) // WITH 5 SECONDS DELAY

    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);

    //every time new promise created and goes to the task que or call backQ after creation of it beacuse these are 
    // declared in global context so their delay time starts from the creations of it
    const val2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 Resolved Value!!");
        }, 10000)
    })  //WITH 10 SECONDS DELAY

    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);
}



//IMPORTANT =======>> ===>>

//AFTER REVERSING THE TIME DELAY NOW SEE DIFFERENCE 

async function getdataAwaitRev() {
    //js engine await till promise to be consumed 
    console.log(`Funct Await starting cur time ${currentTime()}`);

    const val2 = await new Promise((resolve, rejecet) => {
        setTimeout(() => {
            resolve("Promise 2 Resolved Value!!");
        }, 10000)
    }) //WITH 10 SECONDS DELAY


    //every time new promise created and goes to the task que or call backQ after creation of it beacuse these are 
    // declared in global context so their delay time starts from the creations of it

    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);

    const val1 = await new Promise((resolve, rejecet) => {
        setTimeout(() => {
            resolve("Promise 1 Resolved Value!!");
        }, 5000)
    }) // WITH 5 SECONDS DELAY

    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);

}



// getdataAwait();
getdataAwaitRev();
console.log("hello India Script End");

