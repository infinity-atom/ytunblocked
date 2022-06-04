function showMenu() {
    var menu = document.getElementById("menuObj");
    
    if(menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

//base64 funcs: btoa, atob