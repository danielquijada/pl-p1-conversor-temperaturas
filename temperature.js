"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
//expesion regular: /^\s*([-+]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\s*([cCfF])\s*$/
function calculate() {
  var result;
  var result2;
  var celtemp;
  var original       = document.getElementById("original");
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*º?([CcFfKk])\s*$/i;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5) + 32;
      result = result.toFixed(2) + " Fahrenheit"

      result2 = num + 273.15
      result2 = result2.toFixed(2) + " Kelvin"
      celtemp = num;
    }
    else if (type == 'f' || type == 'F') {
      result = (num - 32) * 5/9;
      celtemp = result;
      result2 = result + 273.15;

      result = result.toFixed(2) + " Celsius"
      result2 = result2.toFixed(2) + " Kelvin"
   } else {
      result2 = (num - 273.15) * 1.8 + 32;
      result = num - 273.15;
      celtemp = result;

      result = result.toFixed(2) + " Celsius"
      result2 = result2.toFixed(2) + " Fahrenheit"
   }

   //Cambia el color del output según la temperatura:
   if (celtemp < 0)
      document.getElementById("converted").setAttribute("temp", "cold");
   else if (celtemp > 40)
      document.getElementById("converted").setAttribute("temp", "hot");
   else
      document.getElementById("converted").setAttribute("temp", "warm");

   converted.innerHTML = result + ", " + result2;
  }
  else {
    converted.innerHTML = "ERROR! Utilice el formato: 32f, -15.4ºC, 12K, etc.";
  }
}
