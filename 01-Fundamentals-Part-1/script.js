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

// 10. The switch Statement
/*
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
*/

// 11. The Conditional (Ternary) Operator
/*
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
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
// ***TEST DATA***
// **DATA 1**
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
/*
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}
*/
/*
// ***BONUS***
// **DATA 1**
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
// **DATA 2**
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins >= 100 || scoreKoalas >= 100) {
    if (scoreDolphins > scoreKoalas) {
        console.log("Dolphins win the trophy");
    } else if (scoreDolphins < scoreKoalas) {
        console.log("Koalas win the trophy");
    } else if (scoreDolphins === scoreKoalas) {
        console.log("Both win the trophy");
    }
} else {
    console.log("No team wins the trophy");
}
*/

// #4
const bill = Number(prompt("Please enter the bill")); // bill values: 275, 40, 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);