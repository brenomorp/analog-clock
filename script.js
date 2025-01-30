let digitalWatch = document.querySelector(".digital");
let hoursPointer = document.querySelector(".p_h");
let minutesPointer = document.querySelector(".p_m");
let secondsPointer = document.querySelector(".p_s");

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  digitalWatch.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(
    seconds
  )}`;

  let hourAngle = (hours % 12) * (360 / 12) + (minutes * (360 / 60)) / 12 - 90;
  let minuteAngle = minutes * (360 / 60) - 90;
  let secondAngle = seconds * (360 / 60) - 90;

  hoursPointer.style.transform = `rotate(${hourAngle}deg)`;
  minutesPointer.style.transform = `rotate(${minuteAngle}deg)`;
  secondsPointer.style.transform = `rotate(${secondAngle}deg)`;
}
setInterval(() => {
  updateTime();
}, 1000);

function fixZero(time) {
  return time < 10 ? "0" + time : time;
}
