'use strict';

const callPromise = require('./00_utils.js').callPromise;

// In the function callPromise, the Boolean is herre to set the promise in error.
// if it's true, we called the reject function.
// When the reject function is called the promise is in error.
let promise = callPromise("In Error", 2000, true); //set promise in error

// So, we have to use the catch method when a promise is in error.
promise.catch(error => console.log(error));

// console result 
// > Promise In Error rejected in 2000