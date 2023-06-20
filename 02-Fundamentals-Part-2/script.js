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
    return (population / 7900) * 100;
}
const percentageChina1 = percentageOfWorld1(1441);
const percentageThailand1 = percentageOfWorld1(71.75);
const percentageJapan1 = percentageOfWorld1(125.33);
/* console.log(percentageChina1, percentageThailand1, percentageJapan1); */

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const percentageChina2 = percentageOfWorld2(1441);
const percentageThailand2 = percentageOfWorld2(71.75);
const percentageJapan2 = percentageOfWorld2(125.33);
/* console.log(percentageChina2, percentageThailand2, percentageJapan2); */

// 03. Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const percentageChina3 = percentageOfWorld3(1441);
const percentageThailand3 = percentageOfWorld3(71.75);
const percentageJapan3 = percentageOfWorld3(125.33);
/* console.log(percentageChina3, percentageThailand3, percentageJapan3); */

// 04. Functions Calling Other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}
describePopulation("China", 1441);
describePopulation("Thailand", 71.75);
describePopulation("Japan", 125.33);