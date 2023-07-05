// Arrays são do tipo object (não há type array) e podem receber tipos diversos

// podem ser declarados com new Array() ou diretamente com []

const arr = new Array(true, "Daniel", 28, new Array (2,4,8))
console.log(arr)
console.log(typeof(arr))

// Arrays criadas como const pode ser alteradas

const arr2 = []
arr2[0] = "Pedro"
arr2[1] = false
console.log(arr2)
console.log(arr2[1])
console.log(arr[3][0])

// Objetos fora do length da array são undefined

console.log(arr2[6])

// Length dá o tamanho da array

console.log(arr.length)

//pode-se adicioanr elemntos no array com o metodo push

arr.push("valor inserido")
console.log(arr)
console.log("\n")

// Objects são pares de chave-valor

const pessoa = new Object()
console.log(pessoa)
pessoa.nome = "Daniel"
pessoa.idade = 28
console.log(pessoa)
console.log(pessoa.nome)
let prop = "idade"
console.log(pessoa[prop])

const pessoa2 = {nome: "Pedro", idade: 48}
console.log(pessoa2)

// Você pode iteragir com as propriedades do object com for in:

for (let prop in pessoa2)
    console.log(pessoa2[prop])

// Você pode declarar uma função dentro de um object

// Arrow functions não retornam o object como this

const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n) {
        console.log(this)
        if (n > this.qtd) {
            return "quantidade não disponível"
        }
        this.qtd -= n
    },
    teste: () => {
        console.log(this)
    }
}

produto.comprar(13)
console.log(produto)
produto.teste()