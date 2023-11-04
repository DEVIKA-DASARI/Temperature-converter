
var lastEdited = "celsius";

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

document.getElementById("celsius").onchange = function () {
  lastEdited = "celsius";
};
document.getElementById("fahrenheit").onchange = function () {
  lastEdited = "fahrenheit";
};
document.getElementById("kelvin").onchange = function () {
  lastEdited = "kelvin";
};

function convert() {
  console.log("Convert function called");
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var kelvin = parseFloat(document.getElementById("kelvin").value);

  if (lastEdited === "celsius") {
    var conversionF = celsius * 9 / 5 + 32;
    var conversionK = celsius + 273;
    document.getElementById("fahrenheit").value = Math.round(conversionF);
    document.getElementById("kelvin").value = Math.round(conversionK);
  } else if (lastEdited === "fahrenheit") {
    var conversionC = (fahrenheit - 32) * 5 / 9;
    var conversionK = conversionC + 273;
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("kelvin").value = Math.round(conversionK);
  } else if (lastEdited === "kelvin") {
    var conversionC = kelvin - 273;
    var conversionF = conversionC * 9 / 5 + 32;
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("fahrenheit").value = Math.round(conversionF);
  }
}


function reset() {
  console.log("Reset function called");
  document.getElementById("celsius").value = 0;
  document.getElementById("fahrenheit").value = 0;
  document.getElementById("kelvin").value = 0;
}
