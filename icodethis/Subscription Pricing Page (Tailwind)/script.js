function toggleCheckbox(clickedPlan) {
  var allPlans = document.querySelectorAll(".cursor-pointer");

  allPlans.forEach(function (plan) {
    var icon = plan.querySelector(".checkboxIcon");
    var isChecked = plan === clickedPlan;

    icon.classList.toggle("ri-checkbox-blank-circle-line", !isChecked);
    icon.classList.toggle("ri-checkbox-circle-line", isChecked);
  });
}

/*confetti*/
const jsConfetti = new JSConfetti();
const canvases = document.querySelectorAll(".confetti");

/*continue button*/
const continueBtn = document.getElementById("continueBtn");
const popupContainer = document.getElementById("popupContainer");
const yepBtn = document.getElementById("yepBtn");
const nahBtn = document.getElementById("nahBtn");

continueBtn.addEventListener("click", function () {
  popupContainer.classList.remove("hidden");
});

yepBtn.addEventListener("click", function () {
  jsConfetti.addConfetti({});
  //post-confetti alert
  alert("You've purchased!");
  popupContainer.classList.add("hidden");
});

nahBtn.addEventListener("click", function () {
  alert("smart decision, good for you!");
  popupContainer.classList.add("hidden");
});
