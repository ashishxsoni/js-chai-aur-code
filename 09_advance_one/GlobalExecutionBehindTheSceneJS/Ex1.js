function myfunc(name) {
    let newName = "Soni";
    return newName + name;
}

let myans;
const name = "Ashish";
const ans = myfunc(name);
console.log(ans);


/* Step 1: Global Execution Context
  - name = "Ashish"
  - myans = undefined
  - myfunc reference (function definition) only refernce jayega pura function ka 

Step 2: myfunc(name) is called:
  - New Execution Context created for myfunc
  - Arguments: name = "Ashish"
  - Local variables: newName = "Soni"
  - Scope Chain: global scope (where name is defined)
  - Call Stack: [myfunc execution context] abhi call stack me yh hai 

Step 3: myfunc execution finishes and returns "SoniAshish"
  - Call Stack: [Global execution context] abhicall stack se wo execute hoke out ho gaya yh aa gaya ab global me 
  
Step 4: Global execution continues with ans = "SoniAshish"
Step 5: Console logs "SoniAshish"
 */