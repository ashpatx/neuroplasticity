function toggleCheckbox(clickedPlan) {
  var allPlans = document.querySelectorAll(".cursor-pointer");

  allPlans.forEach(function (plan) {
    var icon = plan.querySelector(".checkboxIcon");
    var isChecked = plan === clickedPlan;

    icon.classList.toggle("ri-checkbox-blank-circle-line", !isChecked);
    icon.classList.toggle("ri-checkbox-circle-line", isChecked);
  });
}

/*continue button*/
document.getElementById("continue").addEventListener("click", function () {
  document.getElementById("popupContainer").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupContainer").classList.add("hidden");
});
