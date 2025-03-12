//Criando módulo
//Exportar módulo

export function imc(peso,altura){
    return peso / (altura * altura)
}
export const tabelaimc = [
    {limite: 18.5, classificados: "magreza"},
    {limite: 24.9, classificados: "normal"},
    {limite: 29.9, classificados: "sobrepeso"},
    {limite: 34.9, classificados: "Obesidade Grau I"},
    {limite: 39.9, classificados: "Obesidade Grau II"},
    {limite: 40.0, classificados: "Obesidade Grau III"},
]