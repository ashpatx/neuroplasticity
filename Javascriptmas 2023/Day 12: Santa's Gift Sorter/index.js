const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

let stageEl = document.getElementById("stage");
let sortAlphaBtn = document.getElementById("sortAlphaBtn");
let sortZBtn = document.getElementById("sortZBtn");

sortAlphaBtn.addEventListener('click', function () {
  xmasGifts.sort();
  stageEl.textContent = xmasGifts.join('\n');
});

sortZBtn.addEventListener('click', function () {
  xmasGifts.sort((a, b) => b.localeCompare(a));
  stageEl.textContent = xmasGifts.join('\n');
});

// Initial display
stageEl.textContent = xmasGifts.join('\n');
