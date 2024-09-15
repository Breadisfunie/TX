let darkmodeactive = true;

document.getElementById("darkModeButton").onclick = async function(){
 if (darkmodeactive == true)
    {
     //Runs if dark mode it active // makes it light again
     document.getElementById("darkModeButton").textContent = "dark_mode";
     document.getElementById("darkModeButton").style.color = "black";
     document.getElementById("body").style.backgroundColor = "white";
     document.getElementById("title").style.color = "black";
     document.getElementById("home-selector-title").style.color = "black";
     document.getElementById("Menu-island").style.backgroundColor = "white";
     document.getElementById("Menu-island").style.border = "1px solid black";
     document.getElementById("Menu-island-button-1").style.color = "black";
     document.getElementById("Menu-island-button-2").style.color = "black";
     document.getElementById("Menu-island-button-3").style.color = "black";
     document.getElementById("Menu-island-button-4").style.color = "black";
     document.getElementById("Menu-island-button-5").style.color = "black";
     document.getElementById("Menu-island-button-6").style.color = "black";
     document.getElementById("Menu-island-button-7").style.color = "black";
     document.getElementById("Menu-island-button-8").style.color = "black";
     document.getElementById("home-selector").style.backgroundColor = "white";
     document.getElementById("home-selector").style.border = "1px solid black";
     document.getElementById("home-card-1").style.backgroundColor = "white";
     document.getElementById("home-card-2").style.backgroundColor = "white";
     document.getElementById("home-card-3").style.backgroundColor = "white";
     document.getElementById("home-card-1").style.border = "1px solid black";
     document.getElementById("home-card-2").style.border = "1px solid black";
     document.getElementById("home-card-3").style.border = "1px solid black";
     document.getElementById("card-text-1").style.color = "black";
     document.getElementById("card-text-2").style.color = "black";
     document.getElementById("card-text-3").style.color = "black";
     document.getElementById("Report-bot-image").src="images/Report-bot-image-light-mode.png"
     document.getElementById("Pred-finder-image").src="images/Pred finder light mode.png"
     document.getElementById("How-to-term-image").src="images/How to report light mode.png"
     darkmodeactive = false;
    }  else {
     //Runs if light mode it active // makes it dark again
     document.getElementById("darkModeButton").textContent = "light_mode";
     document.getElementById("darkModeButton").style.color = "white";
     document.getElementById("body").style.backgroundColor = "#2d2c2c";
     document.getElementById("title").style.color = "white";
     document.getElementById("home-selector-title").style.color = "white";
     document.getElementById("Menu-island").style.backgroundColor = "#252525";
     document.getElementById("Menu-island").style.border = "none";
     document.getElementById("Menu-island-button-1").style.color = "white";
     document.getElementById("Menu-island-button-2").style.color = "white";
     document.getElementById("Menu-island-button-3").style.color = "white";
     document.getElementById("Menu-island-button-4").style.color = "white";
     document.getElementById("Menu-island-button-5").style.color = "white";
     document.getElementById("Menu-island-button-6").style.color = "white";
     document.getElementById("Menu-island-button-7").style.color = "white";
     document.getElementById("Menu-island-button-8").style.color = "white";
     document.getElementById("home-selector").style.backgroundColor = "#434242";
     document.getElementById("home-selector").style.border = "none";
     document.getElementById("home-card-1").style.backgroundColor = "#383838";
     document.getElementById("home-card-2").style.backgroundColor = "#383838";
     document.getElementById("home-card-3").style.backgroundColor = "#383838";
     document.getElementById("home-card-1").style.border = "none";
     document.getElementById("home-card-2").style.border = "none";
     document.getElementById("home-card-3").style.border = "none";
     document.getElementById("card-text-1").style.color = "white";
     document.getElementById("card-text-2").style.color = "white";
     document.getElementById("card-text-3").style.color = "white";
     document.getElementById("Report-bot-image").src="images/Report-bot-image.png"
     document.getElementById("Pred-finder-image").src="images/Pred finder.png"
     document.getElementById("How-to-term-image").src="images/How to report.png"
     darkmodeactive = true;
    }
}
