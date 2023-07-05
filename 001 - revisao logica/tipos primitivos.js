// string, number (int, float), boolean, undefined, null
// a palavra typeof serve para verificar o tipo de uma variável.

let minha_string = "minha string";
let minha_string2 = 'minha "string" com aspas duplas';
let minha_string3 = `minha template literal`;

// A template literal veio no ES2015 e é diferente das demais pela forma como funciona a
// concatenação textual com variáveis:

let idade = 40;
let idade_string = "eu possuo " + idade + " anos.";
let idade_literal = `eu possuo ${idade} anos.`
console.log(typeof idade_literal, typeof idade);

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`O tipo de n1 é ${typeof n2} e seu valor é ${n2}`)

const isValid = true;

let varUndefined;
console.log(varUndefined);
console.log(typeof varUndefined);

let varNull = null;
console.log(varNull);
console.log(typeof varNull);