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
var rasao = 0;

const baseMath = () => {
  rasao = dados.rates.USD/dados.rates.BRL
  baseTrue = baseQtd.value*dados.rates.BRL
  cotadaTrue = baseQtd.value*dados.rates.USD
  cotadaQtd.value = (baseQtd.value*rasao).toFixed(2); // seila
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