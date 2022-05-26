function showMenu() {
    var menu = document.getElementById("menuObj");
    
    if(menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function getParam(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var userResponse = "none";

function askPass() {
    userResponse = prompt("Enter Password");
    if (userResponse === "pvplegacy") {
        return true;
    } else {
        askPass();
    }
}

askPass();