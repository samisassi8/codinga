var message = process.argv.slice(2); //avec process.argv on recupere un tableau de ce qui a ete ecrit sur le terminal. le .slice(2) va enlever les deux premiers elements du tableau et La méthode join() est une méthode de tableau qui permet de concaténer tous les éléments d'un tableau en une seule chaîne de caractères. Elle prend en argument un séparateur optionnel qui est utilisé pour séparer les éléments concaténés.

for (word of message) {
  console.log(word);
}

// console.log(message);
