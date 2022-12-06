'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////////////
// NUMBERS
/*
console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004 hahahah
console.log(0.1 + 0.2 === 0.3); // false - error in JS

// Conversion
console.log(Number('23')); // convert string to number
console.log(+'23'); // type coersion from string to number

// Parsing
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN
console.log(Number.parseFloat('2.5rem')); // 2.5

// Check if value is Not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false


////////////////////////////////////////////
// MATH AND ROUNDING
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); // 2

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // 0...1 -> 0...(max-min) -> min...max // 2

console.log(randomInt(10, 20)); // 17

// Rounding integers
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24- floor works best for all situations

// Floating point integers (Rounding decimals)
console.log((2.7).toFixed(0)); // 3 // returns a string
console.log((2.7).toFixed(3)); // 2.700, string
console.log((2.345).toFixed(2)); // 2.35, string
console.log(+(2.345).toFixed(2)); // 2.35, number

///////////////////////////////////////////////////////////////
// THE REMAINDER OPERATOR
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5 (5 = 2 * 2 + 1)

console.log(8 % 3); // 2
console.log(8 / 3); // 2.66666666666665 (8 = 2 * 3 + 2)

console.log(6 % 2); // 0
console.log(6 / 2); // 3, no remainder

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5 (7 = 2* 3 + 1)

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
// Nth

/////////////////////////////////////////////////////////////
// NUMERIC SEPERATORS
// 287,460, 000, 000
const diameter = 287_460_000_000; // can use _ to seperate by thousands
console.log(diameter); // 287460000000, doesnt print seperators

const price = 345_99; // _ makes code easier to read
console.log(price); // 34599

const transferFee = 15_00;
const transferFee2 = 1_500;
console.log(transferFee); // 1500

const PI = 3.14_15;
console.log(PI); // 3.1415, just use _ for readability

console.log(Number('230000')); // 230000
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230, only reads until _

/////////////////////////////////////////////////////////////////
// BIGINT
console.log(2 ** 53 - 1); // biggest number JS can store: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1); // start to lose precision, 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996

// Starting in ES2019, bigint solves this problem
console.log(48326548624386846487947924797842874392); // 4.832654862438685e+37
console.log(48326548624386846487947924797842874392n); // n transforms the number to display accurately // 48326548624386846487947924797842874392n

console.log(BigInt(463284678)); // 463284678n

// Operations
console.log(10000n + 10000n); // 20000n
console.log(48264824864832674867238476n * 39217386123681286731836721n); // 1892820272915996478850242638462082968859052600877196n
// console.log(Math.sqrt(16n)); // error:  Cannot convert a BigInt value to a number

const huge = 48732846872648732648762486734827n;
const num = 23;
// console.log(huge * num); // Error: cant mix bigint and other types
console.log(huge * BigInt(num)); // 1120855478070920850921537194901021n- works

// Exceptions- logical operators and string concat
console.log(20n > 12); // true
console.log(20n === 20); // false, no type coercion with bigint
console.log(typeof 20n); // bigint
console.log(20n == 20); // true, type coercion works here

console.log(huge + 'is REALLY big!!!'); // 48732846872648732648762486734827is REALLY big!!!

// Divisions
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333


/////////////////////////////////////////////////////////////////////
// CREATING DATES
const now = new Date();
console.log(now); // Tue Dec 06 2022 15:18:06 GMT-0800 (Pacific Standard Time)

console.log(new Date('Sun Aug 02 2020 18:05:41')); // Sun Aug 02 2020 18:05:41 GMT-0700 (Pacific Daylight Time)
console.log(new Date('December 25, 2022')); // Sun Dec 25 2022 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 13:31:17 GMT-0800 (Pacific Standard Time)

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0800 (Pacific Standard Time)

console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT-0800 (Pacific Standard Time)

console.log(new Date(0)); /// Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time), earliest date avail on JS

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 16:00:00 GMT-0800 (Pacific Standard Time), 3 days later

// 3 * 24 * 60 * 60 * 1000 = 259200000 = timestamp

// Working with dates
const future = new Date(2037, 10, 19, 15, 23); // Thu Nov 19 2037 15:23:00 GMT-0800 (Pacific Standard Time)
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 (4th day of week- Thursday)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T23:23:00.000Z
console.log(future.getTime()); // 2142285780000- the timestamp

console.log(new Date(2142285780000)); //Thu Nov 19 2037 15:23:00 GMT-0800 (Pacific Standard Time)

console.log(Date.now()); //1670370110081 (timestamp)

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT-0800 (Pacific Standard Time), year and month has changed to reflect new year/date

*/
//////////////////////////////////////////////////////////
//
