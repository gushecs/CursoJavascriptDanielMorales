// Pode ser criada uma função com um rest operator no final, que é um argumento array de tamanho 
// variável.

function teste(n1, n2, n3, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(ns)
}

teste(2, 3, 5, 6, 2, 64, 75)