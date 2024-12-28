/* To simplify the code and avoid nested callbacks or .then() chains: Without await, you would need to use .then() to handle the Promise resolution, which could lead to nested callback functions. await makes the code look more like synchronous code, improving readability.

Example with .then(): */
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    //THE SAME CODE WOTH ASYNC


async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();
