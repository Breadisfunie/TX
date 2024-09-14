let darkmodeactive = true;

document.getElementById("darkModeButton").onclick = async function(){
 if (darkmodeactive == true)
    {
     //Runs if dark mode it active // makes it light again
     document.getElementById("darkModeButton").textContent = "dark_mode";
     document.getElementById("darkModeButton").style.color = "black";
     document.getElementById("body").style.backgroundColor = "white";
     document.getElementById("text").style.color = "black";
     darkmodeactive = false;
    }  else {
     //Runs if light mode it active // makes it dark again
     document.getElementById("darkModeButton").textContent = "light_mode";
     document.getElementById("darkModeButton").style.color = "white";
     document.getElementById("body").style.backgroundColor = "#2d2c2c";
     document.getElementById("text").style.color = "white";
     darkmodeactive = true;
    }
}
