function formatName(firstname, lastname) {
  const first = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  const last = lastname.charAt(0).toUpperCase() + lastname.slice(1);

  return `${first} ${last}`;
}

function getGreeting(timeOfDay) {
  return `Good ${timeOfDay.toLowerCase()}`;
}

function createGreeting(firstname, lastname, timeOfDay) {
  return getGreeting(timeOfDay) + ", " + formatName(firstname, lastname);
}
