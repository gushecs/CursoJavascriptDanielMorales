let currentDate = new Date()
currentDate.setHours(0)
currentDate.setMinutes(0)
currentDate.setSeconds(0)
currentDate.setMilliseconds(0)
const currentYear = currentDate.getFullYear()
const one_day = 24 * 60 * 60 * 1000

function quantoFaltaPara(birthdayMonth, birthdayDay) {

    let birthdayDate = new Date(currentYear, birthdayMonth - 1, birthdayDay)

    if (birthdayDate < currentDate)
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1)

    return (birthdayDate.getTime() - currentDate.getTime()) / one_day
}
