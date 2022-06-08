// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



const { fromDollarToYen } = require('./app.js');
// start your first test
test('Converts $10 USD to 1065.8333333333335 Yen', function() {
    //inside the test we call our sum function with 2 numbers
    let conversion = fromDollarToYen(10);

    // we expect the sum of those 2 numbers to be 23
    expect(conversion).toBe(1065.8333333333335);
});

const { fromEuroToDollar } = require('./app.js');
// start your first test
test('Converts 10 Euro to 12 USD', function() {
    //inside the test we call our sum function with 2 numbers
    let conversion = fromEuroToDollar(10);

    // we expect the sum of those 2 numbers to be 23
    expect(conversion).toBe(12);
});
const { fromYenToPound } = require('./app.js');
// start your first test
test('Converts 10 Yen to 0.06254886630179828 GPY', function() {
    //inside the test we call our sum function with 2 numbers
    let conversion = fromYenToPound(10);

    // we expect the sum of those 2 numbers to be 23
    expect(conversion).toBe(0.06254886630179828);
});




//fromDollarToYen
//fromEuroToDollar
//fromYenToPound