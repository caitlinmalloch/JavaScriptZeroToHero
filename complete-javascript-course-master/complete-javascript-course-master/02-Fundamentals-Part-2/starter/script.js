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


//Arrays
const friend1 = 'Thomas';
const friend2 = 'Heesook';
const friend3 = 'Sophie';
const friend4 = 'Klaudia';
const friend5 = 'Jordyn';
const friend6 = 'Annie';
const friend7 = 'Misuzu'

const friends = ['Thomas', 'Heesook', 'Sophie', 'Klaudia', 'Jordyn', 'Annie', 'Misuzu']; //literal syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); //array as a function

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[6] = 'Cynthia';
console.log(friends);

const firstName = 'Cait';
const Cait = [firstName, 'Malloch', 2022 - 1994, 'programmer', friends];
console.log(Cait);
console.log(Cait.length);

//Exercise
const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const years = [1988, 1972, 1982, 2010, 1992, 1975];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



//built-in array functions
const friends = ['Thomas', 'Heesook', 'Sophie', 'Klaudia', 'Jordyn', 'Annie'];

//Add elements
const newLength = friends.push('Cynthia'); //adds to the end of the array
console.log(friends);
console.log(newLength); //newLength will show the new length of the array

friends.unshift('Takako'); //adds to the start of the list

//Remove elements
const popped = friends.pop(); //removes last element of the array
console.log(popped); 
console.log(friends);

friends.shift(); //removes first element of the array
console.log(friends);

//Find index in array
console.log(friends.indexOf('Thomas'));

console.log(friends.indexOf('Bob')); //returns -1 because they are not in the array

console.log(friends.includes('Bob')); //returns false because they are not in the array

console.log(friends.includes('Thomas')); //returns true because he's a real one

if(friends.includes('Thomas')) {
    console.log(`You have a friend named Thomas`);
}


//Objects

// //array
// const caitArray = [
//     'Cait', 
//     'Malloch', 
//     2022 - 1994, 
//     'programmer', 
//     ['Thomas', 'Heesook', 'Misuzu', 'Sophie']
// ];

const caitObject = {
    firstName: 'Cait',
    lastName: 'Malloch', 
    age: 2022 - 1994,
    job: 'programmer',
    friends: ['Thomas', 'Heesook', 'Misuzu', 'Sophie', 'Klaudia', 'Jordyn', 'Annie', 'Cynthia', 'Takako', 'Tomoko']
};
console.log(caitObject);

console.log(caitObject.lastName); //retrieve key from object
console.log(caitObject['lastName']); //retrive key from object

const nameKey = 'Name';
console.log(caitObject['first' + nameKey]);
console.log(caitObject['last' + nameKey]);

console.log(caitObject.age);

const interestedIn = prompt('What do you want to know about Cait? Choose between firstName, lastName, age, job and friends.');
console.log(caitObject[interestedIn]);

if(caitObject[interestedIn]) {
    console.log(caitObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.')
}

caitObject.location = 'Canada';
caitObject['twitter'] = '@caitlinmalloch';
console.log(caitObject);

//dynamic challenge
// "Cait has 3 friends and is best friends with Heesook"

console.log(`${caitObject.firstName} has ${caitObject.friends.length} friends and is best friends with ${caitObject.friends[1]}.`)


//Object Methods
const caitObject = {
    firstName: 'Cait',
    lastName: 'Malloch', 
    birthYear: 1994,
    job: 'programmer',
    friends: ['Thomas', 'Heesook', 'Misuzu', 'Sophie'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    }, 

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year-old ${this.job} and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(caitObject.calcAge());

//console.log(caitObject['calcAge'](1994));

//Challenge
// "Cait is a 46- year old teacher and she has a drivers license"
console.log(caitObject.getSummary());


//Iteration, the for loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

//for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetitions ${rep} 🏋️‍♀️`);
}

const caitArray = [
    'Cait', 
    'Malloch', 
    2022 - 1994, 
    'programmer', 
    ['Thomas', 'Heesook', 'Misuzu', 'Sophie'],
    true
];

const types = [];

for(let i = 0; i < caitArray.length; i++) {
    //Reading from caitArray
    console.log(caitArray[i], typeof caitArray[i]);

    //Filling types array
    // types[i] = typeof caitArray[i];
    types.push(typeof caitArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');
for(let i = 0; i < caitArray.length; i++) {
    if(typeof caitArray[i] !== 'string') continue;

    console.log(caitArray[i], typeof caitArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < caitArray.length; i++) {
    if(typeof caitArray[i] !== 'number') continue;

    console.log(caitArray[i], typeof caitArray[i]);
}


const caitArray = [
    'Cait', 
    'Malloch', 
    2022 - 1994, 
    'programmer', 
    ['Thomas', 'Heesook', 'Misuzu', 'Sophie']
];

//0, 1, ..., 4
//4, 3, ..., 0

for(let i = caitArray.length - 1; i >= 0; i--) {
    console.log(i, caitArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

// The While Loop

// //for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetitions ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while(rep <= 10) {
    // console.log(`WHILE: Lifting weights repetitions ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`);
}