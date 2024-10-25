// Dates

let myDate = new Date()
// console.log(myDate.toString()); //day month date year time (24hr) GMT local(india)
// console.log(myDate.toDateString()); //day month date year
// console.log(myDate.toLocaleString()); //dd//mm/yyyy time(12 hr format)
// console.log(typeof myDate); 


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());
myCreatedDate = new Date("14-01-2023")
console.log(myCreatedDate.toLocaleString()); //invalid date 
myCreatedDate = new Date("14-00-2023")
console.log(myCreatedDate.toLocaleString()); //invalid date 


myCreatedDate = new Date("01-14-2023") //mm- dd -yy m likha hai par show hame dd-mm-yy me hoga 
console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp); // yh miliseconds m return karega
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // 0 based indexing hoti hai 
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})
console.log("======>>>>>")


//to take the current time
let time = new Date();
console.log(time.toLocaleTimeString());




