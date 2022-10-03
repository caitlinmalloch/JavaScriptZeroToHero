/*
'use strict'; // turns on strict mode and helps you find bugs in code

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; //cant use interface because its being used in JS
// const private = 534; // cant use private because its a js function
// const if = 23; // cant use if bc its a js function


function logger() {
    console.log('My name is Cait');
}

logger(); //will call the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


//Function declaration
const age1 = calcAge1(1994);

function calcAge1 (birthYear) {
    return 2037 - birthYear;
};

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1994);

console.log(age1, age2);



//Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

//arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1994, 'Cait'));
console.log(yearsUntilRetirement(1988, 'Thomas'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};
console.log(fruitProcessor(2,3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1994, 'Cait'));
console.log(yearsUntilRetirement(1970, 'Thomas'));
*/

