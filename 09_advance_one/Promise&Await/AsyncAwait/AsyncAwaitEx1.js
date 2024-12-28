//SOURCES ==>  NAMSTE JAVASCRIPT AKSHAY SAINI
//<<<<<<=========  Difference in Async Await handling ansd normal promise then catch==========  ==========>>>>>>



const prom = new Promise((resolve, reject) => {
    console.log("Promise starts Globally first")
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);

});
// await can only be used inside an async function async function handlePromise() {

//WITHOUT AWAIT 

/* Please understand this here in getdata function we just resolve the value of 
promise pr usme wha setTimeout se wo 10 sec wait krega par promise then se yh bas yaha par Queue m jayega 
aur 10 sec baad print ho jayega yaha par par promise then m yaha par yh next statement k liye nhi rukega yh apna print kar 
dega yani next state  ko execute karta chalega aur jaise hi 10 sec oure honge to waps aa jayega
But jab hm yaha agr Await use krte h to scenario different hoga Await kya kart ah ki jaha await laga h
call stack pura clear ho jayega aur wo waha ek new thread smjh lo create kar dega jisse wo thread alg parallel chalegi 
pr wo puri thread console ya execute tb hogi jb tak uska time function awit given hai like 10 sec to 10 sec tk wo
ruka rahgea wha par uske baad us particular thread m jo bhi aaya hoga wo Execute hoga  */


function getdata() {
    prom.then((data) => console.log(data)); 
    // then ab micro task queue me register ho gaya ab jaise hi available 
    // hoga aur main stack khali hoga to sbse phle picro tasQ execution hoga yani yh
    console.log("Namste java Script");
}

console.log("hello India Script 1");
//yh phle print hua kyunki promise consume hone me toda sa time lagta hai mili seconds me 

// getdata()

//<<<<<<=========  ==========  ==========  ==========>>>>>>

/* WITH USING OF AWAIT */

// Please understand this Example CareFully 

//await are allowed only in async function

console.log("hello India Script 2");

async function getdataAwait() {
    //js engine await till promise to be consumed 
    const val = await prom;
    console.log("Namste java Script");
    console.log(val);
}
getdataAwait()
console.log("hello India Script 3");

//<<<<<<=========  ============ ==========  ==========>>>>>>
