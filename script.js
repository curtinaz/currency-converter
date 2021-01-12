var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
xhr.send();
xhr.onload = function(){
  console.log(this.response);
}
objeto = JSON.parse(xhr.response)