/*
// Values and Variables 
let js = "amazing";
if (js === "amazing") alert ("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log('Caitlin');
console.log(28);

let firstName = "Caitlin";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varianble name conventions
let person = 'Cait';
let PI = 3.1415;

let cait_malloch = 'CM';
let $function = 29;

let myFirstJob = 'Teacher';
let myCurrentJob = 'Programmer';

let job1 = 'Teacher';
let job2 = 'Programmer';

console.log(myFirstJob);


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Cait');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);


let age = 28;
age = 29;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Malloch';
console.log(lastName);


// Math Operators
const now = 2037;
const ageCait = now - 1994;
const ageSarah = now - 2018;
console.log(ageCait, ageSarah);

console.log(ageCait * 2, ageCait / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Cait';
const lastName = 'Malloch';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x*= 4; //x = x * 4 = 100
x ++; // x= x + 1
console.log(x);

// Comparison Operators
console.log(ageCait > ageSarah);
console.log(ageSarah >= 18);

const isAnAdult = ageSarah >= 18;



const now = 2037;
const ageCait = now - 1994;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = ageCait + ageSarah / 2;
console.log(ageCait, ageSarah, averageAge);



const firstName = 'Caitlin';
const job = 'programmer';
const birthYear = 1994;
const year = 2022;

const caitlin = "I'm" + firstName + ', a ' + (year - birthYear) + "years old" + job + "!";
console.log(caitlin);

const caitlinNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(caitlinNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);

//If..Else Statements
const age = 15;

if(age >= 16) {
    console.log('Sarah can get her driving license. 🚗');
} else {
    const yearsLeft = 16 - age;
    console.log(`Sarah is not old enough to drive yet. Wait another ${yearsLeft} years 💔`);
};

const birthYear = 1994;

let century;
if(birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);



//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Caitlin'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am" + 23 "years old");
console.log('23' + '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //converts to 11 as a string
n = n - 1;
console.log(n); //output is 10, because the first line was converted to 11 as a string



// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Cait'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job.");
};

let height;
if(height) {
    console.log("Yay! Height is defined.");
} else {
    console.log("Height is UNDEFINED!");
};



const age = 18;
if(age === 18) console.log("You just became an adult! (strict)");
if(age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite == 23) { //22 === 23 -> FALSE
    console.log("Cool! 23 is an amazing number.");
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else {
    console.log("Number is not 23 or 7")
};

if(favourite !== 23) console.log("Why not 23?");


const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// };

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
};

//Switch statement
const day = 'Monday';

switch(day) {
    case 'Monday':
        console.log('Meditate');
        console.log('Meet friends at cafe');
        break;
    case 'Tuesday':
        console.log("Go to gym");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("Code project");
        break;
    case 'Friday': 
        console.log("Go for a walk at the ocean");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Hike");
        break;
    default:
        console.log("Not a valid day! You messed up");
};

if(day === 'Monday') {
    console.log('Meditate');
    console.log('Meet friends at cafe');
} else if (day === 'Tuesday') {
    console.log("Go to gym");
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log("Code project");
} else if (day === 'Friday') {
    console.log("Go for a walk at the ocean");
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log("Hike");
} else {
    console.log("Not a valid day! You messed up");
};


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}


//Ternary operator
const age = 23;
//age >= 18 ? console.log('I love wine 🍾🍷') : console.log('I cannot drink wine 🧃');

const drink = age >= 18 ? 'wine 🍾🍷🍇' : 'juice 🧃🍎🍊';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'juice 🧃'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'juice 🧃'.}`);
*/
