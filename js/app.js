'use strict';

// 1. Create an object for each location

var localeOne = {
    address: '1st & Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    randomCustomer: function () {
        return randNum(this.minCustomer, this.maxCustomer);
    }
}

var localeTwo = {
    address: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    randomCustomer: function () {
        return randNum(this.minCustomer, this.maxCustomer);
    }
}

var localeThree = {
    address: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    randomCustomer: function () {
        return randNum(this.minCustomer, this.maxCustomer);
    }
}

var localeFour = {
    address: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3,
    randomCustomer: function () {
        return randNum(this.minCustomer, this.maxCustomer);
    }
}

var localeFive = {
    address: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6,
    randomCustomer: function () {
        return randNum(this.minCustomer, this.maxCustomer);
    }
}


/* 2. Generate a random number of customers per hour 
using the randomCustomerHour function. 
Store the customers generated for each location in a variable */


/* 3. Calculate and store the simulated amounts of cookies 
purchased for each hour at each location 
using average cookies purchased and the random number 
of customers generated. */


/* 4. Store the results for each location in a separate array... 
perhaps as a property of the object representing that location */
var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Create an array for each locale
var cookieDataOne = populateHourlyCookies(localeOne);
console.log(`Total cookies sold for each hour at ${localeOne.address}: ${cookieDataOne}`);

var cookieDataTwo = populateHourlyCookies(localeTwo);
console.log(`Total cookies sold for each hour at ${localeTwo.address}: ${cookieDataTwo}`);

var cookieDataThree = populateHourlyCookies(localeThree);
console.log(`Total cookies sold for each hour at ${localeThree.address}: ${cookieDataThree}`);

var cookieDataFour = populateHourlyCookies(localeFour);
console.log(`Total cookies sold for each hour at ${localeFour.address}: ${cookieDataFour}`);

var cookieDataFive = populateHourlyCookies(localeFive);
console.log(`Total cookies sold for each hour at ${localeFive.address}: ${cookieDataFive}`);

/* Add each array as a property on the object for each location */
localeOne.cookieSold = cookieDataOne;
// console.log(localeOne.cookieSold);

localeTwo.cookieSold = cookieDataTwo;
localeThree.cookieSold = cookieDataThree;
localeFour.cookieSold = cookieDataFour;
localeFive.cookieSold = cookieDataFive;


/* 6. Calculating the sum of these hourly totals; your output for each location should look like this:
1st and Pike
6am: 16 cookies
7am: 20 cookie */

// Calculate total cookies sold for the day at each location
var totalCookiesOne = cookieDataOne.reduce(getCookieTotal);
console.log(`Total cookies sold for ${localeOne.address}: ${totalCookiesOne}`);

var totalCookiesTwo = cookieDataTwo.reduce(getCookieTotal);
var totalCookiesThree = cookieDataThree.reduce(getCookieTotal);
var totalCookiesFour = cookieDataFour.reduce(getCookieTotal);
var totalCookiesFive = cookieDataFive.reduce(getCookieTotal);


/* 5. Display the values of each array as unordered lists in the browser */

// Render the array as an UL on the sales page
renderUl(cookieDataOne, 'reportOne', localeOne, 'headingOne', totalCookiesOne); // Array for LocaleOne
renderUl(cookieDataTwo, 'reportTwo', localeTwo, 'headingTwo', totalCookiesTwo); // Array for LocaleTwo
renderUl(cookieDataThree, 'reportThree', localeThree, 'headingThree', totalCookiesThree); // Array for LocaleThree
renderUl(cookieDataFour, 'reportFour', localeFour, 'headingFour', totalCookiesFour); // Array for LocaleFour
renderUl(cookieDataFive, 'reportFive', localeFive, 'headingFive', totalCookiesFive); // Array for LocaleFive




// Function definitions

// Generate a random number of customers
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate cookies sold for a particular hour
function soldCookies(avgCookie, customerHour) {
    return Math.ceil(avgCookie * customerHour);
}

// Generate an array of cookies sold for each our
function populateHourlyCookies(locale) {
    var cookieSold = [];
    for (var i = 0; i < hoursOpen.length; i++) {
        cookieSold[i] = soldCookies(locale.avgCookie, locale.randomCustomer());
    }
    return cookieSold;
}

// Render an unordered list
function renderUl(cookies, id, locale, headingId, total) {
    var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    var ul = document.getElementById(id);
    var head = document.getElementById(headingId);

    var cookiesPerDay = document.createElement('li');
    cookiesPerDay.textContent = `Total: ${total} cookies`;
    

    head.innerHTML = `<h4>${locale.address}</h4>`;
    // console.log(head.innerHTML);
   
    for (var h = 0; h < times.length; h++) {
        var liOne = `<li> ${times[h]}: ${cookies[h]} cookies</li>`;
        ul.innerHTML = ul.innerHTML + liOne;
    }
    ul.appendChild(cookiesPerDay);
}

// Calculate total cookies sold from 6 am to 8 pm
function getCookieTotal(totalCookies, cookie) {
    return totalCookies + cookie;
}