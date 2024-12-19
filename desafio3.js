/*
1. Imprimir Números de 1 a 10

Crie um programa que imprima os números de 1 a 10 no console usando um laço de repetição (for ou while). 
 */

for (let i=1; i <= 10; i++) {
    console.log(i);
}

/*
2. Soma de Dois Números
Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.
 */

function soma(a =0, b=0) {
    return a+b;
}

console.log(soma(2, 3)); // Deve retornar 5
console.log(soma(10, 20)); // Deve retornar 30


/*
5. Soma dos Elementos do Array
Escreva uma função que some todos os números de um array e retorne o resultado.
 */

function somarElementos(array) {
    let soma = 0; // Inicializa a soma com 0
    for (let i = 0; i < array.length; i++) { // Percorre todo o array
        soma += array[i]; // Adiciona o elemento atual à soma
    }
    return soma; // Retorna o valor da soma
}


/*
6. Somar Números de 1 a N
Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n.
 */

function somarAteN(n) {
    let soma = 0; // Inicializa a soma em 0
    for (let i = 1; i <= n; i++) { // Começa em 1 e vai até n
        soma += i; // Adiciona o valor de i à soma
    }
    return soma; // Retorna o resultado final
}

console.log(somarAteN(5));  // Deve retornar 15 (1 + 2 + 3 + 4 + 5)
console.log(somarAteN(10)); // Deve retornar 55 (1 + 2 + ... + 10)


/*
7. Contar Vogais em uma Palavra
Crie uma função que receba uma palavra e retorne o número de vogais (a, e, i, o, u) na palavra.
*/

function contarVogais(palavra) {
    let vogais = 'aeiouAEIOU'; // String contendo as vogais (maiúsculas e minúsculas)
    let contagemVogais = 0; // Inicializa a contagem de vogais em 0

    for (let i = 0; i < palavra.length; i++) { // Percorre cada letra da palavra
        if (vogais.includes(palavra[i])) { // Verifica se a letra atual é uma vogal
            contagemVogais++; // Incrementa a contagem se for uma vogal
        }
    }
    return contagemVogais; // Retorna o total de vogais encontradas
}

console.log(contarVogais("javascript"));  // Deve retornar 3
console.log(contarVogais("programacao")); // Deve retornar 5


/*
9. Verificar se um Número é Positivo ou Negativo
Crie uma função que receba um número e informe se ele é positivo, negativo ou zero. 
*/

function verificarNumero(numero) {
    if (numero > 0) {
        return 'Positivo'
    } else if (numero < 0) {
        return "Negativo"
    } else {
        return "Zero"
    }
    
}

console.log(verificarNumero(5)); // "Positivo"
console.log(verificarNumero(-3)); // "Negativo"
console.log(verificarNumero(0)); // "Zero"


/*
10. Calcular Média de um Array
Crie uma função que receba um array de números e retorne a média dos valores.
*/

function calcularMedia(arrayMedia) {
    let soma = 0; // Inicializa a soma dos elementos
    for (let i = 0; i < arrayMedia.length; i++) {
        soma += arrayMedia[i]; // Adiciona o valor de cada elemento do array à soma
    }
    let media = soma / arrayMedia.length; // Divide a soma pelo número total de elementos
    return media; // Retorna a média calculada
}

console.log(calcularMedia([2, 4, 6, 8])); // Deve retornar 5
console.log(calcularMedia([10, 20, 30])); // Deve retornar 20

