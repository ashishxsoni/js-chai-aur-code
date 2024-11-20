/* asasa */
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    },
    sayGreet:function(){
        console.log("User say GoodMorning");
    },
    sayHello(){
        console.log("User say hello");
    }

}
user.sayHello();
user.sayGreet();