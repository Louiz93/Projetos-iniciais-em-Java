const receber = require('prompt-sync')({sigint:false})
var n1,n2,n3;
n1=parseInt(receber("Digite o primeiro numero:"));
n2=parseInt(receber("Digite o segundo numero:"))
n3=parseInt(receber("Digite o terceiro numero:"))

if(n1 > n2 & n1>n3){
   
    console.log("O primeiro numero e o maior.", n1)
}
if(n2 > n1 & n2> n3){
    
    console.log("O segundo numero e maior.", n2)
}
if(n3 > n1 & n3>n2){
   
    console.log("O terceiro numero e o maior.", n3)
}