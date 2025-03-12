console.log("cupinxa")
import{imc,tabelaimc} from "./calculadoraIMC.js"

console.log(">>>TABELA IMC<<<")
console.table(tabelaimc)
const peso = 100
const altura = 2.00

const resultado = imc(peso, altura)
console.log("Seu IMC (Índice de Massa Corporal) é:")
console.log (resultado.toFixed(2))

//importar um módulo externo, uma biblioteca
import moment from "moment";
const hoje = moment().locale('pt-br')
console.log(hoje.format("DD/MM/YYYY"))
