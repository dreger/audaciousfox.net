// Taken from Daniel Eden
// https://github.com/daneden/daneden.me/blob/master/_assets/js/light-switch.js
// Toggle night theme
var d = document.documentElement,
lightSwitch = document.querySelectorAll(".toggle-lights")[0],
lightOff = localStorage.getItem("nightPreference");

if(lightOff == "true") {
  d.classList.add("night");
} else {
  d.classList.remove("night");
}

lightSwitch.addEventListener("click", function(){
  if(d.classList.contains("night")) {
    d.classList.remove("night");
    localStorage.setItem("nightPreference", "false");
  } else {
    d.classList.add("night");
    localStorage.setItem("nightPreference", "true");
  }
});
