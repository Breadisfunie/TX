let reportUsername;
let reason;
termcount = localStorage.getItem('termcount');
termcount = parseInt(termcount);

if (termcount == null || NaN) {
    document.getElementById("termcountdisplay").textContent = termcount;
} else {
    document.getElementById("termcountdisplay").textContent = 0;
    termcount = 0;
}

document.getElementById("reportButton").onclick = async function(){ 
    //Sends the report
    reportUsername = document.getElementById("reportUsername").value;
    reason = document.getElementById("reason").value;
    //Checks if its blank
    if (reportUsername == "" || reason == "")  {
        console.log("invalid user")
    } else {
        console.log("Username is " + reportUsername + " reason is " + reason);
        //Tells the user that the report went though
        document.getElementById("reportButton").textContent = "User reported"
        termcount++; //adds to the term count
        console.log("termcount is " + termcount)
        //Deletes the text afterwards
        document.getElementById("reportUsername").value = "";
        document.getElementById("reason").value = "";
        //Sets the report button back lol
        document.getElementById("termcountdisplay").textContent = termcount;
        localStorage.setItem("termcount", termcount);
        await sleep(5);
        document.getElementById("reportButton").textContent = "Report"
    }
}

//Makes a sleep fuction with super pro code (=
async function sleep(seconds) {
    return new Promise((resolve) =>  setTimeout(resolve, seconds * 1000));
  }
