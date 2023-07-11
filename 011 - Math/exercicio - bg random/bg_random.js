let numberOfImages = 5

let body = document.querySelector("body")

let bgNumber = Math.floor(Math.random() * (numberOfImages) + 1)

body.style.backgroundImage = `url(images/${bgNumber}.jpg)`