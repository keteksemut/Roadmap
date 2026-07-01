function formatName(firstname, lastname) {
  const first =
    firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
  const last =
    lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

  return `${first} ${last}`;
}

function getGreeting(timeOfDay) {
  const norm = timeOfDay.toLowerCase();
  if (norm !== "morning" && norm !== "evening" && norm !== "afternoon") {
    return null;
  } else {
    return `Good ${norm}, `;
  }
}

function createGreeting(firstname, lastname, timeOfDay) {
  if (!firstname || !lastname) {
    return "Enter firstname and lastname";
  }

  const greeting = getGreeting(timeOfDay);

  if (greeting === null) {
    return "Greeting should be morning, evening, or afternoon";
  } else {
    return greeting + formatName(firstname, lastname);
  }
}

console.log(createGreeting("Herlambang", "johnson", "night"));
// Greeting should be morning, evening, or afternoon

console.log(createGreeting("jane", "doe", "EVENING"));
// Good evening, Jane Doe

console.log(createGreeting("herlambang", "johnson", "Afternoon"));
// Good afternoon, Herlambang Johnson

console.log(createGreeting("", "johnson", "morning"));
// Enter firstname and lastname
