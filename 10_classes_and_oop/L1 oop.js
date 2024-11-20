//yh ham yaha par hm object banaya hai 
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     },
//     sayGreet:function(){
//         console.log("User say GoodMorning");
//     },
//     sayHello(){
//         console.log("User say hello");
//     }

// }
// user.sayHello();
// user.sayGreet();


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //yh different context m diff hota hai yha yh node k liye empty aayega pr 
//global (browser) context  m yh window object deta hai 

//<<<<<<==============  =============================  =====================>>>>>>

//see this than below code this is equivalent to below code to make a class
// class User {
//     constructor(username, loginCount, isLoggedIn) {
//         this.username = username;
//         this.loginCount = loginCount;
//         this.isLoggedIn = isLoggedIn;

//         this.greeting = function () { // yha yh this lagana hi hoga yh greeting ek variable hai jisme yh function store kara rha hai ham
//             console.log(`Welcome ${this.username}`);

//         };

//         return this; // it's optional here 
//     }

// sayHello(){
//     console.log("Hello User");
// }
// }

 /* this is an error kyunki jab bhi ham object ko class constructror se create karenge to wo bina new keyword k nhi 
 ho skta  hai possible nhi hai khyunki constructror new se hi bind hota hai */
 
// const u1 = User("Ashish" , "1" ,true);
// const u1 = new User("Ashish" , "1" ,true);
// u1.sayHello();


//this is equivalent to below code here we're making a class 
//this is called Constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username; //supposed this.username is present globally in this class
    this.logCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () { //yh is User class m ek variable me hm store kara rhe hai is function ko jo construct k through bana rha hai 
        //yh initialise kar rhe hai
        console.log(`Welcome ${this.username}`);

    }
     /* NOTE :========>>> */
    // hma yah yh return this optional hai jab new se creation ho const funct ka to hm  likhe ya na likhe yh implicitly define hota hai to bhi return karta hi hai
    return this //optional  hai new se create karenge tab as defined implictly no effect
}

/* CHECK THIS HERE */

// const u1 = User("Ashish" , "1" ,true);
// const u2 = User("soni" , "2" ,true);
console.log(u1);
// console.log(u1.greeting);
// u1.greeting();


// Constructor function more example 
// function Person(name, age) {
//     // Properties of the object
//     this.name = name;
//     this.age = age;

//     // Method inside the constructor
//     this.greet = function () {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
// }



// const person1 = new Person('Alice', 25);
// const person2 = new Person('Bob', 30);

// // Calling the greet method
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

//<<<<<<==============  =============================  =====================>>>>>>

//without using new keyword
//try this without using this keyword in constr funct to yh undefined dega value ko 
const userOne = User("hitesh", 120, true)
console.log(userOne)
//now this will override the value
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne)

// agr ham yaha ek naya user Two banaye aur same way se userOne ko hi print karayenge to yaha
// userTwo ko nhi print karaya h pr userTwo k declareationse usne userone se o values set ki thi unko iverride kar diya bhale hi ham yaha
// userone ko orintkraye par declartion of user2 k baad sab values override ho gyi

//<<<<<<==============  =============================  =====================>>>>>>

// using new keyword

// const usOne = new User("hitesh", 120, true)
// const usTwo = new User("ChaiAurCode", 11, false)
// console.log(usOne);
// console.log(usOne.constructor); //this tells that we have a constructor function of User
//console.log(usTwo);

/* there is difference with using new keyword 
check the notes.md file also */