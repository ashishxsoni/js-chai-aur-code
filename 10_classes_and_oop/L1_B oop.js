
function User(username, loginCount, isLoggedIn) {
    //jo bhi yaha this k sath leke create krr rhe hai wo as a constructor function se usme bn ja rhi hai property
    this.username = username; //supposed this.username is present globally in this class
    this.logCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () { //yh is User class m ek varible hai  h jise construct k through bana rhe hai aur usme function store hoga yh
        //yh initialise kar rhe hai
        console.log(`Welcome ${this.username}`);

    }
    sayHello = function () { //kyunki yh ek bina datatype const , var , let wala ek variable me store kar rhe hai ham 
        //yh initialise kar rhe hai
        console.log(`Hello ${this.username}`);

    }
    const makeChai =  function () {
        console.log(`Sir ${this.username} Chai is making`);
        return 10;
    }

   function ChaiCode(){
//    ChaiCode:function ( ){ // not allowed label and this type gives warning
        console.log(`Chai And COde ${this.username} Chai is making`);
        return 10;
    }
    

     /* NOTE :========>>> */
    // hma yah yh return this optional hai jab new se creation ho const funct ka to hm  likhe ya na likhe yh implicitly define hota hai to bhi return karta hi hai
    return this //optional  hai new se create karenge tab as defined implictly no effect
}


/* QUESTION 1 without new keyword creation

Bina New k jab create karte h to uske pass bas jo this se create honge wo rhte hai and jo without datatype create karte hai 
wo rhte hai baki same wohi heap memory pr wo literals hote hai to change ho jate hau uniquely objext nahi bnate hai 

bak i yh make chai uske pass nhi rhta hai constructrur function m hm bana to lenge aise pr wo work nhi karega thk se 
*/
// const u1 = User("Ashish" , "1" ,true);
// const u2 = User("soni" , "2" ,true);
// console.log(u1);
// console.log(u1.greeting);
// u1.greeting();
// console.log(u1.makeChai)
// console.log(u1.makeChai()) //yh error dega ki make chai ek function nhi hai basically yh 
// console.log(u1.sayHello)
// u1.sayHello()




/* ====>> QUESTION  2
jab new se creation karte h to hm dekhte h ki yaha par yh sirf greeting rkhta hai ab to to yh sayHello bhi nhi rkhta hai
jo ki literal se create karne par use rkhta hai 
sath hi iske ab yh yaha par yh na to as literal creation jaise yh makeChai bhi nahi rakhta hai 
in short new se creatuin par bas wo jo jo this k through bne hai usko ache se dikhata hai  */
const u1 = new User("Ashish" , "1" ,true);
// const u2 = new User("soni" , "2" ,true);
console.log(u1);
// u1.ChaiCode();
// console.log(typeof u1.ChaiCode);
// console.log(u1.ChaiCode);
// console.log(u1.ChaiCode());

// console.log(u1.greeting);
// u1.greeting();
// console.log(u1.makeChai) //give undefined
// u1.makeChai
// u1.makeChai() //  give error that not a func
// console.log(u1.makeChai()) //yh error dega ki make chai ek function nhi hai basically yh 
console.log(u1.sayHello)
// u1.sayHello()


/* in short new se creation par bas wo jo jo this k through bne hai usko ache se dikhata hai  and Literals k case m yh jo bhi new k alvaa
 bina datatye vale variables m unko bhi this se bind kar deta hai isiliye wo chalte hai  */