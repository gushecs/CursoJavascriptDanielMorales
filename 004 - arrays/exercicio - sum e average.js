function sum() {
    if (arguments.length < 1)
        throw Error("You must provide numbers!")
    
    const numbers = Array.from(arguments)

    if (numbers.some((parameter) => typeof parameter !== "number"))
        throw Error("All parameters must be numeric!")

    return numbers.reduce((sum, value) => sum += value)
}

function average() {
    return sum(...arguments)/arguments.length
}

// console.log(sum())
// console.log(average())
// console.log(sum("oi", "tudo?"))
// console.log(average("oi", "tudo?"))
console.log(sum(4,5,6,7,8,9))
console.log(average(4,5,6,7,8,9))