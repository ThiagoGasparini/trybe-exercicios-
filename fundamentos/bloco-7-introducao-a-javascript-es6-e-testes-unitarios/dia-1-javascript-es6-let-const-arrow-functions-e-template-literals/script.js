const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b) {
  return a - b;
});

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
); // será necessário alterar essa linha 😉

const fatorial = (valor) => {
  let contador = 1;

  for (let i = valor; i > 1; i--) {
    contador *= i;
  }
  return contador;
};
console.log(fatorial(5));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];


