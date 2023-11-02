const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");

let currentYear = new Date().getFullYear();

let nextYear = currentYear +1;

year.innerHTML = nextYear;

let newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

function updateCountdown() {
  let currentTime = new Date();
  let diff = newYearTime - currentTime;

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
 
}
window.onblur =  () =>  document.title = `Come Back  :( `

window.onfocus = () =>  document.title = "New Year Countdown"

setInterval(() => {
  updateCountdown();
}, 1000);
