const time = process.argv[2];

const match = /^(\d{1,2}):(\d{2})(AM|PM)$/.exec(time);
if (!match) {
  console.error("Veuillez entrer une heure valide au format HH:MM AM/PM");
}

let hours = parseInt(match[1]);
const minutes = parseInt(match[2]);
const ampm = match[3];

if (hours > 12 || minutes > 59) {
  console.error("Veuillez entrer une heure valide au format HH:MM AM/PM");
}

if (ampm === "PM" && hours !== 12) {
  hours += 12;
} else if (ampm === "AM" && hours === 12) {
  hours = 0;
}

console.log(
  `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
);
