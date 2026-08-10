/*Introduction to JavaScript
JavaScript is a high-level, object-oriented, multi-paradigm programming language

Concept of JavaScript
- High-level: We don't want to worry about the complex computer management
- Object-oriented: It is object based for storing data
- Multi-paradigm: It can be use in different styles of programming
- Programming Language: It instruct the computer what to do


JavaScript is standardized under ECMAScript. 
ES6 (ECMAScript 2015) was a major update released in 2015 
that introduced many modern JavaScript features such as let, 
const, arrow functions, template literals, and classes.

*/

// Basic JavaScript examples
console.log("Arit");
console.log("Bright");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);


//  VARIABLES
// A variable is a named container used to store data (values)
// that can be used or changed later in a program. 

// It behaves as if it were the value it contains.

// Ways to create a variable
// Declaration
let x;

// Assignment
x = 100;

// Declaration and Assignment together
let age = 25;

// Each variable name need to be unique

// Example 1

let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!"); //True

let js = "boring";
if (js === "amazing") alert("JavaScript is FUN!");  //False


// Example 2

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";

console.log(myCurrentJob);

// Example 3

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);   // 25
console.log(price); // 10.99
console.log(gpa);   // 2.1

// Declaration and Assignment

let x;
x = 100;

// Variable Naming

// Good names

let firstName = "Arit";
let language = "JavaScript";
let dreamCompany = "Google";

console.log(firstName);
console.log(language);
console.log(dreamCompany);

// Bad names

// ❌ Invalid variable names

let 1name = "Arit";      // Cannot start with a number

let first-name = "Bright"; // Hyphens are not allowed

let let = "JavaScript";   // Reserved keyword


// Ways of Declaring Variable : let, const and var

// Ways of declaring Variables
// We use let keywords to declare a variables that can change 
// later during execution of the program

let age = 31;

age = 32;

console.log(age);

// -Const keywords to declare a variable that are not supposed 
// to change at any point in the future.

const birthYear = 1991;

// ❌ This will produce an error because
// constants cannot be reassigned.

birthYear = 1990;

// -Var keywords is older way of defining variables prior to ES6

// 🧠 Mini Challenge 1
// Create three variables that store:
// Your name
// Your favorite programming language
// Your dream company to work for
// Then print them using console.log().

// Solution
let firstName = "Arit";
let language = "JavaScript";
let dreamCompany = "Google";

console.log(firstName);
console.log(language);
console.log(dreamCompany);


// 🧠 Mini Challenge 2
// Create variables called firstName and age, and output a sentence
// including the 2 variables such as My name is Alice and i'm 25 years old.

// Solution

let firstName = "Alice";
let age = 25;
let sentence = "My name is " + firstName + " and I am " + age + " years old.";
console.log(sentence);

// 🧠 Mini Challenge 3
// Create variables called city and country with your hometown and country,
// and output a sentence including the 2 variables such as I am from Toulouse, in France

// Solution

let city = "Benin City";
let country = "Nigeria";
let sentence = `I am from ${city}, in ${country}`;
console.log(sentence);


// 📌 Episode Summary

// In this episode, you learned:

// ✅ What JavaScript is
// ✅ What a variable is
// ✅ How to declare variables
// ✅ How to assign values
// ✅ The difference between declaration and assignment
// ✅ Variable naming rules
// ✅ The difference between let, const and var
// ✅ How to print variables using console.log()

// Next Episode:
// 📘 Episode 002 — Data Types

