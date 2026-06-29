function updateTimer() {
    
    var now = new Date();

   
    document.getElementById("timer").textContent = now.toLocaleString();
}


updateTimer();


setInterval(updateTimer, 1000);//your JS code here. If required.
