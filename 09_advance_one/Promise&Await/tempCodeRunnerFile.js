async function getdataAwait() {
    //js engine await till promise to be consumed 
    console.log(`Funct Await starting cur time ${currentTime()}`);

    const val1 = await prom1; // WITH 5 SECONDS DELAY
    console.log(`Namaste java Script 1 ${currentTime()}`);
    console.log(val1);
    // console.log(`  completion after val1  ${currentTime()}`);

    const val2 = await fetchData(10000);//WITH 10 SECONDS DELAY
    console.log(`Namaste java Script 2 ${currentTime()}`);
    console.log(val2);

    const val3 = await fetchData(15000); // 15 sec delay
    console.log(`Namaste java Script 3 ${currentTime()}`);
    console.log(val3);
}