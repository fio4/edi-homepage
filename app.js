var icon = document.getElementById("icon-menu");
var menu = document.getElementById("menu");
var scroll = document.getElementById("scroll");


icon.onclick = function(){
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        scroll.style.overflow = "auto";
        
      } else {
        menu.style.display = "flex";
        scroll.style.overflow = "hidden";
        
      }
    }
