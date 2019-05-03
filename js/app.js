'use strict';

// 1. Create an object for each location

var localeOne = {
    address: '1st & Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    hoursOpen : [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}

var localeTwo = {
    address: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    hoursOpen : [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}

var localeThree = {
    address: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    hoursOpen : [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}

var localeFour = {
    address: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3,
    hoursOpen : [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}

var localeFive = {
    address: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6,
    hoursOpen : [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}


/* 2. Generate a random number of customers per hour 
using the randomCustomerHour function. 

Store the customers generated for each location in a variable */
var customerHourLocaleOne = randomCustomerHour(localeOne.maxCustomer);
var customerHourLocaleTwo = randomCustomerHour(localeTwo.maxCustomer);
var customerHourLocaleThree = randomCustomerHour(localeThree.maxCustomer);
var customerHourLocaleFour = randomCustomerHour(localeFour.maxCustomer);
var customerHourLocaleFive = randomCustomerHour(localeFive.maxCustomer);


/* 3. Calculate and store the simulated amounts of cookies 
purchased for each hour at each location 
using average cookies purchased and the random number 
of customers generated. */

// Calculate total cookies sold for 1 hour
var cookieHourOne = calcCookieSold(localeOne.avgCookie, customerHourLocaleOne);
console.log(`Cookies sold during the hour were: ${cookieHourOne} cookies.`);

var cookieHourTwo = calcCookieSold(localeTwo.avgCookie, customerHourLocaleTwo);
console.log(`Cookies sold during the hour were: ${cookieHourTwo} cookies.`);

var cookieHourThree = calcCookieSold(localeThree.avgCookie, customerHourLocaleThree);
console.log(`Cookies sold during the hour were: ${cookieHourThree} cookies.`);

var cookieHourFour = calcCookieSold(localeFour.avgCookie, customerHourLocaleFour);
console.log(`Cookies sold during the hour were: ${cookieHourFour} cookies.`);

var cookieHourFive = calcCookieSold(localeFive.avgCookie, customerHourLocaleFive);
console.log(`Cookies sold during the hour were: ${cookieHourFive} cookies.`);

// Calculate total cookies sold for each of the 15 hours
var cookieTotalOne = getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[0]);
console.log('=========');
var cookieTotalTwo = getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[0]);
console.log('=========');
var cookieTotalThree = getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[0]);
console.log('=========');
var cookieTotalFour = getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[0]);
console.log('=========');
var cookieTotaFive = getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[0]);
console.log('=========');

/* 4. Store the results for each location in a separate array... 
perhaps as a property of the object representing that location */
var arrOne = renderArray(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address);

var arrTwo = renderArray(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address);

var arrThree = renderArray(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address);

var arrFour = renderArray(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address);

var arrFive = renderArray(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address);







// Function definitions

// Generate a random number of customers per hour
function randomCustomerHour(maxCustomer) {
    var customerHour = Math.floor(Math.random() * maxCustomer);
    // console.log(customerHour);
    return customerHour;
}

function cookieHour(customerHour, cookieAvg, address) {
    var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieSold;
    var locArray = [localeOne.address, localeTwo.address, localeThree.address, localeFour.address, localeFive.address];
    for (var i = 0; i < 15; i++) {
        var customerHour = randomCustomerHour(locArray[i], localeOne.maxCustomer);
        cookieSold = calcCookieSold(hoursOpen[i], cookieAvg, customerHour);
    }
    return [address, hoursOpen[i], cookieSold];
}

function calcCookieSold(avg, customerHour) {
    var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieSold;
    for (var j = 0; j < hoursOpen.length; j++) {
        cookieSold = Math.floor(avg * customerHour);
    }
    return cookieSold;
}


function getCookies(avg, maxCustomer, locale, hour) {
    var locArray = [localeOne.address, localeTwo.address, localeThree.address, localeFour.address, localeFive.address];
    var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieTotalArr;
    for (var k = 0; k < hoursOpen.length; k++) {
    var hourCookie;
    var custHour = randomCustomerHour(maxCustomer);
    hourCookie = calcCookieSold(avg, custHour);
        for (var l = 0; l < hoursOpen.length; l++) {
            cookieTotalArr = [locale, hour, hourCookie];
            // console.log(hourCookie);
        }
    }
    console.log(cookieTotalArr);
    return cookieTotalArr;
}

function renderArray(avg, maxCustomer, address) {
    var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieTotal;
    for (var m = 0; m < hoursOpen.length; m++) {
        cookieTotal = getCookies(avg, maxCustomer, address, localeOne.hoursOpen[m]);
    }
    // console.log(cookieTotal);
    return cookieTotal;   
}