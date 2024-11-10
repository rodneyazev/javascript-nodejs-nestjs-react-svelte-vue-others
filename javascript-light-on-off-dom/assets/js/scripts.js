const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

button.addEventListener("click", function (){
    console.log("cliquei");

    const lightMode = "Light Mode";
    const darkMode = "Dark Mode"
    button.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
});

console.log(body);