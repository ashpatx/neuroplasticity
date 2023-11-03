const circleContainer = document.querySelector(".circle-container");
const gifContainer = document.querySelector(".gif-container");

//screen 1 to screen 2 transition
circleContainer.addEventListener("animationend", () => {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
});

//screen 2 to screen 3 transition
const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function () {
  screen2.style.display = "none";
  screen3.style.display = "block";
});

//like and count button counters
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const commentButton = document.getElementById("commentButton");
const commentCount = document.getElementById("commentCount");

//initialize counts
let likeCountValue = 0;
let commentCountValue = 0;
//update like count upon click
likeButton.addEventListener("click", () => {
  likeCountValue++;
  likeCount.textContent = likeCountValue;
});

//update comment count upon click
commentButton.addEventListener("click", () => {
  commentCountValue++;
  commentCount.textContent = commentCountValue;
});

document.getElementById("commentButton").addEventListener("click", function () {
  var commentPopup = document.getElementById("commentPopup");
  commentPopup.style.display = "block";
});

document
  .getElementById("cancelCommentButton")
  .addEventListener("click", function () {
    var commentPopup = document.getElementById("commentPopup");
    commentPopup.style.display = "none";
  });

document
  .getElementById("postCommentButton")
  .addEventListener("click", function () {
    var commentPopup = document.getElementById("commentPopup");
    var commentInput = document.getElementById("commentInput");
    var comment = commentInput.value;

    //hide post-processing
    commentPopup.style.display = "none";
  });
