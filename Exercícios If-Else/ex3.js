const receber= require('prompt-sync')({sigint:false})
var salarioFixo, salarioTotal,comissao, numVendedor,totalVendas;
numVendedor=parseInt(receber("Digite o numero do vendedor:"));
totalVendas=parseInt(receber("Digite o total das vendas:"));
salarioFixo=parseInt(receber("Digite o valor do salario fixo:"))
switch (numVendedor){
    case 1:
        if(totalVendas<10000){
            comissao=totalVendas*0.03
            salarioTotal=salarioFixo+comissao
            console.log("A sua comissao foi de:",comissao)
            console.log("O seu salario total foi de:",salarioTotal)
            console.log("O seu salario fixo e de:",salarioFixo)
                
        }
        if(totalVendas>10000){
            comissao=totalVendas*0.05
            salarioTotal=salarioFixo+comissao
            console.log("A sua comissao foi de:",comissao)
            console.log("O seu salario total foi de:",salarioTotal)
            console.log("O seu salario fixo e de:",salarioFixo)
        }
        break
    case 2:
        if(totalVendas<10000){
            comissao=totalVendas*0.03
            salarioTotal=salarioFixo+comissao
            console.log("A sua comissao foi de:",comissao)
            console.log("O seu salario total foi de:",salarioTotal)
            console.log("O seu salario fixo e de:",salarioFixo)
                
        }
        if(totalVendas>10000){
            comissao=totalVendas*0.05
            salarioTotal=salarioFixo+comissao
            console.log("A sua comissao foi de:",comissao)
            console.log("O seu salario total foi de:",salarioTotal)
            console.log("O seu salario fixo e de:",salarioFixo)
        }
}