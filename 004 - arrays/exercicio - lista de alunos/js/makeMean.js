(function(){
    const tableRowTitles = Array.from(document.querySelectorAll("thead tr th"))
    const rowsWithGrades = tableRowTitles.map((value, index) => value.getAttribute("gradetablecontent") === "grade" ? index : null).filter(value => value)
    const rowWithMean = tableRowTitles.map((value, index) => value.getAttribute("gradetablecontent") === "gradeMean" ? index : null).reduce((value, sum) => sum += value)

    const tableRows = document.querySelectorAll("tbody tr")
    for (let tableRow of tableRows) {
        let numbers = []
        let row = tableRow.querySelectorAll("td")
        for (let rowWithGrade of rowsWithGrades) {
            parseFloat(row[rowWithGrade].textContent) && numbers.push(parseFloat(row[rowWithGrade].textContent))
        }
        row[rowWithMean].textContent = average(...numbers)
    }
})()