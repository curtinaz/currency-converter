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

// MATEMÁTICA APLICADA

var baseTrue = 0;
var cotadaTrue = 0;

const baseMath = () => {
  baseTrue = baseQtd.value*dados.rates.BRL
  cotadaQtd.value = (dados.rates.USD/baseTrue).toFixed(2);
}

const cotadaMath = () => {
  cotadaTrue = cotadaQtd.value*dados.rates.USD
  baseQtd.value = (dados.rates.BRL/cotadaTrue).toFixed(2);
}

// KEY EVENT LISTENERS

baseQtd.addEventListener("change", baseMath);
baseQtd.addEventListener("keyup", baseMath); 

base.addEventListener("change", baseMath);

cotadaQtd.addEventListener("change", cotadaMath);
cotadaQtd.addEventListener("keyup", cotadaMath); 

cotada.addEventListener("change", cotadaMath);