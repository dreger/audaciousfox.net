// Taken from Daniel Eden
// https://github.com/daneden/daneden.me/blob/master/_assets/js/light-switch.js
// Toggle night theme


var d = document.documentElement,
nightTime = localStorage.getItem("nightTime");

if(nightTime == "false") {
  d.classList.remove("night");
} else {
  d.classList.add("night");
}

window.onkeyup = function(e) {
 var key = e.keyCode ? e.keyCode : e.which;
 if (key == 76) { switchLights(); }
}

function switchLights(){
  if(d.classList.contains("night")) {
    d.classList.remove("night");
    localStorage.setItem("nightTime", "false");
  } else {
    d.classList.add("night");
    localStorage.setItem("nightTime", "true");
  }
};
