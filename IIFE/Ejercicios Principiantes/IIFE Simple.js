// Ámbito global
var x = 10;
var y = 20;

// IIFE que define variables con los mismos nombres que en el alcance global
(function() {
  var x = 50;
  var y = 60;

  console.log("Dentro de la IIFE:");
  console.log("x =", x);
  console.log("y =", y);
})();

console.log("Fuera de la IIFE:");
console.log("x =", x);
console.log("y =", y);