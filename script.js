var objeto = []

var xhr = new XMLHttpRequest();

xhr.responseType = document;
xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);

xhr.send();