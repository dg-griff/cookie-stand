'use strict';

/* N.B. - Code specific to lab 7 can be found on lines 5-24, lines 111-125, lines 139-166 and  lines 233-261 */

/* Implement a constructor function */

function Locale(address, minCustomer, maxCustomer, avgCookie) {
    this.address = address;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.randomCustomer = function () {
        return randNum(this.minCustomer, this.maxCustomer);
    };
}

/* Use the constructor function to create an object for each location using the 'new' keyword */

var localeOne = new Locale('1st & Pike', 23, 65, 6.3);
// console.log(localeOne);
var localeTwo = new Locale('SeaTac Airport', 3, 24, 1.2);
var localeThree = new Locale('Seattle Center', 11, 38, 3.7);
var localeFour = new Locale('Capitol Hill', 20, 38, 2.3);
var localeFive = new Locale('Alki', 2, 16, 4.6);


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

// Cookies sold for 1 hour
var cookieHourOne = soldCookies(localeOne.avgCookie, localeOne.randomCustomer());
// console.log(`Total cookies sold for 1 hour at ${localeOne.address}: ${cookieHourOne} cookies`);

var cookieHourTwo = soldCookies(localeTwo.avgCookie, localeTwo.randomCustomer());
var cookieHourThree = soldCookies(localeThree.avgCookie, localeThree.randomCustomer());
var cookieHourFour = soldCookies(localeFour.avgCookie, localeFour.randomCustomer());
var cookieHourFive = soldCookies(localeFive.avgCookie, localeFive.randomCustomer());


// Cookies sold for each hour

var everyCookieHourOne = everyHour(localeOne);
// console.log(`Cookies sold for each hour at ${localeOne.address}: ${everyCookieHourOne}`);

var everyCookieHourTwo= everyHour(localeTwo);
var everyCookieHourThree = everyHour(localeThree);
var everyCookieHourFour = everyHour(localeFour);
var everyCookieHourFive = everyHour(localeFive);



/* 4. Store the results for each location in a separate array... 
perhaps as a property of the object representing that location */
var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Create an array for each locale
var cookieDataOne = populateHourlyCookies(localeOne);
console.log(`Total cookies sold for each hour at ${localeOne.address}: ${cookieDataOne}`);

var cookieDataTwo = populateHourlyCookies(localeTwo);
var cookieDataThree = populateHourlyCookies(localeThree);
var cookieDataFour = populateHourlyCookies(localeFour);
var cookieDataFive = populateHourlyCookies(localeFive);

// Calculate total cookies sold for the day at each locale
var cookieSumOne = cookieDataOne.reduce(getCookieTotal);
console.log(cookieSumOne);

var cookieSumTwo = cookieDataTwo.reduce(getCookieTotal);
var cookieSumThree = cookieDataThree.reduce(getCookieTotal);
var cookieSumFour = cookieDataFour.reduce(getCookieTotal);
var cookieSumFive = cookieDataFive.reduce(getCookieTotal);

/* Add each array as a property on the object for each location */
var listTotalOne = cookieDataOne.unshift(localeOne.address);
console.log(cookieDataOne);

// Add locale to the front of the array
var listTotalTwo = cookieDataTwo.unshift(localeTwo.address);
var listTotalThree = cookieDataThree.unshift(localeThree.address);
var listTotalFour = cookieDataFour.unshift(localeFour.address);
var listTotalFive = cookieDataFive.unshift(localeFive.address);

/* 5. - see line 105 */

/* 6. Calculating the sum of these hourly totals; your output for each location should look like this:
1st and Pike
6am: 16 cookies
7am: 20 cookie */

// Calculate total cookies sold for the day at each location
console.log(cookieDataOne);
var totalCookiesOne = cookieDataOne.reduce(getCookieTotal);
console.log(`Total cookies sold for ${localeOne.address}: ${totalCookiesOne}`);

/* Lab 07 Code */

// Calculate total cookies sold for the day at each location
var totalCookiesTwo = cookieDataTwo.reduce(getCookieTotal);
console.log(cookieDataTwo);
var totalCookiesThree = cookieDataThree.reduce(getCookieTotal);
var totalCookiesFour = cookieDataFour.reduce(getCookieTotal);
var totalCookiesFive = cookieDataFive.reduce(getCookieTotal);

// Add cookie total to end of each locale's array
cookieDataOne.push(cookieSumOne);
cookieDataTwo.push(cookieSumTwo);
cookieDataThree.push(cookieSumThree);
cookieDataFour.push(cookieSumFour);
cookieDataFive.push(cookieSumFive);


/* 5. Display the values of each array as unordered lists in the browser 

// Render the array as an UL on the sales page
renderUl(cookieDataOne, 'reportOne', localeOne, 'headingOne', cookieSumOne); // Array for LocaleOne
renderUl(cookieDataTwo, 'reportTwo', localeTwo, 'headingTwo', cookieSumTwo); // Array for LocaleTwo
renderUl(cookieDataThree, 'reportThree', localeThree, 'headingThree', cookieSumThree); // Array for LocaleThree
renderUl(cookieDataFour, 'reportFour', localeFour, 'headingFour', cookieSumFour); // Array for LocaleFour
renderUl(cookieDataFive, 'reportFive', localeFive, 'headingFive', cookieSumFive); // Array for LocaleFive */


/******************************************************/
/* Lab 07 */

