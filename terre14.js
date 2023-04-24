const numbers = process.argv.slice(2);

function isSorted(numbers) {
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      console.log("pas trie");
      return;
    }
  }
  console.log("trie");
}

isSorted(numbers);
