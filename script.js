var dados;

fetch('https://api.exchangeratesapi.io/latest')
  .then( (response) => {
      return response.json();
  })
  .then ( (data) => {
    dados = data;
  });

var baseQtd = document.querySelector("#baseQtd");

const math = () => {
  console.log("Mudou")
}

baseQtd.addEventListener("change", math);

