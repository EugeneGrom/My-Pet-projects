var level = localStorage.getItem('level');
var allClicks = localStorage.getItem('allClicks');

document.getElementById("totalLevel").innerText = level || 0;
document.getElementById("resultNum").innerText = allClicks || 0;

// console.log(min)

function tryagain() {
  document.location = './../round1/round1.html';
}




