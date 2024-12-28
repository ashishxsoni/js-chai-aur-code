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

let isShopOpen = true;

function makeIceCream(time, work) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work()); 
        
       /*  Executes the passed work function after 'time' milliseconds
        work is an call function it execute after the relative delay completes and then after the
        execution of work the reolve will pass the return type of work which is undefined as the console parts exectues and return nothing
        so there is no return type for work function hence the resolve passes with nothing behind the scene
 */
      }, time);
    } else {
      reject("Sorry We're Currently Unavailable!");
    }
  });
}

//both are Same just make things clearer here
function makeIceCreamFunc(time, work) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        work(); // Perform the work (e.g., log a message)
        resolve(); // Resolve the promise after completing the work
      }, time); // Delay by 'time' milliseconds
    } else {
      reject("Sorry, the shop is closed!");
    }
  });
}

// In the provided code, the resolve function is not directly returning anything to the promise caller; it is signaling that the promise is resolved and optionally provides a value or result. Here's a detailed breakdown:

// What resolve Does
// When you call resolve(work()), it does two things:

// Marks the promise as fulfilled (resolved).
// Passes the value or result of the work() function to the next .then() in the chain.

makeIceCream(0, () => console.log(`Item has been Selected ${stocks.Fruits[0]}`))
  .then(() => { //because resolves did not return anything hem=nce we take no arg call back here 
    return makeIceCream(2000, () => {
      console.log("Production has started");
    });
  })
  .then(() => {
    return makeIceCream(2000, () => {
      console.log("The fruit has been chopped");
    });
  })
  .then(() => {
    return makeIceCream(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    });
  })
  .then(() => {
    return makeIceCream(1000, () => {
      console.log("The Machine has started");
    });
  })
  .then(() => {
    return makeIceCream(2000, () => {
      console.log(`Ice cream was placed on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return makeIceCream(3000, () => {
      console.log(`${stocks.toppings[0]} was added as toppings`);
    });
  })
  .then(() => {
    return makeIceCream(2000, () => {
      console.log("Serve the ice cream");
    });
  })
  .catch((error) => {
    console.error(error); // Output error if any step fails
  })
  .finally(() => {
    console.log("Day ended, Shop is Closed");
  });
