//Soma dos Quadrados
//Descrição: Crie uma função que recebe um array de números e retorna a soma do quadrado de cada número.

function somaDosQuadrados(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i] ** 2
    }
    return soma
}

console.log(somaDosQuadrados([1, 2, 3])); // 14 (1² + 2² + 3²)
console.log(somaDosQuadrados([4, 5]));    // 41 (4² + 5²)


// 2. Contar Palavras
//Crie uma função que recebe uma frase e retorna o número de palavras na frase.

function contarPalavras (frase) {
    let palavras = frase.split(' ');
    return palavras.length
}

console.log(contarPalavras("Olá mundo!"));// 2
console.log(contarPalavras("JavaScript é incrível"));// 3


//3. Criar Array com Intervalo
//Crie uma função que recebe dois números (início e fim) e retorna um array com todos os números entre eles, inclusive.


function criarArray(inicio, fim) {
    let array = [];
    for (let i = 0; i <= fim; i++) {
        array.push(i);
    }
    return array;
}


console.log(criarArray(3, 7));  // [3, 4, 5, 6, 7]
console.log(criarArray(1, 3));  // [1, 2, 3]



//4. Contar Consoantes
// Crie uma função que recebe uma string e retorna o número de consoantes na string.

function contarConsoantes (string){
    let vogais = 'aeiou';
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        let caractere = string[i].toLowerCase();
        if (!vogais.includes(caractere) && /[a-z]/.test(caractere)) { //! O método .includes() verifica se o caractere atual está na lista de vogais.
            contador++
        }
    }
    return contador;
}

console.log(contarConsoantes("casa"));       // 2
console.log(contarConsoantes("javascript")); // 7



//5. Multiplicar Ímpares
//Crie uma função que recebe um array de números e retorna o produto de todos os números ímpares.

function multiplicarImpares(array) {
    let multiplicar = 1
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            multiplicar *= array[i];
        }
    }
    return multiplicar
}

console.log(multiplicarImpares([1, 2, 3, 4]));  // 3 (1 * 3)
console.log(multiplicarImpares([2, 4, 6]));     // 1 (nenhum ímpar, retorno padrão é 1)



//6. Duplicar Caracteres
//Crie uma função que recebe uma string e retorna uma nova string com cada caractere duplicado.

function duplicarCaracteres(string) {
    let novaString = '';
    for (let i = 0; i < string.length; i++) {
        novaString += string[i] + string[i];
    }
    return novaString
}

console.log(duplicarCaracteres("abc"));   // "aabbcc"
console.log(duplicarCaracteres("hello")); // "hheelllloo"



// 7. Números Divisíveis por 5
//Crie uma função que recebe um array de números e retorna apenas os números que são divisíveis por 5.

function divisiveisPor5 (array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 == 0) {
            novoArray.push(array[i]);
        }
    }
    return novoArray
}
console.log(divisiveisPor5([5, 10, 12, 15])); // [5, 10, 15]
console.log(divisiveisPor5([2, 4, 7]));       // []



// 8. Converter Minutos para Horas
//Crie uma função que recebe um número de minutos e retorna o equivalente em horas e minutos

function converterMinutos(num) {
    let horas = Math.floor(num / 60);
    let minutos = num % 60;
    return `${horas} horas(s) e ${minutos} minutos(s)`
    
}

console.log(converterMinutos(125)); // "2 horas e 5 minutos"
console.log(converterMinutos(90));  // "1 hora e 30 minutos"



//9. Contar Números Acima de X
//Crie uma função que recebe um array de números e um número X, e retorna quantos números do array são maiores que X.

function contarMaiores(array, x) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > x) {
            contador++
        }
    }
    return contador;
}

console.log(contarMaiores([10, 20, 30], 15)); // 2
console.log(contarMaiores([1, 2, 3], 5));     // 0



//10. Verificar Ordem Crescente
//Crie uma função que verifica se um array de números está em ordem crescente.

function verificarCrescente(array) {
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(verificarCrescente([1, 2, 3]));    // true
console.log(verificarCrescente([1, 3, 2]));    // false
console.log(verificarCrescente([10, 20, 30])); // true
