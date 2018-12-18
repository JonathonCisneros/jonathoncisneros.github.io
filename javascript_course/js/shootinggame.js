var timer1 = null;
var el = null;
var score = 0;
var shots = 0;
function moveIt() {
  if(parseInt(el.style.left) > (screen.width) - 50) el.style.left = 0;
  el.style.left = parseInt(el.style.left) + 5 + 'px';
  el.style.top = 200 + (200 * Math.sin(parseInt( el.style.left)/50)) + 'px';
  timer1 = setTimeout(moveIt, 25);
}
function scoreUp() {
  score++;
}
function scoreboard() {
  document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;
}
window.onload = function() {
  el = document.getElementById("img1");
  el.onclick = scoreUp;
  document.getElementById("range").onclick = function() {
    shots++;
    scoreboard();
  }
  scoreboard();
  el.style.left = '50px';
  moveIt();
}
