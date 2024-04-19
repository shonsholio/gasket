
var cero = document.querySelector("#cero");
var uno = document.querySelector("#uno");
var dos = document.querySelector("#dos");
var tres = document.querySelector("#tres");

// var menos = document.querySelector("#resta")


var contador = 0

function sumarUno(){
  contador ++ ;
  document.getElementById("scoring").textContent = contador;
}

uno.addEventListener("click", sumarUno);

function sumarDos(){
  contador += 2;
  document.getElementById("scoring").textContent = contador;
}

dos.addEventListener("click", sumarDos);

function sumarTres(){
  contador += 3;
  document.getElementById("scoring").textContent = contador;
}

tres.addEventListener("click", sumarTres);


// function restar(){
//   contador -- ;
//   document.getElementById("scoring").textContent = contador;
// }

// menos.addEventListener("click", restar);



// document.addEventListener('DOMContentLoaded', function() {
// });

