

 function meuEscopo () {
   const form = document.querySelector(".form");
   const res = document.querySelector("#res");
    
   const pessoas = []

   function recebeEventoForm (evento){
     evento.preventDefault();
    
     const nome = form.querySelector(".nome").value;
     const sobrenome = form.querySelector(".sobrenome").value;
     const peso = form.querySelector(".peso").value;
     const altura = form.querySelector(".altura").value;
     
    pessoas.push({nome,sobrenome,peso,altura})
      
    console.log(pessoas)
   }

 form.addEventListener("submit", recebeEventoForm );

}

meuEscopo()























// // let n = 10
// let imprimir = document.querySelector("#div")


// let pessoas = [{nome:"Fernada"},{nome:"Fabiano"},{nome:"Fabricio"},{nome:"Ada"},{nome:"Fran"},{nome:"Bicudo"},{nome:"Maurina"},{nome:"Alline"},{nome:"jane"}]

// pessoas.push({nome:"Giovani"})

// console.log(pessoas)

// function sortear(){
//     let sorte = Math.round(Math.random() *  n);

//   if( sorte === 5){
//     imprimir.innerHTML = "Você é sortudo! numero 5"
//   }else{imprimir.innerHTML = sorte } 
// }


