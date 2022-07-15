var welcome = document.getElementById("welcome").style;
var to = document.getElementById("to").style;
var my = document.getElementById("my").style;
var site = document.getElementById("site").style;

var container = document.getElementById("container").style;

var bull = document.getElementById("bull").style;

var pokhara = document.getElementById("pokhara").style;
var rara = document.getElementById("rara").style;

var mustang = document.getElementById("mustang").style;
var pashupati = document.getElementById("pashupati").style;

welcome.fontSize = to.fontSize = my.fontSize = site.fontSize = "1px";
container.position = "fixed";

to.display = my.display = site.display = "none";

function scrolled() {
  let value = window.scrollY;
  console.log(value);
  container.display = "block";

  if (value >= 0 && value <= 161) {
    container.marginTop = value * 1.3 + "px";
    welcome.fontSize =
      to.fontSize =
      my.fontSize =
      site.fontSize =
        value / 2 + "px";

    welcome.left = to.left = my.left = site.left = "0px";
    bull.display = "none";
  }

  if (value >= 161) {
    welcome.marginLeft = value * 0.1 + "px";
    bull.display = "block";
    bull.marginLeft = value + "px";
  }
  if (value >= 161) {
    to.marginLeft = value * 0.55 + "px";
    to.display = "block";
  }
  if (value >= 161) {
    my.marginLeft = value * 0.7 + "px";
    my.display = "block";
  }
  if (value >= 161) {
    site.marginLeft = value + "px";
    site.display = "block";
  }

  if (value >= 1100) {
    container.display = "none";
  }

  //   pokhara
  if (value >= 1200 && value <= 1500) {
    pokhara.display = "block";
  } else {
    pokhara.display = "none";
  }

  //   rara
  if (value >= 1600 && value <= 1900) {
    rara.display = "block";
  } else {
    rara.display = "none";
  }

  //   mustang
  if (value >= 2000 && value <= 2200) {
    mustang.display = "block";
  } else {
    mustang.display = "none";
  }

  //   pashupati
  if (value >= 2300 && value <= 2600) {
    pashupati.display = "block";
  } else {
    pashupati.display = "none";
  }
}
