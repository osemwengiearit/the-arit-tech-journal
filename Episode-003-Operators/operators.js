// Operators
// An operators allows us to transform values or combined multiple values eg
// 1. Mathematical Operators 2. Comparison Operators
// 3. Logical Operators 4. Assignment Operators etc

// -Mathematical or Arithmetic Operators

const ageArit = 2026 - 1994;
console.log(ageArit);

//We can log multiple values by using commas to seperate them.
const ageArit = 2026 - 1994;
const ageSolomon = 2026 - 1993;
console.log(ageArit, ageSolomon);

//We can also use our current year

const now = 2026;
const ageArit = now - 1994;
const ageSolomon = now - 1993;

console.log(ageArit, ageSolomon);

// Multiplication, Division and Exponentiation

console.log(ageArit * 2, ageArit / 10, 2 ** 3);

// Assuming:

ageArit = 32;

// JavaScript calculates:

// 32 * 2 = 64
// 32 / 10 = 3.2
// 2 ** 3 = 8

// So the output is: 64 3.2 8

//String Concatination

const firstName = "Arit";
const lastName = "Osemwengie";
console.log(firstName + " " + lastName);

//Assignment Operatior

let x = 10 + 5; //15
x += 10; //it means x = x + 10 which is = 25
x *= 4; //it means x = x * 4 which is = 100
x++; //x = x + 1 = 101
x--; // x = x -1 = 101-1 = 100
console.log(x);

//Comparison Operators: It is used to produce Boolean Values, TRUE or FALSE
const now = 2026;
const ageArit = now - 1994;
const ageSolomon = now - 1993;
console.log(ageArit > ageSolomon); //>,<,>=, <=
console.log(ageArit >= 18); //true

const isFullAge = ageArit >= 18;

console.log(now - 1993 > now - 1994); //true

//Operator Precedence

const now = 2026;
const ageArit = now - 1994;
const ageSolomon = now - 1993;

console.log(now - 1993 > now - 1994); //Here calculations are done first before the comparison

// console.log(25 - 10 - 5);

// Multiple Assignment

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

// Calculating an Average
const averageAge = (ageArit + ageSolomon) / 2; //Using BODMAS
console.log(ageArit, ageSolomon, averageAge);
