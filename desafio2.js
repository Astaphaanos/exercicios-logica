

// 1. Soma de Dois Números
function soma(a=0, b=0) { //toda função retorna algo
   return a + b;
}
console.log(soma(3, 5)); // Deve retornar 8
console.log(soma(10, 20)); // Deve retornar 30


//2. Par ou Ímpar?
function parOuImpar(numero) {
    if (numero % 2 == 0) {
       return "Par"
    } else {
        return "Impar"
    }
   
}
console.log(parOuImpar(4)); // Deve retornar "Par"
console.log(parOuImpar(7)); // Deve retornar "Ímpar"

// 4. Encontrar o Maior Número em um Array
// Escreva uma função que receba um array de números e retorne o maior número presente no array.

function maiorNumero(array) {
    if (array.length === 0) {
        return "O array está vazio"; // Caso o array seja vazio
    }
    
    let maior = array[0]; // Inicializa com o primeiro elemento do array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; // Atualiza o maior valor
        }
    }
    return maior;
}

console.log(maiorNumero([3, 7, 2, 9, 4])); // Deve retornar 9
console.log(maiorNumero([-1, -5, -10, -3])); // Deve retornar -1

//Verificar se um Número é Primo
//Crie uma função que receba um número e retorne true se ele for primo ou false caso contrário. 
// Um número primo é maior que 1 e divisível apenas por 1 e por ele mesmo.

function ehPrimo(numero) {
    if (numero < 2) {
        return false; // Números menores que 2 não são primos
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Número divisível por outro número que não 1 e ele mesmo
        }
    }
    return true; // Número é primo
}

console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(2)); // true
console.log(ehPrimo(1)); // false
console.log(ehPrimo(0)); // false