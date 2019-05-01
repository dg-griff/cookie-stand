// 1. Create an object for each location

var localeOne = {
    address: '1st & Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3
}

var localeTwo = {
    address: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2
}

var localeThree = {
    address: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7
}

var localeFour = {
    address: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3
}

var localeFive = {
    address: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6
}


/* 2. Generate a random number of customers per hour 
using the randomCustomerHour function */
randomCustomerHour(localeOne.address, localeOne.maxCustomer);
randomCustomerHour(localeTwo.address, localeTwo.maxCustomer);
randomCustomerHour(localeThree.address, localeThree.maxCustomer);
randomCustomerHour(localeFour.address, localeFour.maxCustomer);
randomCustomerHour(localeFive.address, localeFive.maxCustomer);

/* 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location 
using average cookies purchased and the random number of customers generated, using the coookieHour function */
var daySalesOne = cookieHour(randomCustomerHour(localeOne.address, localeOne.maxCustomer), localeOne.avgCookie, localeOne.address);
// console.log(`${daySalesOne}`);
var daySalesTwo = cookieHour(randomCustomerHour(localeTwo.address, localeTwo.maxCustomer), localeTwo.avgCookie, localeTwo.address);
var daySalesThree = cookieHour(randomCustomerHour(localeThree.address, localeThree.maxCustomer), localeThree.avgCookie, localeThree.address);
var daySalesFour = cookieHour(randomCustomerHour(localeFour.address, localeFour.maxCustomer), localeFour.avgCookie, localeFour.address);
var daySalesFive = cookieHour(randomCustomerHour(localeFive.address, localeFive.maxCustomer), localeFive.avgCookie, localeFive.address);

/* 4. Store the results for each location in a separate array... 
perhaps as a property of the object representing that location */
var hourSale = cookieHour(daySalesOne, localeOne.avgCookie, localeOne.address);
console.log(`${hourSale[0]}, ${hourSale[2]}`)




// Function definitions

function randomCustomerHour(address, maxCustomer) {
    var locale = address;
    var randomCustomer = Math.floor(Math.random() * maxCustomer);
    // console.log('Random number of customers per hour for ' + locale + ': ' + randomCustomer + '.');
    return randomCustomer;
}

function cookieHour(customerHour, cookieAvg, address) {
    var locale = address;
    var avg = cookieAvg;
    var consumer = randomCustomerHour(localeOne.address, localeOne.maxCustomer);
    var hoursOpen = [06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieSold;
    var locArray = [localeOne.address, localeTwo.address, localeThree.address, localeFour.address, localeFive.address];
    for (var i = 0; i < 15; i++) {
        var consumer = randomCustomerHour(locArray[i], localeOne.maxCustomer);
        // console.log(consumer);
        for (var j = 0; j < hoursOpen.length; j++) {
            cookieSold = Math.floor(avg * consumer);
            // console.log(`Cookies sold at ${hoursOpen[i]} at ${locale} : ${cookieSold}`);
        }
    }
    return [locale, hoursOpen, cookieSold];
}