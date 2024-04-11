var mas = document.querySelector("#suma");
var menos = document.querySelector("#resta")


var contador = 0

function sumar(){
  contador ++ ;
  document.getElementById("scoring").textContent = contador;
}

mas.addEventListener("click", sumar);

function restar(){
  contador -- ;
  document.getElementById("scoring").textContent = contador;
}

menos.addEventListener("click", restar);



// document.addEventListener('DOMContentLoaded', function() {
// });

