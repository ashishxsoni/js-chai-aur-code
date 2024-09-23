
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sirf aise function likhne se function execute nho hoga par iska mtlb h ki hm yaha 
// function ko refer kr rhe hai bina small brackets k yh hm yaha is function ko refer kar rhe hai
// sayMyName


// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username) {
    //handling case when user did not enter anything here 

    // if(username ==== undefined){
    //     console.log("PLease enter a username");
    //     return
    // }
    //or 
    //kyunki in JS "" and undefined means false 
    //so when user did not give any argument then username here = undefined so 
    // basically here !undefined = true or  say !username = true
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}





function loginUserMessage(username = "sam") {
    // now this function is having a by default value for argument when it is null 
    // so in this functon will never go into this undefined if block
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));