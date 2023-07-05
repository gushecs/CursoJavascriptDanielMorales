// let e const mantém a variável no escopo do bloco em que ela foi declarada.

// Quando duas variáveis são declaradas com mesmo nome mas em escopos diferentes, predomina o
// escopo local

// var mantém a variável no escopo de função, transportando para fora de blocos for, por exemplo

let n = "global"

function mostrarN () {

    let n = "local"

    for (let i = 1; i < 2; i++)
        var m = "var"

    console.log(n)
    console.log(m)
}

mostrarN()

console.log(n)