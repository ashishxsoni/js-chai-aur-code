function fetchData(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data fetched after ${time / 1000} seconds`);
        }, time);
    });
}

// With Promises:
fetchData(3000)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);  // Handle error here
    });

// With Async/Await:
async function getDataWithErrors() {
    try {
        const data = await fetchData(3000);
        console.log(data);
    } catch (error) {
        console.error(error);  // Handle error here
    }
}

getDataWithErrors();
