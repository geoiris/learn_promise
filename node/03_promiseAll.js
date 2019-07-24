'use strict';

const callPromise = require('./00_utils.js').callPromise;

let p1 = callPromise("100mil", 100);
let p2 = callPromise("1s", 1000);
let p3 = callPromise("2s", 2000);
let p4 = callPromise("3s", 3000);

// In this case, all promises are resolved. But not in the same time.
// So, when we want to wait that all promises are resolve before make traitement
// we have to use Promise.All()
Promise.all([p1, p2, p3, p4]).then(values => {
  console.log("All promises are finished");
  console.log(values);
});

// console result
// > All promises are finished
// > [
// >   'Promise 100mil resolved in 100',
// >   'Promise 1s resolved in 1000',
// >   'Promise 2s resolved in 2000',
// >   'Promise 3s resolved in 3000'
// > ]