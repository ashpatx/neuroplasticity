var i = 0;

function move(barIndex) {
  if (i == 0) {
    i = 1;
    var elem = document.querySelectorAll(".bar")[barIndex]; //select bar one or two
    var width = 1;
    var id = setInterval(frame, 15);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
