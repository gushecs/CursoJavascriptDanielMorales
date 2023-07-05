const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

const numerosUnicos = numeros.reduce((array, number) => {
    array.includes(number) || array.push(number)
    return array
}, [])

console.log(numerosUnicos)