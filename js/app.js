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
var custHourOne = localeOne.randomCustomer();
// console.log(`Random number of customers generated for localeOne: ${custHourOne} customers`);
var custHourTwo = localeTwo.randomCustomer();
var custHourThree = localeThree.randomCustomer();
var custHourFour = localeFour.randomCustomer();
var custHourFive = localeFive.randomCustomer();



/* 3. Calculate and store the simulated amounts of cookies 
purchased for each hour at each location 
using average cookies purchased and the random number 
of customers generated. */

var cookieSumLocaleOne = soldCookies(localeOne.avgCookie, localeOne.randomCustomer());
console.log(`Total cookies sold for 1 hour at localeOne: ${cookieSumLocaleOne} cookies`);

var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var cookieSoldOne = [];

// Populate array using the .push() method
/* for (var i = 0; i < hoursOpen.length; i++) {
    cookieSoldOne.push(soldCookies(localeOne.avgCookie, localeOne.randomCustomer()));
} */

for (var i = 0; i < hoursOpen.length; i++) {
    cookieSoldOne[i] = soldCookies(localeOne.avgCookie, localeOne.randomCustomer());
}




// Function definitions

// Generate a random number of customers
function randNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number of customers per hour
function randomCustomerHour(minCustomer, maxCustomer) {
    return randNum(minCustomer, maxCustomer);
}

// Generate cookies sold for a particular hour
function soldCookies (avgCookie, customerHour) {
    return Math.ceil(avgCookie * customerHour); 
}