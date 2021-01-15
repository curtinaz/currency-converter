var dados;

fetch('https://api.exchangeratesapi.io/latest')
  .then((response) => {
      return response.json();
  })
  .then ((data) => {
    dados = data;
    baseMath()
  });

var baseQtd = document.querySelector("#baseQtd");
var base = document.querySelector("#base");

var cotadaQtd = document.querySelector("#cotadaQtd");
var cotada = document.querySelector("#cotada");

// MATEMÁTICA APLICADA

var baseTrue = 0;
var cotadaTrue = 0;
var rasaoBase = 0;
var rasaoCotada = 0;

const baseMath = () => {
  rasaoBase = dados.rates.USD/dados.rates.BRL
  cotadaQtd.value = (baseQtd.value*rasaoBase).toFixed(2);
}

const cotadaMath = () => {
  rasaoCotada = dados.rates.BRL/dados.rates.USD
  baseQtd.value = (cotadaQtd.value*rasaoCotada).toFixed(2);
}

// KEY EVENT LISTENERS

baseQtd.addEventListener("change", baseMath);
baseQtd.addEventListener("keyup", baseMath); 

base.addEventListener("change", baseMath);

cotadaQtd.addEventListener("change", cotadaMath);
cotadaQtd.addEventListener("keyup", cotadaMath); 

cotada.addEventListener("change", cotadaMath);

baseQtd.addEventListener("click", clickToSelect);
cotadaQtd.addEventListener("click", clickToSelect);