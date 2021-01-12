var xhr = new XMLHttpRequest();
xhr.open("GET", "foo.txt", true);
xhr.send();
xhr.responseType = "text";
xhr.onload = function(){
  console.log(this.response);
}