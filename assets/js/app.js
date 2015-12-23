// Taken from Daniel Eden
// https://github.com/daneden/daneden.me/blob/master/_assets/js/light-switch.js
// Toggle night theme
var d = document.documentElement,
t = document.querySelectorAll(".toggle-lights")[0],
m = localStorage.getItem("nightPreference");

if(m == "false") {
  d.classList.remove("night");
}

t.addEventListener("click", function(){
  if(d.classList.contains("night")) {
    d.classList.remove("night");
    localStorage.setItem("nightPreference", "false");
  } else {
    d.classList.add("night");
    localStorage.setItem("nightPreference", "true");
  }
});
