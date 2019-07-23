import { callPromise, assert } from './00_utils.mjs';

// Watch utils file to show the result of callPromise.

let promise = callPromise("In Error", 2000, true); //set promise in error

let expectedResult = "YOUR RESPONSE HERE...";

promise.catch(error => {
    assert(expectedResult == error, "rejected promise");    
});
