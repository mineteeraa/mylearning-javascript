'use strict';
// Developer Skills & Editor Setup

// *****CODING CHALLENGE*****
// #1
function printForecast(arr) {
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        text = text + `... ${arr[i]}ºC in ${[i + 1]} days `;
        if (i == arr.length - 1) {
            text = text + '...';
        }
    }
    console.log(text);
}
// ***TEST DATA***
// **DATA 1**
const forecastMaxTemp1 = [17, 21, 23];
printForecast(forecastMaxTemp1);
// **DATA 2**
const forecastMaxTemp2 = [12, 5, -5, 0, 4];
printForecast(forecastMaxTemp2);