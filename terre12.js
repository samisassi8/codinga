const args = process.argv.slice(2);

if (args.length !== 1 || typeof args[0] !== "string") {
  console.error(
    "Erreur : vous devez passer une heure au format 12 heures en argument."
  );
} else {
  const time12h = args[0];
  const match = time12h.match(/^(\d{1,2}):(\d{2})([AP]M)$/i);

  if (!match) {
    console.error(
      `Erreur : "${time12h}" n'est pas une heure valide au format 12 heures.`
    );
  } else {
    let hour24h = parseInt(match[1], 10);
    const minute = match[2];
    const meridiem = match[3].toUpperCase();

    if (hour24h === 12) {
      hour24h = meridiem === "AM" ? 0 : 12;
    } else if (meridiem === "PM") {
      hour24h += 12;
    }

    console.log(`${hour24h.toString().padStart(2, "0")}:${minute}`);
  }
}
