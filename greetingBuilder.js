function formatName(firstname, lastname) {
  const first = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  const last = lastname.charAt(0).toUpperCase() + lastname.slice(1);

  return `${first} ${last}`;
}

function getGreeting(timeOfDay) {
  const norm = timeOfDay.toLowerCase();
  if (norm !== "morning" && norm !== "evening" && norm !== "afternoon") {
    return "Greeting should be morning, evening, or afternoon";
  } else {
    return `Good ${timeOfDay}`;
  }
}

function createGreeting(firstname, lastname, timeOfDay) {
  return getGreeting(timeOfDay) + ", " + formatName(firstname, lastname);
}

console.log(createGreeting("Herlambang", "johnson", "night"));
