//Set the date we are counting down to
const targetDate = new Date("December 15, 2022 15:37:25").getTime();

const timeLeftElement = document.getElementById("time-left");
const timeElement = document.getElementById("time");

const isExpired = (): boolean => {
  return new Date().getTime() > targetDate;
};

const getFormattedDistanceTime = (): string => {
  const timeLeft = Math.floor((targetDate - new Date().getTime()) / 1000);
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);

  let formattedTime: string;

  if (days > 0) {
    formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else if (hours > 0) {
    formattedTime = `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    formattedTime = `${minutes}m ${seconds}s`;
  } else {
    formattedTime = `${seconds}s`;
  }

  return formattedTime;
};

const interval = setInterval(function () {
  timeLeftElement.textContent = "(Time Left)";

  if (isExpired()) {
    clearInterval(interval);
    timeElement.innerHTML = "TIME EXPIRED!";
    timeLeftElement.innerHTML = "";
    return;
  }

  timeElement.innerHTML = getFormattedDistanceTime();
}, 1000);
