document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check");
  const successMessage = document.getElementById("success-msg");
  const errorMessage = document.getElementById("error-msg");

  function connectionCheck() {
    //generate a random number (0 or 1)
    const randomNum = Math.random() < 0.5 ? 0 : 1;

    //depending on the random number, show either 'success' or 'error'
    if (randomNum === 0) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
    }
  }

  //add a click event listener to the "Check Connection" button
  checkButton.addEventListener("click", connectionCheck);

  //add a click event listener to the "Retry" button
  const retryButton = document.querySelector("#error-msg button");
  retryButton.addEventListener("click", connectionCheck);
});
