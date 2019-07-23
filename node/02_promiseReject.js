'use strict';

const callPromise = require('./00_utils.js').callPromise;
const assert = require('./00_utils.js').assert;

// Watch utils file to show the result of callPromise.

let promise = callPromise("In Error", 2000, true); //set promise in error

let expectedResult = "YOUR RESPONSE HERE...";

promise.catch(error => {
    assert(expectedResult == error, "rejected promise");    
});
