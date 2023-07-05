// Todas as funções tem por padrão um argumento "arguments" parecido com uma array:

function sum() {
    let total = 0
    for (let i = 0; i < arguments.length; i++)
        total += arguments[i]
    return total
}

console.log(sum(2, 5, 6))

// Arrow functions não tem acesso a arguments.