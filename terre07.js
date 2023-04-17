var args = process.argv.slice(2);

if (args.length !== 1 || typeof args[0] !== "string") {
  console.error("erreur.");
} else {
  const str = args[0];
  console.log(str.length);
}
