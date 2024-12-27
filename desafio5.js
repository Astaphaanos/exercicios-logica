
//1. Verificar se um Número é Múltiplo de Outro
//Crie uma função que recebe dois números e verifica se o primeiro é múltiplo do segundo.


function ehMultiplo(num1=0, num2=0) {
    if (num1 % num2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(ehMultiplo(10, 2)); // true
console.log(ehMultiplo(7, 3));  // false



//2. Contar Letras em uma Palavra
//Crie uma função que recebe uma palavra e uma letra, e retorna quantas vezes a letra aparece na palavra.

function contarLetra(palavra, letra) {
    let contador = 0 

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            contador++
        }
    }
    return contador;
}


console.log(contarLetra("banana", "a")); // 3
console.log(contarLetra("javascript", "j")); // 1



//3. Inverter uma String
//Crie uma função que recebe uma string e retorna a string invertida.

function inverterString(string) {
    return string.split("").reverse().join("")
}

console.log(inverterString("hello")); // "olleh"
console.log(inverterString("javascript")); // "tpircsavaj"



//4. Somar Números Ímpares de um Array
//Crie uma função que recebe um array de números e retorna a soma de todos os números ímpares.

function somarImpares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            soma += array[i]
        }
    }
    return soma
}


console.log(somarImpares([1, 2, 3, 4, 5])); // 9 (1 + 3 + 5)
console.log(somarImpares([2, 4, 6]));       // 0



//5. Encontrar Palavras Longas
//Crie uma função que recebe um array de palavras e retorna apenas as palavras com mais de 5 letras.

function palavrasLongas(array) {
    let resultado = []
    for (let i =0; i < array.length; i++) {
        if (array[i].length > 5) {
            resultado.push(array[i])
        } 
    }
    return resultado;
}

console.log(palavrasLongas(["casa", "elefante", "carro"])); // ["elefante"]
console.log(palavrasLongas(["sol", "lua", "estrela"]));     // ["estrela"]



//6. Filtrar Números Positivos
//Crie uma função que recebe um array de números e retorna apenas os números positivos.

function filtrarPositivos(array) {
    let numPositivos = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            numPositivos.push(array[i])
        }
    }
    return numPositivos;
}

console.log(filtrarPositivos([1, -2, 3, -4, 5])); // [1, 3, 5]
console.log(filtrarPositivos([-1, -2, -3]));      // []



//7. Calcular Média de Números Pares
//Crie uma função que recebe um array de números e retorna a média dos números pares.

function mediaPares(array) {
    let soma = 0;
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            soma += array[i]
            contador++
        }
    }
    return contador === 0 ? 0 : soma / contador
}

console.log(mediaPares([1, 2, 3, 4, 6])); // 4 (média de 2, 4 e 6)
console.log(mediaPares([1, 3, 5]));       // 0 (nenhum número par)



//8. Criar um Contador de Vogais
//Crie uma função que recebe uma string e conta quantas vogais existem nela.

function contarVogais(string) {
    let contador = 0
    let vogais = "aeiou"

    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i].toLowerCase())) {
            contador++
        }
    }
    return contador
}


console.log(contarVogais("javascript")); // 3
console.log(contarVogais("programacao")); // 5


//10. Contar Números em um Intervalo
//Crie uma função que recebe dois números e conta quantos números existem entre eles, incluindo os próprios números.

function contarNumeros(inicio, fim) {
    if (inicio > fim) {
        return 0
    }
    return (fim - inicio) + 1
}

console.log(contarNumeros(3, 7));  // 5 (3, 4, 5, 6, 7)
console.log(contarNumeros(10, 15)); // 6 (10, 11, 12, 13, 14, 15)