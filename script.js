let firstInput = document.getElementById("firstColor");
let secondInput = document.getElementById("secondColor");
let gradient = document.getElementById("gradiant");
let colorsInfo = document.getElementById("info")


function setGradient(){
    gradient.style.background = "linear-gradient(to right, " + firstInput.value + ", " + secondInput.value + ")";
    colorsInfo.textContent = gradient.style.background + ';';
}


firstInput.addEventListener("input", setGradient)
secondInput.addEventListener("input", setGradient)