// Declaring initial variables
const startEl = document.querySelector("#start-btn");
const stopEL = document.querySelector("#stop-btn");
const resetEL = document.querySelector("#reset-btn");
const display = document.querySelector("#clock");
let tier = null;
let startTime = 0;
let elaspeTime = 0;
let isRunning = false

//Add event listeners for all 3 buttons
startEl.addEventListener("click",start);
stopEL.addEventListener("click",stop);
resetEL.addEventListener("click",reset);

function start() {
    if (!isRunning) {
        startTime = Date.now() - elaspeTime;
        timer = setInterval(updateDisplay,10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elaspeTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elaspeTime = 0;
    startTime = 0;
    display.textContent = "00:00:00:00";
    isRunning = false;
}

function updateDisplay() {
    const currentTime = Date.now();
    elaspeTime = currentTime -startTime;

    let hours = Math.floor(elaspeTime / (1000 * 60 * 60));
    let minute = Math.floor(elaspeTime / (1000 * 60) % 60);
    let second = Math.floor(elaspeTime / 1000 % 60);
    let milisecond = Math.floor(elaspeTime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minute = String(minute).padStart(2,0);
    second = String(second).padStart(2,0);
    milisecond = String(milisecond).padStart(2,0);

    display.textContent = `${hours}:${minute}:${second}:${milisecond}`
}

