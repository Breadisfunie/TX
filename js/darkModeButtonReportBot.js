let darkmodeactive;


document.getElementById("darkModeButton").onclick = async function(){
    if (darkmodeactive == true)
        {
         //Runs if dark mode it active // makes it light again
         document.getElementById("darkModeButton").textContent = "dark_mode";
         document.getElementById("darkModeButton").style.color = "black";
         document.getElementById("body").style.backgroundColor = "white";
         document.getElementById("title").style.color = "black";
         document.getElementById("Menu-island").style.backgroundColor = "white";
         document.getElementById("Menu-island").style.border = "1px solid black";
         document.getElementById("Menu-island-button-1").style.color = "black";
         document.getElementById("Menu-island-button-2").style.color = "black";
         document.getElementById("Menu-island-button-3").style.color = "black";
         document.getElementById("Menu-island-button-4").style.color = "black";
         document.getElementById("Menu-island-button-5").style.color = "black";
         document.getElementById("Menu-island-button-6").style.color = "black";
         document.getElementById("Menu-island-button-7").style.color = "black";
         document.getElementById("report-form-background").style.backgroundColor = "white";
         document.getElementById("report-form-background").style.border = "1px solid black";
         document.getElementById("report-label-1").style.color = "black";
         document.getElementById("report-label-2").style.color = "black";
         document.getElementById("termcountdisplay").style.color = "black";
         document.getElementById("termtext").style.color = "black";
         document.getElementById("reportButton").style.color = "black";
         document.getElementById("reportButton").style.backgroundColor = "white";
         document.getElementById("reportButton").style.border = "1px solid black";
         document.getElementById("reportUsername").style.color = "black";
         document.getElementById("reportUsername").style.backgroundColor = "white";
         document.getElementById("reportUsername").style.border = "1px solid black";
         document.getElementById("reason").style.color = "black";
         document.getElementById("reason").style.backgroundColor = "white";
         document.getElementById("reason").style.border = "1px solid black";
         darkmodeactive = false; //makes it false lol  
        }  else { // runs if light mode is active// why do i make these comments when no one reads them send me a dm if u read this lol
         //Runs if light mode it active // makes it dark again
         document.getElementById("darkModeButton").textContent = "light_mode";
         document.getElementById("darkModeButton").style.color = "white";
         document.getElementById("body").style.backgroundColor = "#2d2c2c";
         document.getElementById("title").style.color = "white";
         document.getElementById("Menu-island").style.backgroundColor = "#252525";
         document.getElementById("Menu-island").style.border = "none";
         document.getElementById("Menu-island-button-1").style.color = "white";
         document.getElementById("Menu-island-button-2").style.color = "white";
         document.getElementById("Menu-island-button-3").style.color = "white";
         document.getElementById("Menu-island-button-4").style.color = "white";
         document.getElementById("Menu-island-button-5").style.color = "white";
         document.getElementById("Menu-island-button-6").style.color = "white";
         document.getElementById("Menu-island-button-7").style.color = "white";
         document.getElementById("report-form-background").style.backgroundColor = "#171717";
         document.getElementById("report-form-background").style.border = "none";
         document.getElementById("report-label-1").style.color = "white";
         document.getElementById("report-label-2").style.color = "white";
         document.getElementById("termcountdisplay").style.color = "white";
         document.getElementById("termtext").style.color = "white";
         document.getElementById("reportButton").style.color = "white";
         document.getElementById("reportButton").style.backgroundColor = "#2e2e2e";
         document.getElementById("reportButton").style.border = "none";
         document.getElementById("reportUsername").style.color = "white";
         document.getElementById("reportUsername").style.backgroundColor = "#2e2e2e";
         document.getElementById("reportUsername").style.border = "none";
         document.getElementById("reason").style.color = "white";
         document.getElementById("reason").style.backgroundColor = "#2e2e2e";
         document.getElementById("reason").style.border = "none";
         darkmodeactive = true;
    }
}

