function formatarNome(nomeCompleto) {
    let names = nomeCompleto.trim().split(" ")
    let firstName = names.shift()
    if (names.length >= 1) {
        return names.join(" ") + ", " + firstName
    }
    return firstName
}

console.log(formatarNome("Gustavo"))
console.log(formatarNome("Gustavo Santos"))
console.log(formatarNome("Gustavo Heitor da Costa Santos"))
console.log(formatarNome("Daniel Tapias Morales"))