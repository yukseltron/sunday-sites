function getCurrentTime() {
    // Get current time
    var now = new Date();

    // Extract hours and minutes
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Add leading zeros if needed
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;

    // Concatenate hours and minutes with a colon
    var currentTime = hours + ':' + minutes;

    return currentTime;
}

function displayCurrentTime() {
    // Get the current time
    var currentTime = getCurrentTime();

    // Get the <p> element with id "clock"
    var clockElement = document.getElementById("clock");

    // Set the inner text of the <p> element to the current time
    clockElement.innerText = currentTime;
}

// Call the displayCurrentTime function initially to set the time
displayCurrentTime();

// Update the time every second
setInterval(displayCurrentTime, 1000);
