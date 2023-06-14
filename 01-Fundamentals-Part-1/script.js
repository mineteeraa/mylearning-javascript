// JavaScript Fundamentals – Part 1

// *****ASSIGNMENT*****
// 01. Values and Variables
const country = "Thailand";
const continent = "Asia";
let population = 71.75;
/*
console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population (in millions) : " + population);
*/

// 02. Data Types
const isIsland = false;
let language;
/*
console.log("Type of island: " + typeof isIsland);
console.log("Type of population: " + typeof population);
console.log("Type of country: " + typeof country);
console.log("Type of language: " + typeof language);
*/

// 03. let, const and var
language = "Thai";
/*
console.log("Language: " + language);
*/

// 04. Basic Operators
/*
console.log("Thailand has a population in half of " + population / 2 + " million");
population++
console.log(population);
console.log(population > 6);
console.log(population < 33);
*/
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
/*
console.log(description);
*/


// *****CODING CHALLENGE*****
// #1
let massMark;
let massJohn;
let heightMark;
let heightJohn;
// ***TEST DATA***
// **DATA 1**
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;
// **DATA 2**
/* massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76; */
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log("BMI of Mark is " + BMIMark);
console.log("BMI of John is " + BMIJohn);
// ***BONUS***
let markHigherBMI = (BMIMark > BMIJohn);
console.log("BMI of Mark is higher than BMI of John is " + markHigherBMI);