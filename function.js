function message() {
    alert("Ninja was liked!");
}

function login(element) {
    if (element.innerText == "login") {
        element.innerText = "logout";
    } else {
        element.innerText = "login";

    } 
    
}

function hide(element) {
    element.remove();
}