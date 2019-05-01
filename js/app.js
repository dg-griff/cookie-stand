// Create an object for each location

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


/* Generate a random number of customers per hour 
using the randomCustomerHour function */
randomCustomerHour(localeOne.address, localeOne.maxCustomer);
randomCustomerHour(localeTwo.address, localeTwo.maxCustomer);
randomCustomerHour(localeThree.address, localeThree.maxCustomer);
randomCustomerHour(localeFour.address, localeFour.maxCustomer);
randomCustomerHour(localeFive.address, localeFive.maxCustomer);

/*Calculate and store the simulated amounts of cookies purchased for each hour at each location 
using average cookies purchased and the random number of customers generated, using the coookieHour function */
cookieHour(randomCustomerHour(localeOne.address, localeOne.maxCustomer), localeOne.avgCookie, localeOne.address);
cookieHour(randomCustomerHour(localeTwo.address, localeTwo.maxCustomer), localeTwo.avgCookie, localeTwo.address);
cookieHour(randomCustomerHour(localeThree.address, localeThree.maxCustomer), localeThree.avgCookie, localeThree.address);
cookieHour(randomCustomerHour(localeFour.address, localeFour.maxCustomer), localeFour.avgCookie, localeFour.address);
cookieHour(randomCustomerHour(localeFive.address, localeFive.maxCustomer), localeFive.avgCookie, localeFive.address);





// Function definitions

function randomCustomerHour(address, maxCustomer) {
    var locale = address;
    var randomCustomer = Math.floor(Math.random() * maxCustomer);
    console.log('Random number of customers per hour for ' + locale + ': ' + randomCustomer + '.');
    return randomCustomer;
}

function cookieHour(customerRandom, cookieAvg, address) {
    var locale = address;
    var cookieCustomer = cookieAvg;
    console.log('Average cookie per customer: ' + cookieCustomer + '.');
    var customerHour = customerRandom;
    console.log('Average customer per hour: ' + customerHour + '.');
    var cookieSubtotal = Math.floor(cookieCustomer * customerHour);
    console.log('Total cookies sold for the hour at ' + locale + ': ' + cookieSubtotal + ' cookies.');
    return cookieSubtotal;
}