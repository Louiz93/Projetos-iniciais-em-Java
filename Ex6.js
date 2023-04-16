//exercício sobre porcentagem

const receber=require('prompt-sync')({sigint:true})
var salarioBase,salarioReceber,salarioReceberGratificacao,salarioReceberImposto,gratificação=(5/100),imposto=(3.5/100);
salarioBase=parseInt(receber("Digite o valor do salário:"));
salarioReceberGratificacao=salarioBase+(salarioBase*gratificação);
console.log("O valor a receber com a gratificação é:", salarioReceberGratificacao);
salarioReceberImposto=salarioBase-(salarioBase*imposto)
console.log("O valor a receber com o desconto do imposto:", salarioReceberImposto);
salarioReceber=salarioBase+salarioReceberGratificacao-salarioReceberImposto;
console.log("O valor a receber com os descontos e gratificações é:", salarioReceber);