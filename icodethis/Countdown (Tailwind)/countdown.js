const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdownTime() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const thanksgivingTime = new Date(
    `November 24, ${currentYear} 2023 00:00:00`
  );
  const diff = thanksgivingTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.textContent = d;
  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;
}

setInterval(updateCountdownTime, 1000);
updateCountdownTime();
