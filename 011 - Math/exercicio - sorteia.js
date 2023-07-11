function getRandomNumber(inicio = 0, fim = 10, integer = true) {
    let result = Math.random() * (fim - inicio) + inicio
    if (integer)
        return Math.floor(result)
    return result
}

console.log(getRandomNumber(5))
console.log(getRandomNumber(5, 20))
console.log(getRandomNumber(5, 30, false))