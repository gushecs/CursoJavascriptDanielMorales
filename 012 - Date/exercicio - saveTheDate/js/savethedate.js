(function () {

    let ArrayOfDateAndHours = document.querySelector("h1 span").textContent.trim().split(" ")
    let ArrayOfDate = ArrayOfDateAndHours[0].split("/").reverse()
    ArrayOfDate[1] -= 1
    let ArrayOfHours = ArrayOfDateAndHours[1].split("H")

    let eventDate = new Date(...(ArrayOfDate.concat(ArrayOfHours)))
    let currentDate = new Date()

    let dateBetweenMillis = eventDate.getTime() - currentDate.getTime()
    let numberOfDays = Math.floor(dateBetweenMillis / (24 * 60 * 60 * 1000))

    let hoursBetweenMillis = dateBetweenMillis - numberOfDays *24 * 60 * 60 * 1000
    let numberOfHours = Math.floor(hoursBetweenMillis / (60 * 60 * 1000))

    let minutesBetweenMillis = hoursBetweenMillis - numberOfHours * 60 * 60 * 1000
    let numberOfMinutes = Math.floor(minutesBetweenMillis / (60 * 1000))

    let secondsBetweenMillis = minutesBetweenMillis - numberOfMinutes * 60 * 1000
    let numberOfSeconds = Math.floor(secondsBetweenMillis / 1000)

    let countdown = document.createElement("p")
    countdown.textContent = `Contagem Regressiva: ${numberOfDays} days, ${numberOfHours} hours, ${numberOfMinutes} minutes, ${numberOfSeconds} seconds.`
    document.querySelector(".hero-content").appendChild(countdown)

})()