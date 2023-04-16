//exercicio pra descobrir a idade

const receber=require('prompt-sync')({sigint:false})
var anoNascimento, anoAtual=2023, idade;
anoNascimento=parseInt(receber("Digite o ano de nascimento:"))
idade=anoAtual-anoNascimento;
console.log("A idade é de:", idade,"anos")

