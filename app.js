function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        display.style.color = "#EF443B"; // Apply the color directly through JavaScript
        display.style.fontSize = "3rem"; // Apply the font size directly through JavaScript

        if (--timer < 0) {
            timer = duration; // Reset the timer if you want it to restart when it reaches 0
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5, // Changed from 10 minutes to 5 minutes
        display = document.querySelector('.counter');
    startCountdown(fiveMinutes, display);
};
