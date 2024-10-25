//promise with multiple time function
/* Please UnderStand This very carefully this is tottally different from AsynAwaitEx2
here we are having two differernt promises now see there working  */

//THIS IS VERY IMPORTANT TO UNDERSTAND SEE IMAGE IN THIS FOLDER FOR MORE CLEAR UNDERSTANDING

/* yh prom1 variable h jo ki abhi undefined hai iske yaha promise jb resolved hoka 'uski value aayegi 
kyunki is statemnt se ab yaha memory m promise new keyword se create ho gya Hhai 
mtlb iska delay time abse start ho chuka hai kyuki iska settime se call back taskQ ya callbackQ m chala gaya hai 
ab yaha yh jo current time hai uske persepective m respective dealy pr complete ho jayega 
same for prom2  abjhi filhal yh dono global perspective se delay par count ho rhe hai taskQuue me kyunki 
inka creation memery me abhi hi hua hai */

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!!");
    }, 5000);

});
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!!");
    }, 10000);

});

// Get the current date and time
const currentTime = function () {
    const currentTime = new Date();  // Get the current date and time
    return currentTime.toLocaleTimeString();
}


//UNDERSTANDING OF THIS CONCEPT  =======>> MOST MOST IMPORTANT , BEHIND THE SCENE NICHE HAI  <<===========


/* The await keyword pauses the execution of the async function until
 the promise is resolved or rejected. However, it doesn't
  block the main thread, making it efficient. */

/*   in this first prom1 of 5 seconds will go to queue and then it goes to suspend wait 
after resolving prom 1 then next staement wil execute and again async func will suspend for 10 seconds
after completing to its  suspend wait delay it get back to that state where it leaves and webkitURLsee the time here from executing 
prom1 to prom2 yaha 10 second ka difference hona chahiye tha par aisa nhi hai wha 5 second ka 
difference hai wo isiliye ki yh function jab prom1 wait yani suspend queue m gaya tha tab uske just baad
yh execute hina shuru hua aur yh bhi wait m chala gaya kynki yh dono ek hi promise k thrugh execute nhi 
ho rhe h to yaha par dono ka parralely ek queue chal rha ya smjho dono ka alg thread bn gyaa hai 
aur kyunki wo dono differnt promise s hai to alg alg queue paralle chl rahe hai par chahe dusra queue phle complete ho jaye
yanni ki uska execution time par fir bhi wo wait krega kyunki async funtion blocked h kuch console karne k liye 
reason kyunki phla complete nhi hua hai */

/*
par agr jaise yaha prom1 5 sec and pro2 10 sec hai aur differ promise s yh  dono to  is wale case me 
ho yh raha h ki phle prom1 par a awit h to uska ek thread bn gaya aur jb tk uska thread pura execute nhi hoga 
tab tak yh nxt statement chalnege par suspend wait m rhenge kuch print nhi hoga inse to us suspend wait me yh jb
interpreter prom2 wale await pr aayega to ab iska ek alg susp thread ya queue bn jayega isse ab yh dono sath m 
alg alg thread me execution delay kar rhe hai apna aur jaise hi prom1 ka 5 sec complete hua to prom 2 bhi 
parlle apna 5 kr chuka hai ab uska 5 hi bacha hai to ab yh yah par prom1 k baad wala statement execute ho  gye 
par kyunki prom2 wala phle hi alg suspend wait m h to ab yaha se next statemrnt jb tk nhi chalenge jab tk yh prom 2 wala
apna 5 sec bcha ua complete nhi  kar leta hai  */

/*
similiar agr hm yaha par phle prom2 wala chala de yani ki 10 sec wala pr phle awit de aur last me prom 1 chalye to 
hm dekhenge ki is situion m yh hoga ki 
phle jaise hi intrpt prom2 wale first await par aayeg to uska delay timee 10 sec hai apna ek suspend wait create kar dega 
jisse us suspend que m baki jb execute honge par kuch print nhi hoga jb tk wo awit dealy m hai
iske just baad intrpt suspemd que m hi dusre await ayni prom1 5 sec delay par aayeg to hm dekhenge ki 
iska bhi ek apna susp queue bn jayega usme fir is prom1 await k bad wale saare usme jake awit condtion m rhege jb tk ki 
yh pura executee nhi hota pr hm paate h ki lst wale yni prom1 ka delay 5 ka hai aur phle wale await ka delay
10 sec ka h to us situion m dono parrallel chl rhe h par last wala yani prom1 complete hoke kuch print nhi karega 
jbki wo resolve ho chuka hai fir bhi kuch print nhi karega reason wo apne prom1 wale susp queu s complete karke waps aaya hai 
prom2 yni phle wale await k sus quq m waps aaya hai  wo abhi bhi await m hai usme abhi bhi 5 second 
bacha hai ,to yaha  bhale hi prom1 complete ho gaya par wo wait karega jb tk prom2 phle wla resolve ni hga 
aur prom2 ya phla wala await ka susq resolve ho jayeg to wo ab yaha dono ek satyh pront honge phle prom2 k bad
k satements fir prom1 kle kyunki prom1 to phle hi complete ho chuka hai fir bhi wo wha wait kar rha tha uska delay complete hone ka 
*/


