function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let firstSpace = nomeCompleto.indexOf(" ")
    if (firstSpace != -1)
        return nomeCompleto.slice(firstSpace + 1) + ", " + nomeCompleto.slice(0, firstSpace)
    return nomeCompleto
}

console.log(formatarNome("Gustavo"))
console.log(formatarNome("Gustavo Santos"))
console.log(formatarNome("Gustavo Heitor da Costa Santos"))
console.log(formatarNome("Daniel Tapias Morales"))