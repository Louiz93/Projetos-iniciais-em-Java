let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
]
function somaE(x){
let somaEsq=0
for(let i=0;i<5;i++){
    for(j=0;j<5;j++){
        if(i+j<4){
            somaEsq+= matriz[i][j]
        }
    }
}
return somaEsq
}
function somaD(x){
    let somaDir = 0;
    let tamanho = matriz.length;

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (i + j <= 7 && i < j) { 
                somaDir += matriz[i][j];
            }
            }
        }return somaDir;
    }
    


    function somaMeio(x){
        let somaM = 0;
        let tamanho = matriz.length;
    
        for (let i = 0; i < tamanho; i++) {
            for (let j = 0; j < tamanho; j++) {
                if (i + j <4 && i<j) { 
                    somaM += matriz[i][j];
                }
                }
            }return somaM;
        }
        
    






 console.log(somaE(matriz))
 console.log(somaD(matriz))
 console.log(somaMeio(matriz))
 

 
