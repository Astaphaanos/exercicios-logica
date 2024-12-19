
/*
1. Dobrar Valores
Crie uma função que receba um array de números e retorne um novo array com todos os valores dobrados.
*/

function dobrarValores(array) {
    let resultado = []; // Cria um novo array para armazenar os valores dobrados
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * 2); // Adiciona o valor dobrado ao novo array
    }
    return resultado; // Retorna o novo array
}

console.log(dobrarValores([1, 2, 3])); // Deve retornar [2, 4, 6]
console.log(dobrarValores([5, 10, 15])); // Deve retornar [10, 20, 30]


/*
2. Verificar Palíndromo
Crie uma função que receba uma string e retorne true se for
um palíndromo (lê-se da mesma forma de trás para frente), e false caso contrário.
*/

function ehPalindromo(palavra) {
    // Reverter a palavra
    let palavraReversa = palavra.split('').reverse().join('');
    
    // Comparar a palavra original com a reversa
    return palavra === palavraReversa;
}


console.log(ehPalindromo("ana")); // true
console.log(ehPalindromo("javascript")); // false
console.log(ehPalindromo("arara")); // true



/*
3. Números Pares em um Intervalo
Crie uma função que receba dois números (início e fim) e retorne um array contendo todos os números pares nesse intervalo.
 */

function numerosPares(inicio = 0, fim = 0) {
    let array = [];
    for (let i = inicio; i <= fim; i++) { // Itera do início até o fim
        if (i % 2 === 0) { // Verifica se o número é par
            array.push(i); // Adiciona o número par ao array
        }
    }
    return array; // Retorna o array final
}

console.log(numerosPares(1, 10)); // Deve retornar [2, 4, 6, 8, 10]
console.log(numerosPares(3, 7)); // Deve retornar [4, 6]


/*
4. Soma de Dígitos
Crie uma função que receba um número inteiro e retorne a soma de seus dígitos.
 */

function somaDigitos(numero) {
    let soma = 0;
    let digitos = numero.toString(); // Converte o número para string

    for (let i = 0; i < digitos.length; i++) {
        soma += parseInt(digitos[i]); // Converte o caractere de volta para número e soma
    }
    return soma;
}

console.log(somaDigitos(123)); // Deve retornar 6 (1 + 2 + 3)
console.log(somaDigitos(456)); // Deve retornar 15 (4 + 5 + 6)




/*
5. Fatorial
Crie uma função que receba um número inteiro e retorne o fatorial desse número.
*/
function fatorial(numero) {
    let resultado = 1;

    for (let i = numero; i > 0; i --) {
        resultado *= i;
    }
    return resultado
}

console.log(fatorial(5)); // Deve retornar 120 (5 * 4 * 3 * 2 * 1)
console.log(fatorial(3)); // Deve retornar 6 (3 * 2 * 1)



/*
7. Números Divisíveis por 3
Crie uma função que receba um número e retorne um array com todos os números de 1 até esse número que são divisíveis por 3.
*/

function divisiveisPor3(numero) {
    let array = [] // Array para armazenar os números divisíveis por 3
    for (let i = 1; i <= numero; i++ ) {  // Percorre de 1 até o número fornecido
        if ( i % 3 == 0) { // Verifica se o número é divisível por 3
            array.push(i); // Adiciona o número ao array
        }   
    }
    return array
}

console.log(divisiveisPor3(10)); // Deve retornar [3, 6, 9]
console.log(divisiveisPor3(15)); // Deve retornar [3, 6, 9, 12, 15]



/*
8. Maior e Menor Número
Crie uma função que receba um array de números e retorne o maior e o menor número
*/

function maiorMenor(array) {
    let maior = array[0]; // Inicializa com o primeiro elemento do array
    let menor = array [0]; // Inicializa com o primeiro elemento do array

    for (let i = 0; i <= array.length; i++) { // Começa a partir do segundo elemento
        if(array[i] > maior) { // Atualiza o maior número
            maior = array[i];
        } else if (array[i] < menor) { // Atualiza o menor número
            menor = array[i];
        }
    }
    return {maior: maior, menor: menor} // Retorna um objeto com os dois valores
}

console.log(maiorMenor([1, 5, 3, 9, 2])); // Deve retornar { maior: 9, menor: 1 }
console.log(maiorMenor([10, 20, 30, -5])); // Deve retornar { maior: 30, menor: -5 }



/*
9. Contagem de Números Positivos e Negativos
Crie uma função que receba um array de números e retorne a quantidade de números positivos e negativos.
*/

function contarPositivosNegativos(array) {
    let contadorPositivos= 0 // Contador para números positivos
    let contadorNegativos = 0

    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            contadorPositivos++
        } else if (array[i] < 0 ){
            contadorNegativos++
        }
    }
    return {contadorPositivos: contadorPositivos, contadorNegativos: contadorNegativos}
}

console.log(contarPositivosNegativos([1, -2, 3, -4, 5])); // Deve retornar { positivos: 3, negativos: 2 }
console.log(contarPositivosNegativos([-1, -1, -1])); // Deve retornar { positivos: 0, negativos: 3 }



/*
10. Multiplicar Números de um Array
Crie uma função que recebe um array de números e retorne o produto (multiplicação) de todos os valores.

*/

function multiplicarArray(array) {
    let multiplicar = 1 // Inicializamos com 1 porque 1 é o elemento neutro da multiplicação
    for (let i = 0; i < array.length; i++) { // Percorremos todos os elementos do array
        multiplicar *= array[i] // Multiplicamos o valor atual pelo acumulado
    }
    return multiplicar // Retornamos o produto final
}

console.log(multiplicarArray([1, 2, 3, 4])); // Deve retornar 24 (1 * 2 * 3 * 4)
console.log(multiplicarArray([5, 10, 2])); // Deve retornar 100 (5 * 10 * 2)
