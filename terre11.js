const hour = process.argv.slice(2);

if (process.argv.length < 3) {
  console.log("Veuillez fournir une heure au format HH:MM en argument.");
} else {
  const time = process.argv[2].split(":");
  if (time.length !== 2 || isNaN(time[0]) || isNaN(time[1])) {
    console.log("L'heure doit être au format HH:MM.");
  } else {
    let hour = Number(time[0]);
    const minute = Number(time[1]);
    if (hour > 23 || minute > 59) {
      console.log("L'heure doit être entre 00:00 et 23:59.");
    } else {
      let period = "AM";
      if (hour >= 12) {
        period = "PM";
      }
      hour %= 24;
      if (hour === 0) {
        hour = 12;
      } else if (hour > 12) {
        hour -= 12;
      }
      if (hour === 12 && period === "AM") {
        period = "PM";
      } else if (hour === 12 && period === "PM") {
        period = "AM";
      }
      console.log(`${hour}:${minute.toString().padStart(2, "0")}${period}`);
    }
  }
}
