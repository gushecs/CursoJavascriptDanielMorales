let number = 12345.678987

// O método toFixed determina quantas casas decimais devem ser mostradas.

console.log(" toFixed()".padStart(35, "-"))
console.log(number.toFixed(3))
console.log(typeof number.toFixed(3))
console.log("\n")

// O método toPrecision determina quantas casas devem ser mostradas, arrendondando as demais.

console.log(" toPrecision()".padStart(35, "-"))
console.log(number.toPrecision(3))
console.log(number.toPrecision(7))
console.log(typeof number.toPrecision(3))
console.log("\n")

// O método toExponential converte o número para um exponencial de base 10. Sem parâmetros, ele
// mantém todos digitos significativos do número, com um parâmetro númerico x, ele passa a exibir
// apenas x casas decimais.

console.log(" toExponential()".padStart(35, "-"))
console.log(number.toExponential())
console.log(number.toExponential(3))
console.log(typeof number.toExponential(3))
console.log("\n")

/* Todos os 3 métodos convertem o número para String. um método não pode ser chamado da seguinte
forma:

123.toPrecision(1)

Isso porque para um número, o "." deve separar as dezenas das casas decimais. Logo, após um "." é
esperada a continuidade do número. As duas formas abaixo são corretas */

console.log(" Other ways to call".padStart(35, "-"))
console.log(123 .toPrecision(1))
console.log((123).toPrecision(1))
console.log("\n")

// O método toString em números pode receber como argumento a base, exibindo os números em binário
// com "2" ou hexadecimal com "16", por exemplo.

console.log(" toString()".padStart(35, "-"))
console.log(number.toString())
console.log((4).toString(2) + " - Binary")
console.log((18).toString(16) + " - Hexadecimal")
console.log("\n")

// toLocaleString é capaz de organizar o toString de acordo com um dado padrão geográfico.

console.log(" toLocaleString()".padStart(35, "-"))
console.log(number.toLocaleString())
console.log(number.toLocaleString("pt-BR"))
console.log(number.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
console.log(number.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}))
console.log("\n")