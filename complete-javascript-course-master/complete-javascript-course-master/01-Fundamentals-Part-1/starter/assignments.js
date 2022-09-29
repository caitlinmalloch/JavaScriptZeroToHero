const country = 'Canada';
const continent = 'North America';
let population = 38000000;

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'English';

let halfPopulation = population / 2;
population++;
console.log(population);

let finlandPopulation = 6000000;

console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

const newDescription = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average.`);
};

'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

/*
const numNeighbours = Prompt('How many neighbour countries does your country have?');
if(numNeighbours === 1) {
    console.log("Only 1 border!");
} else if(numNeighbours > 1) {
    console.log("More than 1 neighbour!");
} else {
    console.log("No borders!");
};
*/

if (language == 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
};

