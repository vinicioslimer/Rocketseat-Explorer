var darkMode = true;
var buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light-mode");


    var mode = darkMode ? 'light mode' : 'dark mode';

    event.currentTarget.querySelector('span').textContent = `${mode} ativado!`;

    darkMode = !darkMode;
});
