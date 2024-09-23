//var c = 300
//var ka scope out of the scope of function bhi hota hai hai bhale hi agr 
// hm agr var ko function k andr bhi declare kar denge  to bhi wo accessible hai us function k scope k bahr bhi
let a = 300
if (true) {
    let a = 10
    //here the value of a is prioritise by local block of A 
    const b = 20
    // var c = 300 // if we define var c here then it is accessible out of this scope 
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function (num) {
    return num + 2
}
