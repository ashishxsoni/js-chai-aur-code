//Promise  All
//tab tak log nhi hota hai jab tak saare promises resolve nhi ho jate hai fir print hota hai
const fetchData = (time) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 3 Resolved ${currentTime()}`);
        }, time);

    });
    return prom;
}

// Get the current date and time
const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 Resolved ${currentTime()}`);
    }, 5000);

});
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 Resolved ${currentTime()}`);
    }, 10000);

});


console.log(`hello India Script 1 ${currentTime()}`);

async function getdataParallel() {
    console.log(`Funct Await starting cur time ${currentTime()}`);
    
    const [val1, val2, val3] = await Promise.all([prom1, prom2, fetchData(15000)]);
    console.log(`Namaste java Script VAL1 ${currentTime()}`);
    console.log(val1);
    
    console.log(`Namaste java Script VAL2 ${currentTime()}`);
    console.log(val2);
    
    console.log(`Namaste java Script VAL3 ${currentTime()}`);
    console.log(val3);
}
getdataParallel();
console.log(`hello India Script end ${currentTime()}`);