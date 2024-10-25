//this is the project on making the ice cream
//source Free code camp org
//Example of CALL BACK HELL 

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


let stocks =
{
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};
//way to acccess  these
// console.log(stocks.Fruits[2]);


let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000);

    // call_production(); 
    // agr hm ise yaha likhnege to yh set time wala call hone se phle 
    // call ho jayega jo ki wrong hai kyunki phle fruit select hoga fir uske baad m ham production start karenge 
    //to agr hme ise immediate fruit select hone k baad m call karana hai to uske liye ham is call prod ko \
    // set time wale func k andr call kar denge 
};

//<============ THIS IS CALLED CALLBACK HELL ===================>

let production = () => {
    //start production
    setTimeout(() => {
        console.log("production has started");
        //cut the fruit for production
        setTimeout(() => {
            console.log("the fruit has been chopped");
            //add water and ice
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                //satrt machine
                setTimeout(() => {
                    console.log("the Machine has started");
                    //select container
                    setTimeout(() => {
                        console.log(`ice cream was placed on ${stocks.holder[0]} `);

                        //pick th toppings
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            //serve ice cream
                            setTimeout(() => {
                                console.log(`Serve the icecream`);
                            }, 2000);
                        }, 3000);
                    }, 2000);

                }, 1000);
            }, 1000);
        }, 2000);

    }, 1000);
}

order(0, production);