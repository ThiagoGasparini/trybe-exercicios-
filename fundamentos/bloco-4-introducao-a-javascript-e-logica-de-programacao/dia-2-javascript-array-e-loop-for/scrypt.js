let numbers = [5, 9, 3, 19, 700, 8, 10, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += (numbers[index]) / numbers.length;
   
}
console.log(soma);

if (soma > 20) {
    console.log('Valor maior que 20');
}

else {
    console.log('valor menor que 20"');
}
