let meuArray= [2,12,13,2,12,28,15];
let menor = 100;

for (let i = 0; i < meuArray.length; i += 1) {
   if (meuArray[i] < menor) {
     menor = meuArray[i];
   }
}

console.log (menor);