

// Get the current date and time
const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}
//prom1
//yh ab yaha se global context se delay m hai yani iska memory ab create ho gaya to iska call back load
// ho gya hai taskQ me jake 
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!!");
    }, 5000);

});
//prom2 
//yh ab yaha se global context se delay m hai yani iska memory ab create ho gaya to iska call back load
// ho gya hai taskQ me jake 
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!!");
    }, 10000);

});
//prom3 using function
//function hai call pr hi iska memory banega 
const fetchData = (time) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 Resolved Value!!");
        }, time);

    });
    return prom;
}



console.log("hello India Script 1");

//USING THREE ALL DIFFERENT PROMISE 
//CASE 1

async function getdataAwait() {
    //js engine await till promise to be consumed 
    console.log(`Funct Await starting cur time ${currentTime()}`);

    const val1 = await prom1; // WITH 5 SECONDS DELAY
    console.log(`Namaste java Script VAL1 ${currentTime()}`);
    console.log(val1);
    // console.log(`  completion after val1  ${currentTime()}`);

    const val2 = await prom2; //WITH 10 SECONDS DELAY
    console.log(`Namaste java Script VAL2 ${currentTime()}`);
    console.log(val2);

    const val3 = await fetchData(15000); //15 SEC DELAY
    console.log(`Namaste java Script VAL3 ${currentTime()}`);
    console.log(val3);
}


//CASE 2
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);


//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);

//     const val2 = await prom2; //WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);
// }

//CASE 3
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);


//     const val2 = await prom2; //WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);
// }

//CASE 4
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);

//     const val2 = await prom2; //WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);

// }


//USING ONE SAME  PROMISE TWICE AND ONE DIFFERENT ===========>>
//CASE 5
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);

//     const val2 = await fetchData(10000);//WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);
// }


//CASE 6
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);

//     const val2 = await fetchData(10000);//WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);

// }


//CASE 7
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);

//     const val2 = await fetchData(10000);//WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);
// }

//CASE 8
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val3 = await fetchData(15000); // 15 sec delay
//     console.log(`Namaste java Script 3 ${currentTime()}`);
//     console.log(val3);


//     const val2 = await fetchData(10000);//WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);

//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);

// }

//CASE 9
// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);



//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script VAL1 ${currentTime()}`);
//     console.log(val1);
//     // console.log(`  completion after val1  ${currentTime()}`);

//     const val2 = await prom2; //WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script VAL2 ${currentTime()}`);
//     console.log(val2);

//     const val3 = await fetchData(15000); //15 SEC DELAY
//     console.log(`Namaste java Script VAL3 ${currentTime()}`);
//     console.log(val3);

//     const val4 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 4  Resolved Value!!");
//         }, 5000)
//     }) // WITH 5 SECONDS DELAY

//     console.log(`Namaste java Script 4 ${currentTime()}`);
//     console.log(val4);

// }

//CASE 10

// async function getdataAwait() {
//     //js engine await till promise to be consumed 
//     console.log(`Funct Await starting cur time ${currentTime()}`);


//     const val1 = await prom1; // WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script VAL1 ${currentTime()}`);
//     console.log(val1);

//     const val4 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 4  Resolved Value!!");
//         }, 5000)
//     }) // WITH 5 SECONDS DELAY

//     console.log(`Namaste java Script 4 ${currentTime()}`);
//     console.log(val4);
//     const val2 = await prom2; //WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script VAL2 ${currentTime()}`);
//     console.log(val2);

//     const val3 = await fetchData(15000); //15 SEC DELAY
//     console.log(`Namaste java Script VAL3 ${currentTime()}`);
//     console.log(val3);



// }

getdataAwait()
console.log("hello India Script 2");

