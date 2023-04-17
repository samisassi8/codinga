const power = process.argv.slice(2);
console.log(power);

if (typeof power !== "number") {
  console.log("erreur.");
} else {
  var calc = Math.pow(parseInt(power[0], 10), parseInt(power[1], 10));
  console.log(calc);
}
