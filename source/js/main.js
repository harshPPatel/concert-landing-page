//Set the date we are counitng down to
var countDate = new Date("January 15, 2019 15:37:25").getTime();

//Update th ecount down every second
var interval =  setInterval(function() {
  //Gate todays date and time
  var today = new Date().getTime();

  //find the distance between now and the count down date
  var distance = countDate - today;

  //Time calulation for hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

  var hours, minutes, seconds;
  if (hour < 10) {
    hours = '0' + hour;
  } else {
    hours = hour;
  }

  if (minute < 10) {
    minutes = '0' + minute;
  } else {
    minutes = minute;
  }

  if (second < 10) {
    seconds = '0' + second;
  } else {
    seconds = second;
  }

  //Display Countdown
  var element = document.getElementById('time');
  element.innerHTML = days + " Days, <br>" + hours + " : " + minutes + " : " + seconds;

  // If count down is finished
  if (distance <= 0) {
    clearInterval(interval);
    element.innerHTML = "EXPIRED!"
  }
}, 1000);
