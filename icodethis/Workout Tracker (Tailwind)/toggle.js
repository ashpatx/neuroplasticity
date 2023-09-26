function toggleVisibility(contentId, button) {
  const content = document.getElementById(contentId);
  content.classList.toggle("visible");
  button.textContent = button.textContent === "+" ? "-" : "+";
}
