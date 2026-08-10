/*Object and Primitives
In JavaScript, data can be represented as primitive values or objects.

A Value: It is a piece of data that a program can work with.
It is the most fundamental unit of information that we have in programming.

console.log("Arit Osemwengie");
console.log(32);

console.log(`Hello`);
console.log(`I like pizza`);

window.alert(`This is an alert`);
window.alert(`I like pizza`);

document.getElementById("JS").textContent = `Hello`;
document.getElementById("MyJS").textContent = `I like pizza`;

Primitive values are basic, immutable pieces of data that are not objects.

PRIMITIVES DATA TYPES
There are seven (7) Primitive Data Types

1. Number: Floating point numbers which is used for decimals and integers let age = 23;
2. String: Sequence of characters which is  Used for text, mostly put in either  single quote double quotes, or backticks. let firstName = 'Arit';
3. Boolean: Logical type that can only be true or false and is Used for taking decisions let fullAge = true;
4. Undefined: Value taken by a variable that is not yet defined (‘empty value’) let children;
5. Null:represents an intentional absence of a value.
6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
7. BigInt (ES2020): Larger integers than the Number type can hold


Primitive Data Types
Objects vs Primitives
typeof
Practice Challenges


Example 1

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
*/

// 🧠 Mini Challenge 1 — Strings

// Create three variables that store:
// Your name
// Your favorite programming language
// Your dream company to work for
// Then print all three using console.log().

//Solutions

let fullName = "Arit";
let language = "JavaScript";
let dreamCompany = "Google";

console.log(name, language, dreamCompany);

// 🧠 Mini Challenge 2 — Numbers

// Create three variables that store:
// Your age
// The number of programming courses you are currently taking
// The number of hours you want to study each day
// Then print all three values.

//Solutions

let age = 32;
let numberOfCourses = 1;
let hours = 5;

console.log(age, numberOfCourses, hours);

// 🧠 Mini Challenge 3 — Booleans

// Create three variables that represent:
// Whether you are currently learning JavaScript
// Whether you enjoy coding
// Whether you want to become a full-stack software engineer
// Store the answers as Boolean values and print them.

//Solutions

let isLearningJavaScript = true;
let enjoyCoding = true;
let isBecomingFullstack = true;

console.log(isLearningJavaScript, enjoyCoding, isBecomingFullstack);

// 🧠 Mini Challenge 4 — The Data Type Test 🏆
// Create a variable for each of the following:
// Your name,age, height, whether you are currently coding
// Your programming skills, your developer profile
// Make sure each variable uses an appropriate JavaScript data type.
// Then use typeof to check each one.

//Solution
let fullName = "Arit Bright Osemwengie";
let fullAge = 32;
let height = 6.2;
let isLearningCoding = true;
let programmingSkill = "Intermediate";
let developerProfile = "Software Engineer";

console.log(
  fullName,
  fullAge,
  height,
  isLearningCoding,
  programmingSkill,
  developerProfile,
);

console.log(typeof fullName);
console.log(typeof fullAge);
console.log(typeof height);
console.log(typeof isLearningCoding);
console.log(typeof programmingSkill);
console.log(typeof developerProfile);
