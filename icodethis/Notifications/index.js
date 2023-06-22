document.getElementById("exit-btn").onclick = hide;

function hide() {
  var statusContainers = document.querySelectorAll(".status");
  statusContainers.forEach(function (container) {
    container.style.display = "none";
  });
}
