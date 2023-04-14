if (process.argv.length < 3) {
  console.log("Veuillez fournir une chaîne de caractères en argument.");
} else {
  const str = process.argv.slice(2).join(" ");
  //   console.log("str:", str);
  const words = str.split(" ");
  //   console.log("words:", words);
  const reversedWords = words.map((word) => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  });
  const reversedStr = reversedWords.reverse().join(" ");
  console.log(reversedStr);
}
