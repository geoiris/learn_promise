'use strict';

const callPromise = require('./00_utils.js').callPromise;

let p1 = callPromise("One", 2000);
let p2 = callPromise("Two", 1000);
let p3 = callPromise("Three", 100);
let p4 = callPromise("Four", 3000);

Promise.race([p1,p2,p3,p4]).then(value => {
  console.log(value);
});

// console result
// > Promise Three finished in 100

// All promises are resolved but the promise "Three" is faster