// ES6
//See oops L1 A for More
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    //class me hme yaha function lganae ki jarurrat nahi padti hai  jb function create karte hai ek class k liye to 
    // hm aise karte hai 
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
//See oops L1 B for More
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());