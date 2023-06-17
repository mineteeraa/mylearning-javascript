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
console.log(describeThailand + '\n' + describeJapan + '\n' + describeKorea);