//USING PROMISE

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}

// Using .then() and .catch()
fetchData()
    .then(data => {
        console.log(data);
        return "Next task";
    })
    .then(next => {
        console.log(next);
    })
    .catch(error => {
        console.error("Error:", error);
    });


//USING ASYNC

async function fetchDataAsync() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 1000);
        });
        console.log(data);

        const next = "Next task";
        console.log(next);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();
