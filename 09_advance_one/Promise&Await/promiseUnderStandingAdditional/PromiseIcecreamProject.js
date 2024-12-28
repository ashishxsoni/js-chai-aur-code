///this is the project on making the ice cream
//source Free code camp org
//Resolving the problem of CALL BACK HELL with Promises

// make a ice cream now using call back functions
// these are stepss to follow
//method ======> time to execute that
// 1. Place Order  : 2
// 2. cut the fruit     :2
// 3. add water and ice      :1
// 4. start the machine :1
// 5. select the container :2
// 6. select Toppings :3
// 7. Serve ice cream :2
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  placeOrder(0,2000)
    .then((res) => cutFruit(res))
    .then((res) => addWaterIce(res))
    .then((res) => startMachine(res))
    .then((res) => selectContainer(res))
    .then((res) => pickToping(res))
    .then((res) => serveIcecream(res))
    .then((res) => console.log(res))
    .catch((error) => {
      console.error(error); // Output: Step 1 failed!
    })
    .finally(()=>{
        console.log("Day ended , Shop is Closed")
    });
  
  function placeOrder(orderno , time) {
    return new Promise((resolve, reject) => {
      if (orderno < stocks.Fruits.length) {
        console.log(`Item has been Selected ${stocks.Fruits[orderno]}`);
           setTimeout(() => {
          console.log("production has started");
          resolve(2000); // Pass the timeout value to the next step
        }, time);
      } else {
        reject("Sorry We're Currently Unavailable!");
      }
    });
  }
  
  function cutFruit(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("The fruit has been chopped");
        resolve(1000); // Pass the updated time to the next step (add 2 seconds)
      }, time);
    });
  }
  
  function addWaterIce(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Water and ice were added");
        resolve(1000); // Add 1 second to the previous time
      }, time);
    });
  }
  
  function startMachine(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("The machine has started");
        resolve(2000); // Add 1 second to the previous time
      }, time);
    });
  }
  
  function selectContainer(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Ice cream was placed in ${stocks.holder[0]}`);
        resolve(3000); // Add 2 seconds to the previous time
      }, time);
    });
  }
  
  function pickToping(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${stocks.toppings[0]} was added as topping`);
        resolve(2000); // Add 3 seconds to the previous time
      }, time);
    });
  }
  
  function serveIcecream(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Serve the ice cream");
      }, time);
    });
  }
  