//exercício sobre porcentagem



const receber= require('prompt-sync')({sigint:true})
var valorSalario, valorPercentualAumento, novoSalario,valorAumento ;
valorSalario=parseInt(receber("Digite o valor do salário:"))
valorPercentualAumento=parseInt(receber("Digite o valor percentual do aumento:"))
novoSalario=valorSalario+valorSalario*(valorPercentualAumento/100)
console.log("O valor do novo salário com aumento de", valorPercentualAumento, " é:", novoSalario)
valorAumento=novoSalario-valorSalario;
console.log("O valor do aumento em relação ao salário antigo foi de:", valorAumento)