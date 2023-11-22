let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let pickOne = Math.floor(Math.random() * fighters.length)
        let pickTwo = Math.floor(Math.random() * fighters.length)

    return stageEl.textContent = console.log(fighters[pickOne] + " vs " + fighters[pickTwo])
    
})


