// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)




let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)

//Second Part
function fromEuroToDollar (amountInEuros){
    let amountInDollars = amountInEuros * oneEuroIs.USD
    // return `You give me ${amountInEuros} Euro and I'll pay you ${amountInDollars} USD`
    return amountInDollars
}
function fromDollarToEuro (amountInDollars){
    let amountInEuros = amountInDollars / oneEuroIs.USD
    // return `You give me ${amountInDollars} Dollars and I'll pay you ${amountInEuros} Euro`
    return amountInEuros
}

 //1st part
function fromDollarToYen(amountInDollars){
    let amountInYen = fromDollarToEuro(amountInDollars) * oneEuroIs.JPY
    // return `You give me ${amountInDollars} Dollars and I'll pay you ${amountInYen} Yen`
    return amountInYen
}

function fromYenToEuro(amountInYen){
    let amountInEuros = amountInYen / oneEuroIs.JPY
    return amountInEuros
}

//Third part
function fromYenToPound(amountInYen){
    let amountInPound = fromYenToEuro(amountInYen) * oneEuroIs.GBP
    return amountInPound
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

console.log("Eur to " + fromEuroToDollar(10) + " USD")
console.log("USD to " + fromDollarToEuro(10) + " EUR")
console.log("USD to " + fromDollarToYen(10) + " JPY")
console.log("Yen to " + fromYenToPound(10) + " GPY")



