let meuArray= [,12,13,2,12,28,1];
let maior = 0;

for (let i = 1; i < meuArray.length; i++) {
   if ( meuArray[i] > maior ) {
      maior = meuArray[i];
   }
}

console.log(maior);