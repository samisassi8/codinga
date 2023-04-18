const numbers = process.argv.slice(2);

function middleNumber(num1, num2, num3) {
  if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
    return num3;
  } else if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    return num1;
  } else {
    return num2;
  }
}

if (numbers.length !== 3) {
  console.log("Erreur : veuillez entrer trois nombres.");
} else {
  const [num1, num2, num3] = numbers.map(Number);
  console.log(middleNumber(num1, num2, num3));
}
