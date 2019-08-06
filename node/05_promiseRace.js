'use strict';

const callPromise = require('./00_utils.js').callPromise;

let p1 = callPromise("One", 2000);
let p2 = callPromise("Two", 1000);
let p3 = callPromise("Three", 100);
let p4 = callPromise("Four", 3000);

// The Promise Race return the result of the first terminated promise
// Here, the promise Three is faster
Promise.race([p1,p2,p3,p4]).then(value => {
  console.log(value);
});

// console result
// > Promise Three finished in 100

// All promises are resolved but the promise "Three" is faster