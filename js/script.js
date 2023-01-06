


   let form = document.querySelector(".form");
   form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector(".peso");
    const inputaltura = e.target.querySelector(".altura");

    const peso = Number(inputPeso.value)
    const altura = Number(inputaltura.value);
    
    if (!peso){
      setResultado("Peso invalido", false);
      return;
    }

    if (!altura){
      setResultado("altura invalida", false)
      return
    }

    const imc= ObterImc(peso, altura);
    const nivelImc = resIndiceImc(imc)

    console.log(nivelImc)
    
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true)
});

function ObterImc(peso, altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function resIndiceImc(imc){
  const nivel = ["Abaixo do peso","Peso normal","Excesso de peso","Obesidade classe I","Obesidade classe II","Obesidade classe III"];

if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc <  18.5) return nivel[0];
}


function setResultado(msg,isValid) {
  const res = document.querySelector("#res")

 res.innerHTML = msg

} 