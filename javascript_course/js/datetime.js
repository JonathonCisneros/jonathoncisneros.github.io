function tellTime() {
  var div1 = document.getElementById("div1");
  var out = "";
  var now = new Date();
  out += "<br/>Your browser's JavaScript is enabled!";
  out += "<br/>The current date and time are:";
  out += "<br/> Date: " + now.getDate();
  out += "<br/> Month: " + now.getMonth();
  out += "<br/> Year: " + now.getFullYear();
  out += "<br/> Hours: " + now.getHours();
  out += "<br/> Minutes: " + now.getMinutes();
  out += "<br/> Seconds: " + now.getSeconds();
  div1.innerHTML = out;
}
window.onload = function() {
  document.getElementById("div1").onload = function() {
    location.reload();
  }
  tellTime();
}
