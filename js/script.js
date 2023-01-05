




function enviarFormulario (){
   let form = document.querySelector(".form")
  
   function previnerEventoForm (event){
       event.preventDefault()
   }

   form.addEventListener("submit",previnerEventoForm,)

}

enviarFormulario()