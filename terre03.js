const startLetter = process.argv[2];

if (startLetter === startLetter.toUpperCase()) {
  // La lettre donnée en argument est en majuscule
  for (let i = startLetter.charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    process.stdout.write(String.fromCharCode(i).toUpperCase());
  }
} else {
  // La lettre donnée en argument est en minuscule
  for (let i = startLetter.charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    process.stdout.write(String.fromCharCode(i).toLowerCase());
  }
}

process.stdout.write("\n");
