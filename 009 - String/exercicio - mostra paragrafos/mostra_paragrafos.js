let cards = Array.from(document.querySelectorAll(".card"))
let textSizeLimit = 100

cards.forEach((card) => {
    let paragraph = card.querySelector("p")
    if (paragraph.textContent.length > textSizeLimit) {
        card.value = paragraph.textContent
        let newButton = document.createElement("button")
        newButton.innerHTML = '<i class="fas fa-chevron-down"></i>'
        newButton.addEventListener("click", cardButtonOnClick)
        card.appendChild(newButton)
        card.classList.add("text-hidden")
        paragraph.textContent = paragraph.textContent.slice(0, textSizeLimit)+"..."
    }
})

function cardButtonOnClick() {
    let button = this
    let card = button.parentElement
    let paragraph = card.querySelector("p")

    if (paragraph.textContent.length > textSizeLimit + 3) {
        paragraph.textContent = paragraph.textContent.slice(0, textSizeLimit)+"..."
        card.classList.add("text-hidden")
        button.innerHTML = '<i class="fas fa-chevron-down"></i>'
    } else {
        paragraph.textContent = card.value
        card.classList.remove("text-hidden")
        button.innerHTML = '<i class="fas fa-chevron-up"></i>'
    }
}