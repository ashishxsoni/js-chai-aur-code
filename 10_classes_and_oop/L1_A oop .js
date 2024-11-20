class User {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        this.greeting = function () { // yha yh this lagana hi hoga yh greeting ek variable hai jisme yh function store kara rha hai ham
            console.log(`Welcome ${this.username}`);

        };
        //yh constructor k  andr bhi allowed nahi hai 
        // myHello = function () { 
        //     //yh initialise kar rhe hai
        //     console.log(`My Hello User ${this.username}`);
    
        // }
        //we can declare like this but this will not work synattically right hai yhh
    //  const makeChai =  function () {
    //     console.log(`Sir ${this.username} Chai is making`);
    //     return 10;
    // } 
    
    //This is also not Working , Syntactically right hai but not  workable 
    //   function Chai(){ 
    // // ChaiCode :function (){ //this is not allowed in constructor also
    //     console.log(`Code  ${this.username} Chai is making`);
    //     return 10;
    // }
    
        return this; // it's optional here 
//Constructor parts ends Here
    }

    sayHello = function () { //kyunki yh ek bina datatype const , var , let wala ek variable me store kar rhe hai ham 
        //yh initialise kar rhe hai
        console.log(`Hello ${this.username}`);

    }
    
    //class me ham aise functions bana skte hai because class k pass khud k hone chahiye 
    ChaiCode(){
        console.log(`Chai and Code  ${this.username} Chai is making`);
        return 10;
    }

    //this is not allowed in class declarations using let , var , const to declare a class member
    // const makeChai =  function () {
    //     console.log(`Sir ${this.username} Chai is making`);
    //     return 10;
    // } 
 
    // function ChaiCode(){ // not allowed 
    // ChaiCode :function (){ //User.ChaiCode: () => any // not allowed
    //     console.log(`Code  ${this.username} Chai is making`);
    //     return 10;
    // }

}



 /* this is an error kyunki jab bhi ham object ko class constructror se create karenge to wo bina new keyword k nhi 
 ho skta  hai possible nhi hai khyunki constructror new se hi bind hota hai */
 // const u1 = User("Ashish" , "1" ,true);
// const u1 = new User("Ashish" , "1" ,true);
// u1.sayHello();



/* ====>> QUESTION  
jab new se creatio karte h to hm dekhte h ki yaha par yh sirf greeting rkhta hai ab to to yh sayHello bhi nhi rkhta hai

in short new se creatuin par bas wo jo jo this k through bne hai usko ache se dikhata hai  */
const u1 = new User("Ashish" , "1" ,true);
const u2 = new User("Soni" , "2" ,true);
// console.log(u1);


// u1.makeChai();
// console.log(typeof u1.makeChai);
// console.log(u1.makeChai);

// u1.Chai(); //chai is not a function
// console.log(typeof u1.Chai);
// console.log(u1.Chai);


// u1.sayHello(); 
// console.log(typeof u1.sayHello);
// console.log(u1.sayHello);


// u1.ChaiCode();
// console.log(typeof u1.ChaiCode);
// console.log(u1.ChaiCode);
// console.log(u1.ChaiCode());



// console.log(u1.greeting);
// u1.greeting();



/*  
 in short 
 ham without new class bana hinahi sakte hai
 hm sirf constructor se this se hi varible create karke usme kuch bhi value function store kar dete hai
 ans constructor k bahar hm bas function bana skte hai without function chaiCode() me function hatakr direct bana skte hai  
in constructro ham usme const function etc s bana skte hai syntatically right hota hai pr working nhi hota hai
dusre side yh constructr k bhr function let , const use karna syntatically wrong hai 
 */
