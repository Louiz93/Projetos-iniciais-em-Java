const receber = require ('prompt-sync')({sigint:false})
var n1, n2, n3,  raizQ, quadrado, diferença, soma;
n1=parseInt(receber("Digite o primeiro número:"));
if(n1>0){
    raizQ= Math.sqrt(n1);
    console.log("O numero digitado e positivo, e sua raiz quadrada e:", raizQ);
}
if(n1<0){
    quadrado=(n1*n1);
    console.log("O numero digitado e negativo, e o seu quadrado e:", quadrado);
}
n2=parseInt(receber("Digite o segundo numero:"));
if(n2>10 && n2<100){
console.log("Número entre 10 e 100. Intervalo permitido");
}
n3=parseInt(receber("Digite o terceiro numero:"));
if(n3<n2){
diferença=n2-n3
console.log("O número 3 e menor que o numero 2, e a diferença deles e", diferença);
}
if(n3>n2){
    soma=n2+n3
    console.log("O numero 3 e maior que o numero 2, e a soma deles e", soma);
}