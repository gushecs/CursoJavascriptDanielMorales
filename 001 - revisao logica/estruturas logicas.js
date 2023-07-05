/* O JavaScript considera alguns valores como false ou true:
False: 0, "", NaN, undefined, null, false
True: todos os demais valores */

// If else

const accessFirstLog = true;
const accessSecondLog = false;

if (accessFirstLog) {
    console.log("First expression true.")
} else if (accessSecondLog) {
    console.log("Second expression true.")
} else {
    console.log("Last expression true.")
}

// Operador ternário

const statement = true;

console.log(statement ? `Statement ${statement}.` : `Statement ${!statement}.`)

// Curto-circuito: usar as estruturas lógicas para fazer operações de forma elegante

let n = 0;
n = n || 10; // como 0 é avaliado como false, o operador ou lê o lado true (valor 10).

n = 1;
n = n || 10; // como 1 é avaliado como true, n passa a valer 1.

let isValid = false;
isValid && console.log("É válido &&.") // && requer que todos valores sejam true, o que faz o log só
// ser executado caso isValid seja true. Assim vc faz o valor só ser impresso caso isValid = true.

isValid || console.log("É válido ||.") // || só requer que um valor seja válido, então se 
// isValid = true o log não é lido pelo interpretador.

// Switch

let dia = 4

switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Dia fornecido inválido.")
}