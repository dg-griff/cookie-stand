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

/*
// Calculate total cookies sold for each of the 15 hours
var cookieTotalOne = [getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[0]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[1]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[2]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[3]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[4]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[5]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[6]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[7]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[8]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[9]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[10]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[11]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[12]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[13]), 
getCookies(localeOne.avgCookie, localeOne.maxCustomer, localeOne.address, localeOne.hoursOpen[14])];

console.log(cookieTotalOne);
console.log('================')

var cookieTotalTwo = [getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[0]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[1]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[2]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[3]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[4]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[5]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[6]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[7]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[8]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[9]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[10]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[11]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[12]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[13]), 
getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[14])];

console.log(cookieTotalTwo);
console.log('================')

var cookieTotalThree = [getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[0]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[1]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[2]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[3]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[4]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[5]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[6]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[7]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[8]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[9]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[10]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[11]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[12]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[13]), 
getCookies(localeThree.avgCookie, localeThree.maxCustomer, localeThree.address, localeThree.hoursOpen[14])];

console.log(cookieTotalThree);
console.log('================')

var cookieTotalFour = [getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[0]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[1]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[2]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[3]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[4]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[5]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[6]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[7]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[8]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[9]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[10]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[11]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[12]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[13]), 
getCookies(localeFour.avgCookie, localeFour.maxCustomer, localeFour.address, localeFour.hoursOpen[14])];

console.log(cookieTotalFour);
console.log('================')

var cookieTotalFive = [(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[0])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[1])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[2])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[3])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[4])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[5])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[6])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[7])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[8])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[9])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[10])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[11])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[12])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[13])), 
(getCookies(localeFive.avgCookie, localeFive.maxCustomer, localeFive.address, localeFive.hoursOpen[14]))];


console.log(cookieTotalFive);
console.log('================') */


console.log('=========');
var cookieTotalTwo = [getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[0]), getCookies(localeTwo.avgCookie, localeTwo.maxCustomer, localeTwo.address, localeTwo.hoursOpen[1])];
alert(cookieTotalTwo[0]);

document.getElementById('report').appendChild(renderUl(cookieTotalTwo[0]));
console.log(cookieTotalTwo);
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
    // alert(cookieTotalArr);
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

function renderUl(array) {
    var list = document.createElement('ul');  // create list element

    for (var n = 0; n < array.length; n++) {
        var item = document.createElement('li'); // create list item
    }

    item.appendChild(document.createTextNode(array[n])); // set list contents

    list.appendChild(item); // add to list

    return list;
}