function calcularMedia() {
    let arr = Array.from(arguments)

    if(arr.some((value) => typeof value != "number")) {
        throw Error("Invalid input: All elements must be numbers!")
    }

    return (arr.length != 0) ? arr.reduce((total, value) => total + value )/arr.length : 0
}

console.log(calcularMedia())
console.log(calcularMedia(2, 6))
console.log(calcularMedia(2, 6, 1, 1, 2, 6))
console.log(calcularMedia("2", "6"))