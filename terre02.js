var message = process.argv.slice(2); //avec process.argv on recupere un tableau de ce qui a ete ecrit sur le terminal. le .slice(2) va enlever les deux premiers elements du tableau

for (word of message) {
  console.log(word);
}

// console.log(message);
