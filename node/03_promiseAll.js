'use strict';

const callPromise = require('./00_utils.js').callPromise;
const assert = require('./00_utils.js').assert;

let p1 = callPromise("100mil", 100);
let p2 = callPromise("1s", 1000);
let p3 = callPromise("2s", 2000);
let p4 = callPromise("3s", 3000);

Promise.all([p1, p2, p3, p4]).then(values => {  
  let expectedResult = null; // YOUR RESPONSE HERE => Replace null by the returned object;
  assert(JSON.stringify(expectedResult) == JSON.stringify(values), "all promise");
});
