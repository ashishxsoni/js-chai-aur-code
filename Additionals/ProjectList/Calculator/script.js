const display = document.querySelector('#result');
const button = document.querySelectorAll('button');
let answer = "";
let hasError = false;

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btntype = btn.textContent;
        console.log(btntype);

        if (btntype === "C") {
            answer = "";
            display.value = "";
            hasError = false;
        } else if (hasError) {
            return; // Prevent further inputs if there's an error
        } else if (btntype === "=") {
            try {
                // Replace '×' with '*' and '÷' with '/' using regular expressions for fallback
                
               let sanitizedExpression =sanitize(answer);
            
                // console.log(`Sanitized expression: ${sanitizedExpression}`);
                
                // Evaluate the sanitized expression
                const result = eval(sanitizedExpression);
                // console.log(`Expression: ${sanitizedExpression} and Result: ${result}`);
                
                // Show the result on the display
                display.value = `=${result}`;
                
                // Allow chaining calculations
                answer = String(result);
                hasError=true;
            } catch (error) {
                // Handle invalid expressions
                display.value = "Error";
                hasError = true;
            }
        } else {
            // Append the clicked button's value to the answer
            answer += btntype;
            display.value = answer;
            // console.log(`Answer: ${answer} and Display: ${display.value}`);
        }
    });
});
    function sanitize(msg) {
    let arr = Array.from(msg);
    for (let i = 0; i < msg.length; i++) {
        arr[i] = msg.charAt(i) === '×' ? '*' : msg.charAt(i);
    }
    arr = arr.join(""); // Join the array back into a string
    return arr;
}