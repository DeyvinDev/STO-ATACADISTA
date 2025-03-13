//Ex1
import {soma,subtracao,multi,div} from "./calculadora.js";
console.log(">>>CALCULADORA<<<")
const n1 = 7
const n2 = 9
console.log("Soma: ", soma(n1, n2));
console.log("Subtração: ", subtracao(n1, n2));
console.log("Divisão: ", div(n1, n2));
console.log("Multiplicação: ", multi(n1, n2));
//Ex2
import moment from 'moment';
import { calcularIdade } from './calculadora.js';

console.log(">>> CALCULAR IDADE <<<");

const hoje = moment().year();

const anoNascimento = 1988;

console.log("Sua idade é", calcularIdade(hoje, anoNascimento));

