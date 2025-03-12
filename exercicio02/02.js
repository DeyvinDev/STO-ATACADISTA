/*Exercício 1: Manipulação de Strings
Crie um script que receba uma string e faça as seguintes operações:
1. Converta a string para maiúsculas.
2. Converta a string para minúsculas.
3. Inverta a string.
4. Substitua todas as ocorrências de uma letra específica por outra.*/
//Maiusculo
let nome = ("Deyvin Garoto de Programa")
maiusculo = nome.toUpperCase()
console.log(maiusculo)
//Minusculo
minusculo = nome.toLowerCase()
console.log(minusculo)
//Inverter
let invertido = nome.split('').reverse().join('');
console.log(invertido);
//Substituir letras
nomenovo = nome.replace("vin","vinho").replace("oto","otinho").replace("ama","aminha") 
console.log(nomenovo) 

/*Exercício 2: Operadores Aritméticos e de Comparação
Crie um script que receba dois números e faça as seguintes operações:
1. Some os dois números.
2. Subtraia o segundo número do primeiro.
3. Multiplique os dois números.
4. Divida o primeiro número pelo segundo.
5. Verifique se o primeiro número é maior que o segundo.
Utilize os números 15 e 5 para os testes.*/
//1. Some os dois números.
let soma = (A, B) => {
    let res = A + B;
    return res; 
  };
  
  let A = 5;
  let B = 15;
  console.log(soma(A, B));
//2. Subtraia o segundo número do primeiro.
let Sub = (A, B) => {
    let res = A - B;
    return res; 
  };
  
  console.log(Sub(A, B));

//3. Multiplique os dois números.
  let mult = (A, B) => {
    let res = A * B;
    return res
  };

  console.log(mult(A, B));

//4. Divida o primeiro número pelo segundo.
let div = (A, B) =>{
    let res = A / B;
    return res
};
console.log(div(A, B))

//5. Verifique se o primeiro número é maior que o segundo.
if (A<B){
    console.log("é menor")
}else{
    console.log("não é menor")
}

/*Exercício 3: Estruturas de Controle
Crie um script que receba uma idade e verifique se a pessoa é:
1. Menor de idade.
2. Maior de idade.
3. Idosa (idade >= 65).
Utilize a idade 70 para os testes.*/
let idade = 70
if(idade<18){
    console.log("é menor de idade")
}else{
    console.log("não é menor de idade")
}if(idade>18 , idade<65){
    console.log("é maior de idade mas o inss não aceita ainda")
}else{
    console.log("não é maior de idade, ou já passou do ponto")
}if(idade>=65){
    console.log("é velhote o inss aceita ")
}else{
    console.log("ainda não é chegada sua hora")
}        

/*Exercício 4: Laços de Repetição
Crie um script que imprima os números de 1 a 100 usando:
1. Um laço for .*/
for(let i = 0; i<101 ; i++){
    console.log(i)
}

//Exercício 5: Funções
//Crie um script que tenha uma função que receba um número e retorne:

//1. O dobro do número.
function dobro(i){
    const resultado = i * 2;
    console.log(resultado)
}
let i = 5;
dobro(i)
//2. O triplo do número.
function triplo(i){
    const resultado = i * 3;
    console.log(resultado)
}
triplo(i)
//3. O quadrado do número.
function quadrado(i){
    const resultado = i * i;
    console.log(resultado)
}
quadrado(i)
//Utilize o número 5 para os testes.

//Exercício 6: Arrays
//Crie um script que receba um array de números e faça as seguintes operações:
let array = [10, 20, 30, 40, 50];
//1. Adicione um número ao final do array.
array.push(328);
//2. Remova o primeiro número do array.
array.shift(10);
//3. Encontre o maior número do array.
let numeromaior = Math.max(...array)
console.log(numeromaior)

//4. Encontre o menor número do array.
let numeromenor = Math.min(...array)
console.log(numeromenor)
//Utilize o array [10, 20, 30, 40, 50] para os testes.

//Exercício 7: Métodos de Arrays
//Crie um script que receba um array de strings e faça as seguintes operações:
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]
//1. Converta todas as strings para maiúsculas.
let frutagrande = frutas.map(fruta => fruta.toUpperCase());
console.log(frutagrande)
//2. Filtre as strings que começam com a letra 'A'.
let frutasComA = frutas.filter(fruta => fruta.toLowerCase().startsWith('a'));
console.log(frutasComA)
//3. Crie um novo array com o comprimento de cada string.
let comprimentofruta = frutas.map(fruta => fruta.length);
console.log(comprimentofruta)
//Utilize o array ["Maçã", "Banana", "Abacaxi", "Laranja"] para os testes.

//Exercício 8: Objetos
//Crie um script que receba um objeto representando uma pessoa e faça as seguintes
//operações:
let ID = {
     nome: "Carlos", idade: 28, cidade: "São Paulo" }
//1. Adicione uma nova propriedade ao objeto.
const estilo = {
    cor: "negão",
    estilo: "muito"
}
const pessoacompleto = {
    ...ID,
    ...estilo}
    console.log(pessoacompleto);
//2. Remova uma propriedade do objeto.
delete ID.cor;
console.log(ID)
//3. Liste todas as propriedades do objeto.
propriedades = Object.keys(ID)
console.log(propriedades)
//Utilize o objeto { nome: "Carlos", idade: 28, cidade: "São Paulo" } para os testes.

//Exercício 9: Desestruturação de Objetos
//Crie um script que receba um objeto representando um livro e faça as seguintes
//operações:
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
  };
//1. Desestruture o título e o autor do objeto.
let[titulo, autor] = informações;
//2. Crie uma função que receba o objeto e retorne uma string com o título e o
//autor.
  // Definindo o objeto 'livro'
  
  // Função que recebe o objeto 'livro' e retorna uma string com o título e autor
  function obterInformações(livro) {
    let { titulo, autor } = livro;
    
    return `Título: "${titulo}", Autor: ${autor}`;
  }
  console.log(obterInformações(livro));   
//Utilize o objeto { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 }
//para os testes.
//Exercício 10: Módulos
//Crie dois scripts, um para exportar funções e outro para importá-las e utilizá-las:
//1. No primeiro script, exporte uma função que calcule a área de um círculo.
// Função para calcular a área de um círculo
export function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
  }
  
//2. No segundo script, importe a função e calcule a área de um círculo com raio 5.
// Importando a função do arquivo 'calculos.js'
import { calcularAreaCirculo } from '\GAROTO DE PROGRAMA\exercicio02';

let raio = 5;

let area = calcularAreaCirculo(raio);

console.log(`A área do círculo com raio ${raio} é: ${area}`);