console.log("hello India Script 1");
//CASE 1 
async function getdataAwait() {
    //js engine await till promise to be consumed 
    console.log(`Funct Await starting cur time ${currentTime()}`);
    
/*  prom1 is a variable which is holding a promise resolved value in perespective of global context
     prom1 memry heap m phle hi aa chuki hai ais ehi prom2 bhi kyunki global contexxt m declare hai 
     to inka settime func k call back ka  delay time global context ya jb yh create hue memory m tbse delay count ho ra ha hai inka 
     to basucally yh execution m chal rhi hai kyunki yh getdataawait k phle call hone se phle hi inke call backs
     taskqueue m yh  */
     
    const val1 = await prom1; // WITH 5 SECONDS DELAY
    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);
    console.log(`Middle of both ${currentTime()}`);

    const val2 = await prom2; //WITH 10 SECONDS DELAY
    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);
}



//IMPORTANT =======>> ===>>

//AFTER REVERSING THE TIME DELAY NOW SEE DIFFERENCE 

// async function getdataAwait() {
//     console.log(`Funct Await starting cur time ${currentTime()}`);

//     const val1 = await prom2; // WITH 10 SECONDS DELAY
//     console.log(`Namaste java Script 1 ${currentTime()}`);
//     console.log(val1);
//     console.log(`Middle of both ${currentTime()}`);

//     const val2 = await prom1; //WITH 5 SECONDS DELAY
//     console.log(`Namaste java Script 2 ${currentTime()}`);
//     console.log(val2);
// }

getdataAwait()
console.log("hello India Script 2");

  
//BEHIND THE SCENE STORY DEKHE NICHE
//CASE 1 BEHIND THE SCENE STORY============>
    
/*
Initial Setup (Global Execution Context):

The global execution context is created and pushed onto the call stack.
prom1, prom2, and currentTime function definitions are stored in the memory heap.
For prom1:

A new Promise object is created and stored in the memory heap.
The setTimeout is registered with the Web API (5000ms delay).


For prom2:

Another Promise object is created and stored in the memory heap.
Another setTimeout is registered with the Web API (10000ms delay).




Synchronous Execution Begins:

console.log("hello India Script 1") is executed and popped off the stack.


getdataAwait Function:

The getdataAwait function is defined and stored in the memory heap.


getdataAwait() Call:

getdataAwait() is called, creating a new execution context pushed onto the call stack.
The first console.log inside getdataAwait is executed, logging the start time.


First await prom1:

await prom1 is encountered. The state of prom1 is checked.
Since prom1 is still pending, getdataAwait is suspended.
The getdataAwait execution context is popped off the call stack.


Synchronous Execution Continues:

console.log("hello India Script 2") is executed and popped off the stack.
The global execution context is now complete and popped off the stack.


Waiting Phase:

The call stack is empty. The event loop continues to check for tasks.
After 5 seconds, the first setTimeout callback (for prom1) is moved to the callback queue.
The event loop detects this and pushes it to the call stack.
prom1 is resolved with "Promise 1 Resolved Value!!".


Resuming getdataAwait:

The getdataAwait function is resumed, pushed back onto the call stack.
val1 is assigned the resolved value of prom1.
The next two console.log statements are executed.


Second await prom2:

await prom2 is encountered. prom2 is still pending.
getdataAwait is suspended again and popped off the stack.


Another Waiting Phase:

After 5 more seconds (10 seconds total), the second setTimeout callback (for prom2) is moved to the callback queue.
The event loop pushes it to the call stack.
prom2 is resolved with "Promise 2 Resolved Value!!".


Final Resumption of getdataAwait:

getdataAwait resumes, pushed back onto the call stack.
val2 is assigned the resolved value of prom2.
The final console.log statements are executed.
getdataAwait completes and is popped off the stack. */


//=========>> BEHIND THE SCENE STORY OF CASE 2

/* Initial Setup (Global Execution Context):

The global execution context is created and pushed onto the call stack.
prom1, prom2, currentTime, and getdataAwait function definitions are stored in the memory heap.
For prom1: A Promise object is created, and a 5000ms setTimeout is registered with the Web API.
For prom2: Another Promise object is created, and a 10000ms setTimeout is registered with the Web API.
Both timers start counting down immediately.


Synchronous Execution Begins:

console.log("hello India Script 1") is executed and popped off the stack.


getdataAwait() Call:

getdataAwait() is called, creating a new execution context pushed onto the call stack.
The first console.log inside getdataAwait is executed, logging the start time.


First await prom2:

await prom2 is encountered. The state of prom2 is checked.
Since prom2 is still pending (it needs 10 seconds), getdataAwait is suspended.
The getdataAwait execution context is popped off the call stack.


Synchronous Execution Continues:

console.log("hello India Script 2") is executed and popped off the stack.
The global execution context is now complete and popped off the stack.


Waiting Phase:

The call stack is empty. The event loop continues to check for tasks.
After 5 seconds, the setTimeout callback for prom1 is moved to the callback queue.
The event loop detects this but doesn't push it to the call stack yet, as getdataAwait is still waiting for prom2.
After 5 more seconds (10 seconds total), the setTimeout callback for prom2 is moved to the callback queue.
The event loop pushes the prom2 callback to the call stack.
prom2 is resolved with "Promise 2 Resolved Value!!".


Resuming getdataAwait:

The getdataAwait function is resumed, pushed back onto the call stack.
val1 is assigned the resolved value of prom2.
The next three console.log statements are executed.


Second await prom1:

await prom1 is encountered. However, prom1 has already resolved (5 seconds ago).
The resolved value of prom1 is immediately available.

 
Completing getdataAwait:

val2 is immediately assigned the resolved value of prom1.
The final two console.log statements are executed.
getdataAwait completes and is popped off the stack. */