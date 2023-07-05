// var, let, const
// Nomes de variáveis não podem começar com número. Não podem haver caracteres especiais exceto _ e $

// var -> ES5 - can recreate vars:

var recriavel = "criada";
var recriavel = "recriada"; // é código válido

// let -> ES2015 - cannot recreate vars:

let naorecriavel;
naorecriavel = "criada";
//let naorecriavel = "recriada"; gera erro.

// const -> ES2015 - deve ser constante; precisa receber valor na criação

let teste = "minha string";
teste = 10;
console.log(teste);

//const teste2; daria erro.
const teste2 = 11;
//teste2 = "novo valor"; daria erro.
console.log(teste2);