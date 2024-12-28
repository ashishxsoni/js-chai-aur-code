console.log("hello Global");
function placeOrder(shouldResolve) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("Ge");
            if (shouldResolve) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 3000); // Simulates a 3-second delay
    });
}
const mypromise= placeOrder(true);
console.log("Bye Global");

//See the PDF Fo This