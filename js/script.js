
var CARDS = CARDS;

let pessoas = [{nome:"Fernada"},{nome:"Fabiano"},{nome:"Fabricio"},{nome:"Ada"},{nome:"Fran"},{nome:"Bicudo"},{nome:"Maurina"},{nome:"Alline"},{nome:"jane"},
{nome:"Albertino"},{nome:"Igor"},{nome:"Orlando"}]


let imprimirLista = pessoas.map((pessoas,i) => 
{
    let tabuleiro = document.querySelector("#tabuleiro");

    var cards = document.createElement("div");
 
    cards.classList.add('cardsFront') 

    tabuleiro.appendChild(cards).innerHTML = pessoas.nome
  
} )


 

