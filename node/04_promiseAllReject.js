'use strict';

const callPromise = require('./00_utils.js').callPromise;

let p1 = callPromise("100mil", 100);
let p2 = callPromise("1s", 1000);
let p3 = callPromise("errorPromise", 1000, true);
let p4 = callPromise("3s", 3000);

Promise.all([p1, p2, p3, p4])
  .then(values => {
    // Because failure, this code is never called
    console.log("All promises are finished");
    console.log(values);
  })
  .catch(err => {
    console.log("Wait all promise have failed");
    console.log(err);
  });

// Other way to write catch method
Promise.all([p1, p2, p3, p4]).then(
  values => {
    // Because failure, this code is never called
    console.log("All promises are finished");
    console.log(values);
  },
  err => {
    console.log("Wait all promise have failed");
    console.log(err);
  }
);

// console result
// > Wait all promise have failed
// > Promise errorPromise rejected in 1000