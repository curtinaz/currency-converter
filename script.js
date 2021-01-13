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

const baseMath = () => {
  console.log(baseQtd.value)
  console.log(cotadaQtd.value)
}

const cotadaMath = () => {
  console.log(baseQtd.value)
  console.log(cotadaQtd.value)
}

baseQtd.addEventListener("change", baseMath);
baseQtd.addEventListener("keyup", baseMath); 

base.addEventListener("change", baseMath);

cotadaQtd.addEventListener("change", cotadaMath);
cotadaQtd.addEventListener("keyup", math); 

cotada.addEventListener("change", math);