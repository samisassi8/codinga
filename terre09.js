const squareRoot = process.argv.slice(2);

if (squareRoot < 0 || typeof squareRoot != "number") {
  console.log("erreur.");
} else {
  console.log(Math.sqrt(squareRoot[0]));
}
