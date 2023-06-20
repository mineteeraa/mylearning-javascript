'use strict';
// JavaScript Fundamentals – Part 2

// *****ASSIGNMENT*****
// 01. Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const describeThailand = describeCountry("Thailand", 71.75, "Bangkok");
const describeJapan = describeCountry("Japan", 125.33, "Tokyo");
const describeKorea = describeCountry("Korea", 51.39, "Seoul");
/* console.log(describeThailand + '\n' + describeJapan + '\n' + describeKorea); */

// 02. Function Declarations vs. Expressions
// Function Declaration
function percentageOfWorld1(population) {
    return ((population / 7900) * 100) + "%";
}
const populationChina1 = percentageOfWorld1(1441);
const populationThailand1 = percentageOfWorld1(71.75);
const populationJapan1 = percentageOfWorld1(125.33);
console.log(populationChina1, populationThailand1, populationJapan1);

// Function Expression
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100) + "%";
}
const populationChina2 = percentageOfWorld2(1441);
const populationThailand2 = percentageOfWorld2(71.75);
const populationJapan2 = percentageOfWorld2(125.33);
console.log(populationChina2, populationThailand2, populationJapan2);