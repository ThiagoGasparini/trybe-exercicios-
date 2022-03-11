let array = [2, 30, 6, 17, 18, 10];
let maior = array[0]
let indice = 0;

function retornaMaiorIndice() {
        
    for (let index = 1; index < array.length; index+=1){
        if (array[index] > maior) {
            maior = array[index];
            indice = index
        }
    } 
    return indice;
}

console.log(retornaMaiorIndice());