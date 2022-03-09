function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++)
        if (num % divisor == 0) return false;
    return true;
}

let determinadoNumero = 50;

for (let i = 2; i < determinadoNumero; i++) {
    if (primeNumber(i)) {
        console.log(i);
        
    }
    
}


