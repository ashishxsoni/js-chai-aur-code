const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //we can use like this also upate bhi kar skte hai 
let accountState; //iski value undefind hai

// accountId = 2 // not allowed const k change nhi kar skte hai


accountEmail = "hc@hc.com";
accountPassword = "21212121"
accountCity = "Bengaluru" //change bhi kar skte hai
accountNo = 2 //change bhi kar skte hai

console.log(accountId);
console.log(typeof (accountCity));
console.log(typeof (accountNo));

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//use to dsplay ata into table multiple vatibles in just one go 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])