var objeto = []

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
xhr.send(JSON.stringify(this.response));
xhr.onload = function(){
  console.log(this.response);
  objeto = JSON.stringify(this.response);
  objeto = JSON.parse(objeto);
}