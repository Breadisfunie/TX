let darkmodeactive;


document.getElementById("darkModeButton").onclick = async function(){
    if (darkmodeactive == true || null)
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
         document.getElementById("news-tray").style.backgroundColor = "white";
         document.getElementById("news-tray").style.border = "1px solid black";
         document.getElementById("news-holder").style.backgroundColor = "white";
         document.getElementById("news-holder").style.border = "1px solid black";
         document.getElementById("news-title").style.color = "black";
         document.getElementById("news-text").style.color = "black";
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
         document.getElementById("news-tray").style.backgroundColor = "#373737";
         document.getElementById("news-tray").style.border = "none";
         document.getElementById("news-holder").style.backgroundColor = "#2d2d2d";
         document.getElementById("news-holder").style.border = "none";
         document.getElementById("news-title").style.color = "white";
         document.getElementById("news-text").style.color = "white";
         darkmodeactive = true;
    }
}

//how am i supost to add cookies??????
//wait i think i can add cookies with ANOTHER JS SCRIPT
//no i can just directly bake it in with the script lol