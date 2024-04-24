const timerElement = document.getElementById("setTimer");
const startElement = document.getElementById("botonIniciar");
const timerStringElement = document.getElementById("timer-string");

let isCountDownRunning = false;

function startCountdown() {
    let time = parseInt(timerElement.value);
    let interval = setInterval(() => {
        if (time > 0) {
            timerStringElement.textContent = time;
            console.log(time);
            startElement.setAttribute("disabled", "")
            time--;
        } else {
            alert("Tiempo terminado");
            clearInterval(interval);
            startElement.removeAttribute("disabled");
        }
    }, 1000);
}

function pauseCountdown() {
    timerStringElement.textContent
}

startElement.addEventListener("click", startCountdown);
startElement.addEventListener("click", pauseCountdown)