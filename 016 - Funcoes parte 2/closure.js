// Closure é a habilidade de uma função de lembrar do contexto em que foi declarada.

const funcaoTeste = (function () {
    let value = 0
    return function() {
        return "Função interna invocada - " + ++value
    }
})()

console.log(funcaoTeste())
funcaoTeste()
funcaoTeste()
funcaoTeste()
console.log(funcaoTeste())

/* nesse experimento a função teste lembra do valor "value" presente em sua declaração e atualiza
 o valor da variável corretamente */