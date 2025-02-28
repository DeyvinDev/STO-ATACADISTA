// /*COMENTARIO 
// COMENTARIO TB
//VARIÁVEIS
//var --> Não usa no dia a dia
//let nome = "Bluezao"
const idade = 14; 
//nome = 'teste'
//idade = 13;
//Operadores Aritméticos
const soma = 7+7;
const subtra = 7-7;
const mult = 7*7;
const div = 7/7;
const resto = 9%7;
//Operadores de Comparação
const igual = 7==7;
const diferente = 7!=7;
const maior = 9>7;
const menor = 7<9;
const maiorouigual = 9>= 7;
const menorouigual = 7<=9;
//Condicionais 
if(idade > 18){
    console.log("ja pode transar")
}
else{
console.log("vc é gay")
}

//Operador Ternario
const mensagem = idade >= 18 ? "Maior de Idade" : "Vc é gay"
console.log("Mensagem ->", mensagem)

//Arrays - Lista
const gays = ["Ale","Matheus","Firmino","Gaybriel"]
console.log("o mais gay é o ", gays[0])
console.log(gays.length) // conta quantos tem

gays.push("SIDINEI") // acrescenta na lista

console.log(gays.length)

gays.forEach(gay => console.log(gay))



