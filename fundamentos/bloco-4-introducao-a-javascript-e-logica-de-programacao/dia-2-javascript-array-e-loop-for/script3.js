let meuArray= [0,12,11,2,10,30,10];

for (let i = 0; i < meuArray.length; i++) {
    if (meuArray[i] % 2 === 1) {
        console.log(meuArray[i]);
    }   

    else if (meuArray[i] % 2 !== 1) {
        console.log("nenhum valor ímpar encontrado");
    }
}
