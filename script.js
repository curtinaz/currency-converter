var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
xhr.send();
xhr.responseType = "text";
xhr.onload = function(){
  console.log(this.response);
}