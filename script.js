var dados;

fetch('https://api.exchangeratesapi.io/latest')
  .then((response) => {
      return response.json();
  })
  .then ((data) => {
    dados = data;
  });

var baseQtd = document.querySelector("#baseQtd");
var base = document.querySelector("#base");

var cotadaQtd = document.querySelector("#cotadaQtd");
var cotada = document.querySelector("#cotada");

const math = () => {
  console.log(baseQtd.value)
}

baseQtd.addEventListener("change", math);
baseQtd.addEventListener("keyup", math); 

base.addEventListener("change", math);

cotadaQtd.addEventListener("change", math);
cotadaQtd.addEventListener("keyup", math); 

cotada.addEventListener("change", math);