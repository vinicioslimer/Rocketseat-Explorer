const randomNumber = Math.round(Math.random() * 10);

var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");
var btnTry = document.querySelector("#btnTry");
var btnReset = document.querySelector("#btnReset");
let attempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function(event) {
    if(event.key === "Enter" && screen1.classList.contains("hide")) {
        handleResetClick(event);
    }
});


// função callback
function handleTryClick(event) {
    event.preventDefault();

    var inputNumber = document.getElementById("inputNumber");

    if(inputNumber.value === "") {
        alert("Digite um número!");
        return;
    }

    if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
        alert("Digite um número entre 0 e 10!");
        return;
    }

    if(Number(inputNumber.value) === randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativas!`;
    }

    inputNumber.value = "";
    attempts++;
}



function handleResetClick() {
    toggleScreen();
    attempts = 1;
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
