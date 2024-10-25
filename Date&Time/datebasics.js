const currentDate = new Date();  // Creates a Date object representing the current date and time
console.log(currentDate);        // Outputs something like: "Wed Oct 18 2024 15:45:30 GMT+0000 (UTC)"

// Getting specific parts of the date:
const date = new Date();
console.log(date.getFullYear());    // Outputs the year, e.g., 2024
console.log(date.getMonth());       // Outputs the month (0-based index), e.g., 9 for October
console.log(date.getDate());        // Outputs the day of the month, e.g., 18

/* Date.now()
Returns a timestamp, which is the number of milliseconds that have passed since January 1, 1970(also called the Unix Epoch).
It returns a number(the current time in milliseconds). */

const timestamp = Date.now();  // Returns the current time in milliseconds since Jan 1, 1970
console.log(timestamp);        // Outputs something like: 1726753530000


/*Purpose: You use Date.now() when you need a simple numeric timestamp for things like measuring 
time intervals or performance tracking (e.g., calculating how long a task took to complete). */

const startTime = Date.now();  // Record the current time

// Perform some operation (example)
for (let i = 0; i < 1000000; i++) { /* Some heavy task */ }

const endTime = Date.now();    // Record the end time
const duration = endTime - startTime;  // Calculate the duration in milliseconds
console.log(`Operation took ${duration} milliseconds`);
