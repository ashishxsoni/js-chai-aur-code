class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        //Yaha super ki theory aise h ki super parent constructor se apne walae ka kaam karata hai ise aise smjh skte 
        // h ki ham yaha jo parameter s username pass hoke aaya hai uske value ko parent ke constr se fill kara rahe hai 
        // like ki  wo method jisme single yh elm ja sakta hai parent me wo use hoga pr kaam karega is children k liye 
        super(username)
        // constructor.call(this , username); iska mtlb yh hai par yh allowed nhi hai aise constructor par lagana
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);
console.log(chai === User);