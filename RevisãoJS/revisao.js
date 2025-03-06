/*// /*COMENTARIO 
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

gays.forEach(gay => console.log(gay)) */


//objetos
let pessoa = {
    nome: "cleiton",
    idade: 20,
    altura: 130
} 
console.log(pessoa.nome)
pessoa.idade = 40
console.log(pessoa.idade)
//Desatribuição de Objetos
const {peso,altura} = pessoa
console.log(peso)
console.log(altura)
//propagação de objetos
const  endereço = {
    cidade: "Rio Branco",
    UF: "Acre"
} 

const pessoacompleto = {
    ...pessoa,
    ...endereço
}

console.log(pessoacompleto)

//funções
//Declaração
function somar(numA,numB){
    const resultado = numA + numB
    console.log(resultado)
}
//USO
somar(2,2)
somar(7,4)
somar(9,1)

//função anonima

const subtrair = function (numA, numB){
    const resultado = numA - numB
    console.log(resultado)
}
subtrair(7,9)

//arrow function
const multiplicar = (numA, numB) => numA * numB
multiplicar(7,7)
console.log(multiplicar)

/*import {imc} from "C:\GAROTO DE PROGRAMA\RevisãoJS\calculadoraIMC.js"
const res = imc(150,120)
console.log(res)*/