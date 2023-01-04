

const nome = "Luiz Otario";
const  sobrenome = "Miranda";
const idade = 30;
const peso= 84;
const altura = 1.80;

let imc = Math.floor(peso / (altura * altura));

let anoNasmento = 2023 - idade;

 `${nome} ${sobrenome}, nascido no ano de ${anoNasmento} com a idade de ${idade} anos tem a taxa de IMC de ${imc}`


 let p = document.createElement("p")
 let div = document.querySelector("#div").appendChild(p).innerHTML = `${nome} ${sobrenome}, nascido no ano de ${anoNasmento} com a idade de ${idade} anos tem a taxa de IMC de ${imc}`

