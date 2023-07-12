const daysPerMonth = {
    1:  31,
    2:  28,
    3:  31,
    4:  30,
    5:  31,
    6:  30,
    7:  31,
    8:  31,
    9:  30,
    10: 31,
    11: 30,
    12: 31
}

const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth() + 1

const daysLeftThisMonth = daysPerMonth[currentMonth] - currentDay

function quantoFaltaPara(birthdayMonth, birthdayDay) {

    birthdayDay = parseInt(birthdayDay)
    birthdayMonth = parseInt(birthdayMonth)

    if (birthdayMonth == currentMonth && birthdayDay >= currentDay)
        return birthdayDay - currentDay
    
    let monthsBetween = []

    if (birthdayMonth > currentMonth) {
        for (let i = currentMonth + 1; i < birthdayMonth; i++) {
            monthsBetween.push(i)
        }
    } else {
        for (let i = currentMonth + 1; i <= 12; i++) {
            monthsBetween.push(i)
        }
        for (let i = 1; i < birthdayMonth; i++) {
            monthsBetween.push(i)
        }
    }

    let daysInMonthsBetween = monthsBetween.map((month) => daysPerMonth[month])

    return daysLeftThisMonth + daysInMonthsBetween.reduce((allDays, monthDays) => allDays += monthDays) + birthdayDay
}
