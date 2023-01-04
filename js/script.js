
let pessoas = [{nome:"Fernada"},{nome:"Fabiano"},{nome:"Fabricio"},{nome:"Ada"},{nome:"Fran"},{nome:"Antonio"},{nome:"Maurina"},{nome:"Alline"},{nome:"jane"},
{nome:"Albertino"},{nome:"Igor"}]


let imprimirLista = pessoas.map((pessoas,i) => 
{
    let ul = document.querySelector("#ul");

    var li = document.createElement("li");
    ul.appendChild(li).innerHTML = pessoas.nome
  
    console.log(li) 
} )


 

