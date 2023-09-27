const voteNowButton = document.getElementById("vote-now");
const challengesCard = document.getElementById("challenges-card");
const homeButton = document.getElementById("home-button");
const selectVoteButtons = document.querySelectorAll("[id^='select-vote-']");
const jsConfetti = new JSConfetti();
const canvases = document.querySelectorAll(".confetti");

//Function shows Card 2
function showChallengesCard() {
  //Hide Card 1
  document.getElementById("vote-card").style.display = "none";

  //Show Card 2
  challengesCard.style.display = "block";

  //Show home button option
  homeButton.style.display = "block";

  //Remove vote now button listener
  voteNowButton.removeEventListener("click", showChallengesCard);
}

//Function to return to Card 1
function goHome() {
  //Hide Card 2
  challengesCard.style.display = "none";

  //Show Card 1
  document.getElementById("vote-card").style.display = "block";

  //Hide home button
  homeButton.style.display = "none";

  //Add back vote now listener
  voteNowButton.addEventListener("click", showChallengesCard);
}

//Add listener to initial vote now button
voteNowButton.addEventListener("click", showChallengesCard);

//Add listener to the home button
homeButton.addEventListener("click", goHome);

//Add listeners to select vote buttons + confetti!
selectVoteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    jsConfetti.addConfetti({
      emojis: ["🎵", "🎸", "🎼", "🎤", "🎶", "🎹", "🌟"],
      emojiSize: 45,
      confettiNumber: 300
    });

    //Show success message using SweetAlert2
    Swal.fire({
      title: "Thanks for voting!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "swal-button--confirm"
      }
    });
  });
});