/* create a table to store the lists of data for each location */

var sectionElement = document.getElementById("table-data");

// var tableElement = document.createElement("table");
// sectionElement.appendChild(tableElement);
var newTable = render(sectionElement, "table");

// var tableRow = document.createElement("tr");
// tableElement.appendChild(tableRow);
// var newRow = render(newTable, "tr");

// var tableCell = document.createElement("td");
// tableCell.textContent = "This is a test.";
// tableRow.appendChild(tableCell);
// var newCell = render(newRow, "td", "This is a test");

var headings = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];

// renderHeading();
rowRenderTable(newTable, headings);
rowRenderTable(newTable, cookieDataOne);
rowRenderTable(newTable, cookieDataTwo);
rowRenderTable(newTable, cookieDataThree);
rowRenderTable(newTable, cookieDataFour);
rowRenderTable(newTable, cookieDataFive);




/******************************************************/

/* Add event handler */



/******************************************************/
// Function definitions

// Generate a random number of customers
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number of customers per hour
function randomCustomerHour(minCustomer, maxCustomer) {
    return randNum(minCustomer, maxCustomer);
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

// Generate an array of cookies
function everyHour(locale) {
    var hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var cookieEveryHour = [];

    for (var i = 0; i < hoursOpen.length; i++) {
        cookieEveryHour[i] = soldCookies(locale.avgCookie, locale.randomCustomer());
    }
    return cookieEveryHour;
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

// Create a table
function render(parent, elementType, data) {
    var element = document.createElement(elementType);
    if (data) {
        element.textContent = data;
    }
    parent.appendChild(element);
    return element;
}

// Create and show table headings
function renderHeading() {
    var tableElement = render(sectionElement, "table");
    tableElement.setAttribute("id", "report");
    var tableRow = render(tableElement, "tr");
    var headings = ['','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];

    headings.forEach(function(heading) {
        render(tableRow, "th", heading);
    });
}

// Create a row
function rowRenderTable(table, dataArray) {
    var newRow = render(table, "tr");
    for (var f = 0; f < dataArray.length; f++) {
        render(newRow, "td", dataArray[f]);
    }
}

// Add row from form submission
function newRowForm(address, minCust, maxCust, cookieAverage) {
    // Get reference to table
    var addressTable = document.getElementById("table-data");

    // Create row
    var addressRow = document.createElement("tr");

    // Add row to table
    addressTable.appendChild(addressRow);

    // Add address name to row
    var addressName = document.createElement("td");
    addressRow.appendChild(addressName);
    addressName.textContent = address;

    // Add address name to row
    var minCustName = document.createElement("td");
    addressRow.appendChild(minCustName);
    addressName.textContent = minCust;

    // Add address name to row
    var maxCustName = document.createElement("td");
    addressRow.appendChild(maxCustName);
    addressName.textContent = maxCust;

    // Add address name to row
    var avgCookieName = document.createElement("td");
    addressRow.appendChild(avgCookieName);
    addressName.textContent = cookieAverage;
}

// Handle form submission
function handleSubmission(event) {
    event.preventDefault();

    var localeTable = document.getElementById("table-data");
    
    var address = event.target.addressField.value;
    console.log("address entered was ", address);

    var minCustomer = event.target.minCustomerField.value;
    console.log("minCustomer entered was ", minCustomer);

    var maxCustomer = event.target.maxCustomerField.value;
    console.log("maxCustomer entered was ", maxCustomer);

    var avgCookie = event.target.avgCookieField.value;
    console.log("avgCookie entered was ", avgCookie);

    // Create new locale object using form data
    var formLocale = new Locale(address, minCustomer, maxCustomer, avgCookie);
    console.log(formLocale);

    // Calculate random number of customers for form locale
    var formRandCust = randomCustomerHour(formLocale.minCustomer, formLocale.maxCustomer);
    console.log(formRandCust);

    // Calculate cookes sold for each other from form locale
    var everyCookieHourForm = everyHour(formLocale);
    console.log(everyCookieHourForm);

    // Store hourly cookie totals in an array for locale form
    var formCookieData = populateHourlyCookies(formLocale);
    console.log(formCookieData);

    // Calculate sum of cookies sold for the day for locale form
    var formCookieSum = formCookieData.reduce(getCookieTotal);
    console.log(formCookieSum);

    // Add cookie total to end of the locale array from form
    formCookieData.push(formCookieSum);
    console.log(formCookieData);

    // Add locale address to the front of the locale array from form
    formCookieData.unshift(address);
    console.log(formCookieData);

    rowRenderTable(newTable, formCookieData);


    // var addressRow = document.createElement("tr");

    // var addressColumn = document.createElement("td");
    // addressColumn.textContent = address;
    // addressRow.appendChild(addressColumn);

    // var minCustColumn = document.createElement("td");
    // minCustColumn.textContent = minCustomer;
    // addressRow.appendChild(minCustColumn);

    // var maxCustColumn = document.createElement("td");
    // maxCustColumn.textContent = maxCustomer;
    // addressRow.appendChild(maxCustColumn);

    // var avgCookieColumn = document.createElement("td");
    // avgCookieColumn.textContent = avgCookie;
    // addressRow.appendChild(avgCookieColumn);

    // localeTable.appendChild(addressRow);
}

var localeForm = document.getElementById("locale-form");

localeForm.addEventListener("submit", handleSubmission);