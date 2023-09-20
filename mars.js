alert("Hello!");
alert("booting up...");
alert("All systems go!");
alert("Lets start");
const username = prompt(`Hi there. Whats your name?`);
alert(`hi ${username} Are you ready for your Mars Adventure?`);
alert(`yo this game is tight deals`);
alert(`you have been selected my guy in god for this`);
let excited = prompt(`Are you excited? Click Y or N`);
excited = excited.toUpperCase();
if (excited === "Y") {
  alert("I knew you would say that, great");
} else if (excited === "N") {
  alert("too late");
}
alert(`Its time to pack for your trip to Mars!`);
let numSuitcases = prompt(`How many suitcases do you plan to bring?`);
numSuitcases = Number(numSuitcases);
if (numSuitcases <= 2) {
  alert("Perfect. You'll certainly fit in the spaceship");
} else {
  alert("That's way to many. Pack lightly");
}
alert("You're allowed to bring one companion animal with you.");
const companionType = prompt("What kind of animal do you want to bring?");
let companionName = prompt("what is your companion name");
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;
alert(`Cool, so you're bringing ${companionName} the ${companionType}`);
alert(`NASA has a interior design team to outif your ship`);
alert(`You have a couple options for interior decor your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk`);
let spaceShipDecor = prompt(`pick A, B, or C`);
spaceShipDecor = spaceShipDecor.toUpperCase();
let decor;
if (spaceShipDecor === "A") {
  decor = `modern minimalist`;
} else if (spaceShipDecor === "B") {
  decor = `Retro`;
} else if (spaceShipDecor === "C") {
  decor = `Victorian`;
}
alert(
  `${username} and ${companionName}, surfing the celetial abyss, in a ${decor} spaceship.`
);
let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer--;
}
alert(`*** LIFTOFF ***`);
