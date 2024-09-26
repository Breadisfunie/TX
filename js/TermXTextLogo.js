let bruh;

if(bruh == true) {
    document.getElementById("title").textContent = "W";
    await sleep(1);
    document.getElementById("title").textContent = "We";
    await sleep(1);
    document.getElementById("title").textContent = "Wel";
    await sleep(1);
    document.getElementById("title").textContent = "Welc";
    await sleep(1);
    document.getElementById("title").textContent = "Welco";
    await sleep(1);
    document.getElementById("title").textContent = "Welcom";
    await sleep(1);
    document.getElementById("title").textContent = "Welcome";
    await sleep(1);
}


//sleep
async function sleep(seconds) {
    return new Promise((resolve) =>  setTimeout(resolve, seconds * 1000));
}
