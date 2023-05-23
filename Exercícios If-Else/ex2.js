const receber= require('prompt-sync')({sigint:false})
var n1,n2, soma, diferença;
n1=parseInt(receber("Digite o primeiro numero:"));
n2=parseInt(receber("Digte o segundo numero:"));
if(n1>n2){
    soma=n1+n2
    console.log("O numero 1 e maior que o numero 2, e a soma deles e", soma,"!");
}
if(n1<n2){
    diferença=n2-n1
    console.log("O numero 2 e maior que o numero 1, e a diferença deles e", diferença,"!");
}