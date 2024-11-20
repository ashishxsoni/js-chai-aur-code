function SetUsername(username){
    //complex DB calls
    console.log(`Set UserName thisusn ${this.username} usn ${username}` );
    this.username = username
    console.log("called");
}
//we're creating user here suppose this is constructor function
function createUser(username, email, password){
     //basically hamra goal yh h ki hme yaha is me jo bhi username aaya h use dusre func 
    //setUsern. se uska username set karayae to use liye hi hai yh 
    // SetUsername.(username) 
    /* agr ham aise karate hai to isse yaha ka username jo user de rha hai suppose tha 
    ashq and wo yahaa se setusrnm func m pass kar diya par us func ko dekhe to wo ek constrctr func hai to wo khud uske 
    pass ek wha par username hai variable jisme this.username k through wo wha par ashq rkh deta hai usme value 
    but yh to hmara targeet nahi tha badically hamra  target tha  ki hmara yh creatusernme wale ka jo username hai wo 
    dusre funcion ko call kare aur usme jake wha se set ho yh target tha to yh hm yaha Call se karte hai  */
    
    console.log(`CreateUserName Before thisusn ${this.username} usn ${username}` );
    SetUsername.call(this, username)
   

    console.log(`CreateUserName after thisusn ${this.username} usn ${username}` );

    /* call yaha se jab is syntax m pass karte h to hm batate h ki setusrnm function ki bhai tum apna this.username nhi 
    karoge ag tum jis funct yani create user wale func n call kiya h to uske this ko refer kroge usek accoridng yani 
    uski values ko ab tum this s changes karoge apne andr  */


   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);