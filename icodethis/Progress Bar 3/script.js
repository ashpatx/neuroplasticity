const progress = document.getElementById("course-progress");
const progressText = document.querySelector(".progress-text");
const continueButton = document.getElementById("button");

continueButton.addEventListener("click", () => {
  //progress 0% to 100%
  let percent = 0;
  const interval = setInterval(() => {
    if (percent < 100) {
      percent++;
      progress.value = percent;
      progressText.textContent = percent + "%";
    } else {
      clearInterval(interval);
    }
  }, 95);
});
