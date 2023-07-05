// Quando passamos um objeto para dentro de uma função ou uma variável que abriga um tipo primitivo, há uma diferença nas operações.

// Passar um objeto para uma função equivale a "passar uma referência a um objeto", o que significa que modificações do objeto são 
// refletidas fora do escopo da função.

function addOneAndPrintForArray(num) {
    num[0]++
    console.log(num)
}

let objectNumber = [1]

addOneAndPrintForArray(objectNumber)
console.log(objectNumber)

// Passar um tipo primitivo, por outro lado, coloca para dentro da função o valor, e não a referência ao objeto. as iterações
// dentro da função são do valor, e não do objeto e assim, ao fim das iterações o objeto encontra-se intacto

function addOneAndPrintForNumber(num) {
    num++
    console.log(num)
}

let primitiveNumber = 1

addOneAndPrintForNumber(primitiveNumber)
console.log(primitiveNumber)