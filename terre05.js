const num1 = process.argv[2];
const num2 = process.argv[3];

var div = num1 / num2;
var modulo = num1 % num2;
console.log("resultat:", Math.trunc(div));
console.log("reste:", modulo);
