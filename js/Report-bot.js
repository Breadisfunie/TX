let reportUsername;
let reason;
let termcount = document.cookie(0);

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
        document.cookie + 1;
        //Deletes the text afterwards
        document.getElementById("reportUsername").value = "";
        document.getElementById("reason").value = "";
        //Sets the report button back lol
        await sleep(5);
        document.getElementById("reportButton").textContent = "Report"
    }
}

//Weed cola makes me sleepy
async function sleep(seconds) {
    return new Promise((resolve) =>  setTimeout(resolve, seconds * 1000));
  }
