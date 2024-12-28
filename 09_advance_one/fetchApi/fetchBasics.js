// Example
async function fetchData() {
    const data = await fetch('https://api.example.com/data'); // Wait for the promise to resolve
    const json = await data.json(); // Wait for the JSON parsing
    console.log(json);
}

fetchData();

//another way
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();
