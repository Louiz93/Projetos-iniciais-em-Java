//exercício sobre porcentagem

const receber=require('prompt-sync')({sigint:false});
var salarioBase,salarioReceber, gratificação=50,imposto=(7/100);
salarioBase=parseInt(receber("Digite o valor do salário base:"));
salarioReceber=salarioBase-(salarioBase*imposto)+gratificação;
console.log("O salário a receber é:", salarioReceber);
