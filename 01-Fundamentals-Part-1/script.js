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

// 05. Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
/*
console.log(description);
*/

// 06. Taking Decisions: if / else Statements
// population = 13;
/*
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}
*/

// 07. Type Conversion and Coercion
/*
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
*/

// 08. Equality Operators: == vs. ===
/*
//const numNeighbours = prompt('How many neighbour countries does your country have?');
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours == 1) {
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/

// 09. Logical Operators
/*
if (language === "English" && population < 50 && isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
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
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
/*
console.log("BMI of Mark is " + BMIMark);
console.log("BMI of John is " + BMIJohn);
*/
// ***BONUS***
/*
let markHigherBMI = (BMIMark > BMIJohn);
console.log("BMI of Mark is higher than BMI of John is " + markHigherBMI);
*/

// #2
/*
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

// #3
