// Immediately Invoked Function Expressions (IIFE)
//normal function
// function chai() {

//     console.log(`DB CONNECTED`);
// }

// arroe.js m hmne sikha tha ki ise ham yaha () k andr ek block  jata hai 
// to yaha basically ho kaya rha h ki hm same function ko call kar rhe hai aur iske just baad ()
// laga dene se wo yaha immedidaly invoke ho jata hai fn sign aise hai 
// chai() is type ka hai yaha chai ko (fn sign ) se refer kra hai  yh () ka batata hai immediate invoke


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED function`);
})(); //iife used to make function imediatley invoked 
//iske last me ";" use kiya h kyunki ek sath do iife function use karne k liye 
//phle fn k end m just ; hona chahiye 


//using arrow unnamed iife
(() => {
    console.log('DB CONNECTED Arrow ');
})();

//yaha jaise ek functio bana hua hai chai(argumented) wala 
//to waise function ka iife bnnae k liye hm aise banante hai 
// yaha parameter jo hai wo name hai aur us function m jo value pass ho rhi h wo 
// 'hitesh' hai jaise chai('hitesh") m karte ham 


//using arrow unnamed iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

