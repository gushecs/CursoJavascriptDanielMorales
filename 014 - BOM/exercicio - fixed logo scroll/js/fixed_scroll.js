const body = document.querySelector("body")

window.addEventListener("scroll", function(){
    if (body.classList.contains("fx")) {
        if (this.scrollY <= 250)
            body.classList.remove("fx")
    } else {
        if (this.scrollY > 250)
            body.classList.add("fx")
    }
})