// call, apply and bind have the hability to change the value of the object "this" of a function

function teste(str, n) {
    console.log(this.name)
    console.log(this.name2)
    console.log(str, n)
    console.log()
}

// Ao chamar a função diretamente, "this" refere-se ao objeto global

teste()

// A chamada por call permite a passagem de um outro objeto "this"

teste.call({name: "Maria"}, "string", 20)

// O método apply funciona de forma similar, com a diferença de que os argumentos neste são passados
// por meio de uma array. Antigamente tal diferenciação era útil, mas hoje em dia, com a possibilidade
// de usar spread operators, isso torna-se desnecessário.

teste.apply({name: "João"}, ["da Silva", 28])

// O método bind cria um objeto com o "this" alterado.

let teste2 = teste.bind({ name: "Joaquim"})
teste2("da Costa", 80)