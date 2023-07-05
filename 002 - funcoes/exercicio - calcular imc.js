function calcularImc() {
    if (arguments.length !== 2 && arguments.length !== 3) {
        throw Error("2 parameters needed: weight and height! You can also add an aditional callback function.")
    }
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
        throw Error("Weight and height arguments must be numbers!")
    }
    if (arguments.length === 3) {
        if (typeof arguments[2] !== "function") {
            throw Error ("The third argument must be a callback function with IMC as parameter!")
        } else {
            return arguments[2](arguments[0]/Math.pow(arguments[1], 2))
        }
    } else {
        return arguments[0]/Math.pow(arguments[1], 2)
    }
}

function classificarImc(n1) {
    if (typeof n1 !== "number") {
        throw Error("Argument must be a number (IMC)!")
    }
    switch (true) {
        case n1 < 16:
            return "Invalid number!"
        case n1 <= 16.9:
            return "Muito abaixo do peso."
        case n1 <= 18.4:
            return "Abaixo do peso."
        case n1 <= 24.9:
            return "Peso normal."
        case n1 <= 29.9:
            return "Acima do peso."
        case n1 <= 34.9:
            return "Obesidade Grau I."
        case n1 <= 40:
            return "Obesidade Grau II."
        default:
            return "Obesidade Grau III."
    }
}

console.log(calcularImc(80, 1.65))
console.log(calcularImc(80, 1.65, classificarImc))