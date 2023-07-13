const header = document.querySelector(".hero")
const headerSpeed = parseFloat(header.getAttribute("data-p-velocity"))

function headerParalax() {
    header.style.transform = `translate(0px, ${scrollY * headerSpeed}px)`
}

window.addEventListener("scroll", headerParalax)