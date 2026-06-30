const timer = document.getElementById("timer");

function displayTime() {
    timer.textContent = new Date().toString();
}

displayTime();

setInterval(displayTime, 1000);