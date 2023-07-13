const body = document.querySelector("body")
let allDelayedImages = Array.from(document.querySelectorAll("[data-addclass-on-scroll=show]"))

function checkAndLoadImages() {
    console.log("check executed")
    allDelayedImages.forEach((image, index) => {
        if (image.getBoundingClientRect().bottom < innerHeight) {
            setTimeout(() => {
                image.removeAttribute("data-addclass-on-scroll")
                image.removeAttribute("data-addclass-on-scroll-delay")
                image.classList.add("show")
            }, parseInt(image.getAttribute("data-addclass-on-scroll-delay")) || 0)
            allDelayedImages.splice(index, 1)
        }
    })
    if (allDelayedImages.length == 0)
        this.removeEventListener("scroll", checkAndLoadImages)
}

body.classList.remove("no-js")

window.addEventListener("scroll", checkAndLoadImages)