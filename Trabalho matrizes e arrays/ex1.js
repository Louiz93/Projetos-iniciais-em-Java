const ler = require ('prompt-sync')({sigint:false})
let n1=0;n2=0;n3=0;n4=0;n5=0;n6=0;n7=0;n8=0;n9=0;n10=0;
n1=parseInt(ler("Digite o primeiro número:"))
n2=parseInt(ler("Digite o segundo número:"))
n3=parseInt(ler("Digite o terceiro número:"))
n4=parseInt(ler("Digite o quarto número:"))
n5=parseInt(ler("Digite o quinto número:"))
n6=parseInt(ler("Digite o sexto número:"))
n7=parseInt(ler("Digite o sétimo número:"))
n8=parseInt(ler("Digite o oito número:"))
n9=parseInt(ler("Digite o nove número:"))
n10=parseInt(ler("Digite o décimo número:"))

function quadrado(x){
    if(x<=1){
        return 1
    }else{
        return x * x
    }
}
console.log("O quadrado do primeiro numero e:",  quadrado(n1))
console.log("O quadrado do segundo numero e:",  quadrado(n2))
console.log("O quadrado do terceiro numero e:",  quadrado(n3))
console.log("O quadrado do quarto numero e:",  quadrado(n4))
console.log("O quadrado do quinto numero e:",  quadrado(n5))
console.log("O quadrado do sexto numero e:",  quadrado(n6))
console.log("O quadrado do setimo numero e:",  quadrado(n7))
console.log("O quadrado do oitavo numero e:",  quadrado(n8))
console.log("O quadrado do nono numero e:", quadrado(n9))
console.log("O quadrado do décimo numero e:",  quadrado(n10))
