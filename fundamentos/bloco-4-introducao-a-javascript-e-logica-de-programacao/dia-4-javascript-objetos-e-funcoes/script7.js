let array = [2, 3, -8, 70, 15, 11, 1];
let maior = array[0]
let indice = 0;

function retornaMaiorIndice() {
        
    for (let i = 0; i < array.length; i+=1){
        if (array[i] < maior) {
            maior = array[i];
            indice = i
        }
    } 
    return indice;
}

console.log(retornaMaiorIndice());