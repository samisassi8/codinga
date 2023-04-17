const primeNumber = process.argv.slice(2);

if (process.argv.length < 3) {
  console.log("Veuillez fournir un nombre en argument.");
} else {
  const num = Number(process.argv[2]);
  if (isNaN(num)) {
    console.log("L'argument fourni doit être un nombre.");
  } else if (num < 1) {
    console.log("Le nombre doit être supérieur ou égal à 1.");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`Oui, ${num} est un nombre premier.`);
    } else {
      console.log(`Non, ${num} n'est pas un nombre premier.`);
    }
  }
}
