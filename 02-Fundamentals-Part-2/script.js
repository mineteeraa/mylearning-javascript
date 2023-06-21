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
    /* console.log(description); */
}
describePopulation("China", 1441);
describePopulation("Thailand", 71.75);
describePopulation("Japan", 125.33);

// 05. Introduction to Arrays
const populations = [1441, 71.75, 125.33, 51.39];
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
/* console.log(populations.length === 4, percentages); */

// 06. Basic Array Operations (Methods)
const neighbours = ["Singapore", "Malaysia", "Laos"];

neighbours.push("Utopia");
/* console.log(neighbours); */

neighbours.pop();
/* console.log(neighbours); */

if (!neighbours.includes("Germany")) {
    /* console.log("Probably not a central European country :D"); */
}

neighbours[neighbours.indexOf("Singapore")] = "Republic of Singapore";
/* console.log(neighbours); */


// *****CODING CHALLENGE*****
// #1
let scoreDolphins;
let scoreKoalas;

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No team wins...");
    }
}
/*
// ***TEST DATA***
// **DATA 1**
scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas)
// **DATA 2**
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas)
*/

// #2
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

// ***TEST DATA***
// **DATA 1**
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
// ***BONUS***
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);