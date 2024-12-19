
//1. Verificar se um Número é Múltiplo de Outro
//Crie uma função que recebe dois números e verifica se o primeiro é múltiplo do segundo.


console.log(ehMultiplo(10, 2)); // true
console.log(ehMultiplo(7, 3));  // false



//2. Contar Letras em uma Palavra
//Crie uma função que recebe uma palavra e uma letra, e retorna quantas vezes a letra aparece na palavra.

console.log(contarLetra("banana", "a")); // 3
console.log(contarLetra("javascript", "j")); // 1



//3. Inverter uma String
//Crie uma função que recebe uma string e retorna a string invertida.

console.log(inverterString("hello")); // "olleh"
console.log(inverterString("javascript")); // "tpircsavaj"



//4. Somar Números Ímpares de um Array
//Crie uma função que recebe um array de números e retorna a soma de todos os números ímpares.

console.log(somarImpares([1, 2, 3, 4, 5])); // 9 (1 + 3 + 5)
console.log(somarImpares([2, 4, 6]));       // 0



//5. Encontrar Palavras Longas
//Crie uma função que recebe um array de palavras e retorna apenas as palavras com mais de 5 letras.

console.log(palavrasLongas(["casa", "elefante", "carro"])); // ["elefante"]
console.log(palavrasLongas(["sol", "lua", "estrela"]));     // ["estrela"]



//6. Filtrar Números Positivos
//Crie uma função que recebe um array de números e retorna apenas os números positivos.

console.log(filtrarPositivos([1, -2, 3, -4, 5])); // [1, 3, 5]
console.log(filtrarPositivos([-1, -2, -3]));      // []



//7. Calcular Média de Números Pares
//Crie uma função que recebe um array de números e retorna a média dos números pares.

console.log(mediaPares([1, 2, 3, 4, 6])); // 4 (média de 2, 4 e 6)
console.log(mediaPares([1, 3, 5]));       // 0 (nenhum número par)



//8. Criar um Contador de Vogais
//Crie uma função que recebe uma string e conta quantas vogais existem nela.

console.log(contarVogais("javascript")); // 3
console.log(contarVogais("programacao")); // 5



//9. Gerar Tabuada de um Número
//Crie uma função que recebe um número e retorna sua tabuada de 1 a 10.

console.log(gerarTabuada(5)); 
// [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

console.log(gerarTabuada(3)); 
// [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]



//10. Contar Números em um Intervalo
//Crie uma função que recebe dois números e conta quantos números existem entre eles, incluindo os próprios números.

console.log(contarNumeros(3, 7));  // 5 (3, 4, 5, 6, 7)
console.log(contarNumeros(10, 15)); // 6 (10, 11, 12, 13, 14, 15)