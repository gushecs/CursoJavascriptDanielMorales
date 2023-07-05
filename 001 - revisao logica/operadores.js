// Operadores aritméticos: + - * / % **

let n1 = 10;
let n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2);
console.log();

// Operadores de atribuição: = += -= *= /= %= **=

let n3;
n3 = 2;
console.log(n3);
n2 += 5;
console.log(n2);
n1 -= 5;
console.log(n1);
n2 *= n3;
console.log(n2);
n2 /= n3;
console.log(n2);
n2 %= n3;
console.log(n2);
n1 **= n3;
console.log(n1);
console.log();

// Incremento e decremento: ++ --

console.log(n2++, n2);
console.log(n2--, n2);
console.log(++n2, n2);
console.log(--n2, n2);
console.log();

// Operadores de comparação: == (igualdade de valor) === (igualdade de valor e tipo)
// < > <= >= != (desigualdade de valor) !== (desigualdade de valor e tipo)

n1 = 10;
n2 = 5;
n3 = "10";

console.log(n1 == n2, n1 === n2, n1 == n3, n1 === n3);
console.log(n1 < n2, n2 < n1, n1 < n3, n3 < n1);
console.log(n1 > n2, n2 > n1, n1 > n3, n3 > n1);
console.log(n1 <= n2, n2 <= n1, n1 <= n3, n3 <= n1);
console.log(n1 >= n2, n2 >= n1, n1 >= n3, n3 >= n1);
console.log(n1 != n2, n1 !== n2, n1 != n3, n1 !== n3);
console.log();

// Operadores lógicos: && || !

console.log(n1 == n3 && n1 != n2, n1 == n3 && n1 == n2);
console.log(n1 == n3 && !(n1 != n2), n1 == n3 && !(n1 == n2));
console.log(n1 == n3 || n1 != n2, n1 == n3 || n1 == n2);
console.log(n1 != n3 || !(n1 != n2), n1 != n3 || !(n1 == n2));

// && tem precedencia sobre ||, o que significa que, para condições A, B e C,
// A || B && C é o mesmo que A || (B && C).