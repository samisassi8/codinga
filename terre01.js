var path = require("path");
console.log(path.basename(__filename));

// En JavaScript, require() est une fonction qui permet de charger des modules Node.js ou des bibliothèques tierces.

// Lorsque nous appelons la fonction require('path'), nous chargeons le module path de Node.js. Ce module est utilisé pour travailler avec les chemins de fichiers et de répertoires.

// Le module path expose plusieurs méthodes utiles pour travailler avec les chemins de fichiers, telles que :

// path.join(): permet de joindre plusieurs parties de chemin pour former un chemin de fichier complet
// path.dirname(): permet d'obtenir le répertoire parent d'un chemin de fichier donné
// path.basename(): permet d'obtenir le nom du fichier à partir d'un chemin de fichier donné
// path.extname(): permet d'obtenir l'extension de fichier à partir d'un chemin de fichier donné
// L'utilisation du module path est courante dans les projets Node.js lorsqu'on manipule des fichiers et des répertoires, car cela permet de garantir la portabilité et la fiabilité de nos chemins de fichiers.
// ---------------
// En JavaScript, la méthode basename() est une fonction qui fait partie du module path et permet de renvoyer le nom de fichier sans le chemin absolu.

// __filename est une variable globale dans Node.js qui contient le chemin absolu du fichier actuel, y compris son nom de fichier.

// Ainsi, path.basename(__filename) renvoie le nom de fichier sans le chemin absolu.
