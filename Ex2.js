const receber = require('prompt-sync')({sigint:true})

let n1,n2,n3,media=0;
n1=parseInt(receber("Digite a nota 1:"));
n2=parseInt(receber("Digite a nota 2:"));
n3=parseInt(receber("Digite a nota 3:"));
media=(n1+n2+n3)/3;
console.log("A media do aluno e:", media)
