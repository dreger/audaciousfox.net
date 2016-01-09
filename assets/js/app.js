// Taken from Daniel Eden
// https://github.com/daneden/daneden.me/blob/master/_assets/js/light-switch.js
// Toggle night theme


var d = document.documentElement,
nightTime = localStorage.getItem("nightTime");

if(nightTime == "true") {
  d.classList.add("night");
} else {
  d.classList.remove("night");
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



document.querySelector('.header').addEventListener('touchend', function (e) {
    var self = this
    this.addEventListener('touchend', secondTap)
    setTimeout(function () {
        self.removeEventListner('touchend', secondTap);
        switchLights();
    }, 100)
})