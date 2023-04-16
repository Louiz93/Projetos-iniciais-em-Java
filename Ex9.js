const receber=require('prompt-sync')({sigint:false})
var base, altura, area;
base=parseInt(receber("Digite o valor da base:"))
altura=parseInt(receber("Digite o valor da base:"))
area=(base*altura)/2;
console.log("A area do triangulo e de:", area);