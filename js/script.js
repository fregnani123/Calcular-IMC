


let teste = "ola teste"

   let form = document.querySelector(".form");
   form.addEventListener("submit", (e) => {e.preventDefault();

    const inputPeso = e.target.querySelector(".peso");
    const inputaltura = e.target.querySelector(".altura");

    const peso = Number(inputPeso.value)
    const altura = Number(inputaltura.value)

  console.log(altura, peso)

})
  function setResultado(msg) {
    const res = document.querySelector(".res")
    

    res.innerHTML = msg
  } 