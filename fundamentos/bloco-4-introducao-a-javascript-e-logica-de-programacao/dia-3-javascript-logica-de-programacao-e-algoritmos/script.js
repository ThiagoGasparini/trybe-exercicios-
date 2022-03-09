function fatorial(numero) {
    let num = 1;
    for (let i = numero; i > 1; i--) {
        num *= i;
    }
    return num;
}
console.log('Fatorial de 10 é: ', fatorial(10));