// yaha yh Object.getOwnPropertyDescriptor(obj , prop) // is used to check in inbuilt properties of a object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // math jo pura module hai usme Pi ek key hai uski value 


// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5 // we can't change the values here for this as iski property enumerable false hai yaha and writable bhi
// never changeable 
// console.log(Math.PI);

const chai = {  
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/* kyunki abhi hmne property Name ka define kiya hai to baki sb to normal hi hai isiliye yh bas name k sath yh own defined rules follow karega 
agr hm chahte h ki yh pura object not iterable ho ya not changeable ho to uske liye hame yaha par object ki har ek property pr own
propertydefined karni hogi */

Object.defineProperty(chai, 'name', {
    //writable: false, // ise false karne se fir hm iski values change nahi kar sakte hai never changeable 
    enumerable: false, // ise false karne se fir hm is pr loop iteraate nhi kar skte hai  
    // enumerable: true, 
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) { // yh direct chai pr lagana yani object par lagana kkuch cases me iterable hota hai 
    //har case m nhi hota iterable to use is type se iterable banane k liye ham yaha niche wala method use karte hai
for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') { //yh isiliye kifunction iterable nahi hota hai kyunki condition check bina 
        //error dega
        
        console.log(`${key} : ${value}`); // enumerable hmne name ka false kiya hai whole object konot iterable banane k liye 
        // hme chai par false karna hoga enumerable ko 
    }
}