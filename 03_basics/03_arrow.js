const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        //this s hm current context o refer karte hai 
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // isse yh pure o print kr rh hai 
    }

}

// user.welcomeMessage()
// user.username = "sam" //update karne se ab value iske cange ho jayegi
// user.welcomeMessage()

console.log(this); //

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "hitesh" })


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()