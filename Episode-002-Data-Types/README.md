# 📘 Episode 002 — Data Types

Welcome to **Episode 002 of The Arit Tech Journal**! 🚀

In this episode, I explored **Data Types in JavaScript** and learned how JavaScript represents and works with different kinds of values.

The goal of this episode was to understand the different primitive data types, recognise the type of a value using `typeof`, and practise choosing appropriate data types when creating variables.

---

## 🎯 Learning Objectives

By the end of this episode, I learned how to:

- Understand what a value is in JavaScript
- Understand the difference between primitive values and objects
- Identify the seven primitive data types
- Understand `Number`
- Understand `String`
- Understand `Boolean`
- Understand `undefined`
- Understand `null`
- Know what `Symbol` is
- Know what `BigInt` is
- Use the `typeof` operator to identify data types
- Choose appropriate data types for variables
- Apply data types through coding challenges

---

## 🧠 What Is a Value?

A **value** is a piece of data that a program can work with.

Examples:

```js
"Arit Osemwengie";
32;
true;
null;
undefined;
```

In JavaScript, data can be represented as **primitive values or objects**.

---

## 🔹 Primitive Data Types

JavaScript has **seven primitive data types**:

| Data Type | Description                                                 | Example                 |
| --------- | ----------------------------------------------------------- | ----------------------- |
| Number    | Represents integers and floating-point numbers              | `25`, `10.99`           |
| String    | Represents text                                             | `"Arit"`                |
| Boolean   | Represents `true` or `false`                                | `true`                  |
| Undefined | A variable that has been declared but has no assigned value | `let age;`              |
| Null      | Represents an intentional absence of a value                | `let name = null;`      |
| Symbol    | Represents a unique value                                   | `Symbol()`              |
| BigInt    | Represents very large integers                              | `12345678901234567890n` |

---

## 🔍 The `typeof` Operator

The `typeof` operator is used to determine the type of a value.

### Example:

```js
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
```

### Output:

```text
number
number
number
```

This helped me understand how JavaScript identifies the type of values stored in variables.

---

## 🧠 Practice Challenges

### Challenge 1 — Strings

Created variables to store:

- My name
- My favourite programming language
- My dream company

Then printed them using `console.log()`.

### Challenge 2 — Numbers

Created variables to store:

- My age
- Number of programming courses
- Number of hours I want to study each day

### Challenge 3 — Booleans

Created Boolean variables representing:

- Whether I am learning JavaScript
- Whether I enjoy coding
- Whether I want to become a Full-Stack Software Engineer

### Challenge 4 — Data Type Test 🏆

Created variables representing:

- Name
- Age
- Height
- Coding status
- Programming skill
- Developer profile

Then used `typeof` to verify their data types.

---

## 💡 What I Learned

The biggest lesson from this episode is that **different values have different data types**, and understanding those types is important when writing JavaScript programs.

I also learned that:

- Numbers can represent both integers and decimals.
- Strings are used to represent text.
- Booleans contain either `true` or `false`.
- `undefined` means a variable has been declared but has not been assigned a value.
- `null` represents an intentional absence of a value.
- `typeof` helps identify the type of a value.
- JavaScript has seven primitive data types.

---

## 🧩 Files in This Episode

```text
Episode-002-Data-Types/
│
├── README.md
├── data-types.js
├── challenge.js
└── screenshots/
```

---

## 🚀 Reflection

This episode helped me understand what kind of information JavaScript variables can hold.

Rather than simply memorising the names of the data types, I practised creating variables and checking their types using `typeof`.

I'm learning one concept at a time and building my understanding step by step.

---

## 📚 Previous Episode

[Episode 001 — Variables](../Episode-001-Variables/)

---

## 🔜 Next Episode

**Episode 003 — Operators**

In the next episode, I'll learn how operators can be used to perform calculations, compare values, assign values, and work with expressions in JavaScript.

---

### 📘 The Arit Tech Journal

**Learn. Practice. Build. Reflect. Repeat. 🚀**
