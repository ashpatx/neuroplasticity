const fallingBox = document.querySelector('.falling-box');
const elvesCounter = document.getElementById('elvesCounter');
let duplicatedElves = 0;

function createFallingEmoji(emoji) {
  const fallingEmoji = document.createElement("div");
  fallingEmoji.className = "falling-emoji";
  fallingEmoji.textContent = emoji;
  return fallingEmoji;
}

function animateFallingEmoji(fallingEmoji) {
  const clonedEmoji = fallingEmoji.cloneNode(true);
  fallingBox.appendChild(clonedEmoji);
  const animation = clonedEmoji.animate(
    [{
        top: window.innerHeight / 2 + "px",
        opacity: 0
      },
      {
        top: window.innerHeight + "px",
        opacity: 1
      }
    ], {
      duration: 2000,
      easing: "linear",
      fill: "forwards"
    }
  );
  animation.onfinish = () => {
    clonedEmoji.style.opacity = 0;
  };
}
document.querySelectorAll('.add-elf-btn').forEach(btn => {
  btn.addEventListener("click", () => {
    if (duplicatedElves < 100) {
      duplicatedElves++;
      elvesCounter.textContent = `Elves Duplicated: ${duplicatedElves} / 100`;
      const emoji = btn.previousElementSibling.textContent.trim().split(":")[1].trim();
      const fallingEmoji = createFallingEmoji(emoji);
      animateFallingEmoji(fallingEmoji);
    } else {
      alert("Maximum number of duplicated elves reached (100).");
    }
  });
});
