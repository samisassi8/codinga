const arg = process.argv.slice(2)[0];
// console.log(arg);

function promptUser(input) {
  const parsedInput = parseInt(input);

  if (isNaN(Math.abs(parsedInput))) {
    console.log("Tu ne me la mettras pas à l’envers.");
  } else if (parsedInput % 2 == 0) {
    console.log("pair");
  } else {
    console.log("impair");
  }
}
promptUser(arg);
