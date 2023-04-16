const receber =require('prompt-sync')({sigint:false})
var n1,n2,n3,n4,soma=0;
n1= parseInt(receber("Digite o valor do número 1:"))
n2= parseInt(receber("Digite o valor do número 2:"))
n3= parseInt(receber("Digite o valor do número 3:"))
n4= parseInt(receber("Digite o valor do número 4:"))
soma=n1+n2+n3+n4
console.log("A soma dos números digitados é:", soma);