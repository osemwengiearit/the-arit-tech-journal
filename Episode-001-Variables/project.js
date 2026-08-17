/*Project: Personal Profile Card

Prompt:
Create a simple Personal Profile Card using JavaScript variables.

The goal of this project is to practise declaring variables,
assigning values to variables, and displaying those values
using console.log().

Requirements:

Your profile should contain:

- Your full name
- Your age
- Your country
- Your current profession
- Your favourite programming language
- Your current learning goal
- Your dream career
- Your favourite quote

The program should:

1. Create a variable for each piece of information.
2. Give each variable an appropriate name.
3. Assign a value to each variable.
4. Display each piece of information in the console.
*/

//Declare Variable for Each piece of Information
let fullName = "Arit Bright Osemwengie";
let age = 32;
let country = "Nigeria";
let currentProfession = "Digital Skills Educator | Frontend Developer";
let favouriteLanguage = "JavaScript";
let education = "B.Sc. Computer Science — National Open University of Nigeria";
let learningGoal = "Mastering React and building full-stack projects";
let dreamCareer = "Senior Software Engineer";
let favouriteQuote =
  "Code is like humor. When you have to explain it, it's bad.";

//Display each piece of information in the console.
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Country:", country);
console.log("Current Profession:", currentProfession);
console.log("Favorite Programming Language:", favouriteLanguage);
console.log("Current Learning Goal:", learningGoal);
console.log("Dream Career:", dreamCareer);
console.log("Favorite Quote:", favouriteQuote);

//Use the same variables to populate the profile card in the DOM
document.getElementById("name").textContent = fullName;
document.getElementById("headline").textContent =
  `${currentProfession} | ${country}`;
document.getElementById("bio").textContent =
  `Hi, I'm ${fullName}, ${age} years old, a ${currentProfession} based in ${country}, passionate about ${favouriteLanguage}.`;
document.getElementById("education").textContent = `Education ${education}.`;
document.getElementById("learningGoal").textContent =
  `Currently learning: ${learningGoal}.`;
document.getElementById("skills").textContent =
  `Favorite Language ${favouriteLanguage}`;
document.getElementById("careerGoal").textContent =
  `Dream Career ${dreamCareer} -"${favouriteQuote}"`;

// Live UTC date and time
function updateUTCTime() {
  const now = new Date();

  const utcDateTime = now.toUTCString();

  document.getElementById("utc-time").textContent =
    `Current UTC: ${utcDateTime}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);

//Let's Chat button behaviour
const chatButton = document.querySelector(".btn");
if (chatButton) {
  chatButton.addEventListener("click", () => {
    window.location.href = "mailto:osemwengiearit@gmail.com";
  });
}
