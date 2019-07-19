'use strict';

const callPromise = require('./00_utils.js').callPromise;

let p1 = callPromise("One", 2000, true); // set promise in error.
let p2 = callPromise("Two", 1000);
let p3 = callPromise("Three", 100, true); // set promise in error.
let p4 = callPromise("Four", 3000);

Promise.race([p1, p2, p3, p4]).then(value => {
  console.log(value);
}).catch(error => {
  console.log(error);
});

// console result
// > Promise Three rejected in 100

// Explain
// The promise "Three" is faster to reject so the race method return the firt result Good or Bad.
