// Você pode invocar uma função antes ou depois de sua definição

teste()

function teste() {
    console.log("teste")
}

// A menos que a fnção seja declarada dentro de uma variável

const teste2 = function teste2() {
    console.log("teste2")
}

teste2()

// A mesma coisa acontece com variáveis criadas com a palavra var. Se impressa antes de declarada,
// ela existirá, mas será indefinida.

console.log(variavel)

var variavel = "variavel"