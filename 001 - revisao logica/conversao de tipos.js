// Conversões de string para números são feitas de forma implícita durante a operação:

let n1 = 10;
let n2 = "2";
console.log(n1 * n2);

// No caso de somas, o sistema pririza a concatenação:

console.log(n1 + n2);

// A conversão pra número pode ser feito ocm parseFloat, parseInt ou o construtor de Number()

let n3 = parseInt(n2);
console.log(n1 + n3);

let n4 = Number(n2);
console.log(n1 + n4);

// parseInt e parseFloat descartam caracteres não numéricos e números adicionais, Number() quebra
// nesses casos (retorna NaN). parseInt e parseFloat dão errado para strings que não comecem em
// número (retorna NaN). Operação com uma string retorna NaN.

console.log("oi" * n2);

// Um número pode ser convertido para string através da concatenação com uma string vazia ou o
// método toString().

let string1 = n1 + "";
console.log(typeof string1);

let string2 = n1.toString();
console.log(typeof string2);

// o toString pode receber a base do número como argumento (decimal, hexadecimal, binário...)

console.log(n1.toString(2));
console.log(n1.toString(16));