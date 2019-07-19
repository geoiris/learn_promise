import { callPromise } from './00_utils.mjs';

let promise = callPromise("In Error", 2000, true); //set promise in error

promise.catch(error => console.log(error));

// console result 
// > Promise In Error rejected in 2000