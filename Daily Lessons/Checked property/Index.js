const gamerCheck = document.getElementById("gamerCheck")
const playstationRadio = document.getElementById("playStation")
const nintendoRadio = document.getElementById("nintendo")
const pcRadio = document.getElementById("PC")
const submitBtn = document.getElementById("submit")

const gamerDisplay = document.getElementById("gamerResult")
const systemDisplay = document.getElementById("systemResult")


submitBtn.onclick = function () {
    if (gamerCheck.checked) {
        gamerDisplay.textContent = "Cool! What system do you play on?"
        if (playstationRadio.checked) {
            systemDisplay.textContent = "You play Playstation!"
        }
        if (nintendoRadio.checked) {
            systemDisplay.textContent = "You play Nintendo!"
        }
        if (pcRadio.checked) {
            systemDisplay.textContent = "You play on PC!"
        }
    } else {
        gamerDisplay.textContent = "You don't play much games."
    }
    
}