//Notification button and menu
const notificationButton = document.getElementById("notification-button");
const notificationMenu = document.getElementById("notification-menu");

notificationButton.addEventListener("click", () => {
  notificationMenu.classList.toggle("hidden");
});

//Notification Event Listener
document.addEventListener("click", (event) => {
  if (
    !notificationButton.contains(event.target) &&
    !notificationMenu.contains(event.target)
  ) {
    notificationMenu.classList.add("hidden");
  }
});

//Profile button and menu
const dropdownButton = document.getElementById("profile-button");
const dropdownMenu = document.getElementById("profile-menu");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

//Profile Event Listener
document.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
});
