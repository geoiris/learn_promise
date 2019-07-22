'use strict';

const callPromise = require('./00_utils.js').callPromise;

// We just call a promise without waiting response
let promise = callPromise("1,5s", 1500);
console.log(promise);

// We call a promise, when she are resolved, we log the result in console
callPromise("100mil", 100).then(resolve => console.log(resolve));
callPromise("1s", 1000).then(resolve => console.log(resolve));
callPromise("2s", 2000).then(resolve => console.log(resolve));
callPromise("3s", 3000).then(resolve => console.log(resolve));

// console result
// > Promise { <pending> } => the result is just a promise who wait to be resolve or reject. For watch the result, we have to wait with the then or catch method.
// > Promise 100mil resolved in 100
// > Promise 1s resolved in 1000
// > Promise 2s resolved in 2000
// > Promise 3s resolved in 3000