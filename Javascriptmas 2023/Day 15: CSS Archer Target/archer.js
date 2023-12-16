const cursor = document.querySelector(".cursor");
const present = document.querySelector(".present");
const archerTarget = document.querySelector(".archer");
const archerContainer = document.querySelector(".archerContainer");
const attemptBtn = document.querySelector(".attemptBtn");
const redoBtn = document.querySelector(".redoBtn");
const bullseye = document.querySelector(".bullseye");

/*keep score*/
let score = 0;
attemptBtn.addEventListener("click", () => {
  archerContainer.appendChild(archerTarget);
  attemptBtn.innerText = "Score: " + score;
});

redoBtn.addEventListener("click", () => {
  // Reset the score
  score = 0;
  attemptBtn.innerText = "Attempt";

  //move archer target in random across screen
  const randomTop = Math.random() * (contHeight - archerTarget.clientHeight);
  const randomLeft = Math.random() * (contWidth - archerTarget.clientWidth);

  archerTarget.style.position = "absolute";
  archerTarget.style.top = randomTop + "px";
  archerTarget.style.left = randomLeft + "px";
});

const contHeight = archerContainer.offsetHeight;
const contWidth = archerContainer.offsetWidth;

setInterval(() => {
  const randomTop = Math.random() * (contHeight - archerTarget.clientHeight);
  const randomLeft = Math.random() * (contWidth - archerTarget.clientWidth);

  archerTarget.style.top = randomTop + "px";
  archerTarget.style.left = randomLeft + "px";
}, 1000);

/*move cursor*/
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

bullseye.addEventListener("click", () => {
  score++;
  attemptBtn.innerText = "Score: " + score;
});

window.addEventListener("click", (e) => {
  present.style.top = e.pageY + "px";
  present.style.left = e.pageX + "px";
});
