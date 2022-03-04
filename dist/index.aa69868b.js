//Set the date we are counitng down to
var countDate = new Date("December 15, 2022 15:37:25").getTime();
//Update th ecount down every second
var interval = setInterval(function() {
    document.getElementById("time-left").textContent = "Time Left";
    //Gate todays date and time
    var today = new Date().getTime();
    //find the distance between now and the count down date
    var distance = countDate - today;
    //Time calulation for hours, minutes and seconds
    var days = Math.floor(distance / 86400000);
    var hour = Math.floor(distance % 86400000 / 3600000);
    var minute = Math.floor(distance % 3600000 / 60000);
    var second = Math.floor(distance % 60000 / 1000);
    // Formatting the hours, minutes and seconds for single digit values
    var hours, minutes, seconds;
    // Formatting Hour
    if (hour < 10) hours = "0" + hour;
    else hours = hour;
    // Formatting Minute
    if (minute < 10) minutes = "0" + minute;
    else minutes = minute;
    // Formatting Second
    if (second < 10) seconds = "0" + second;
    else seconds = second;
    //Display Countdown
    var element = document.getElementById("time");
    if (days > 0) element.innerHTML = days + " Days <small>&</small> <br>" + hours + " : " + minutes + " : " + seconds;
    else element.innerHTML = hours + " : " + minutes + " : " + seconds;
    // If count down is finished
    if (distance <= 0) {
        clearInterval(interval);
        element.innerHTML = "TIME EXPIRED!";
        document.getElementById("time-left").innerHTML = "";
    }
}, 1000);

//# sourceMappingURL=index.aa69868b.js.map
