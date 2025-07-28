/**
 * Neste desafio, você receberá um Array chamado "numeros" que conterá números.
 * Imprima no "console.log()" o resultado da multiplicação por 2 de cada item do array.
 */

function main(numeros) {
  /*   for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element * 2);
  } */
  for (const numero of numeros) {
    console.log(numero * 2);
  }
}

main([51, 52, 74, 46, 20, 82, 59, 39, 77, 23]);
