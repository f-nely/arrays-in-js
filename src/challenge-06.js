/**
 * Neste desafio, você receberá um Array chamado "numeros" que conterá números.
 * Utilize tudo que aprendeu até agora para multiplicar os números do Array por 3 e organizar cada um dos valores por ordem crescente
 */
const n = [51, 52, 74, 46, 20, 82, 59, 39, 77, 23];

function main(numbers) {
  numbers.sort();
  const result = numbers.map((items) => {
    return items * 3;
  });
  console.log(result);
}

main(n);

/*
    function main(numeros) {
      console.log(numeros.sort().map((numero) => numero * 3));
    }
*/
