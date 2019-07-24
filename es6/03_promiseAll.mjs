import { callPromise, assert } from './00_utils.mjs';

let p1 = callPromise("100mil", 100);
let p2 = callPromise("1s", 1000);
let p3 = callPromise("2s", 2000);
let p4 = callPromise("3s", 3000);

// In this exercice we want ti wait that all promises are resolved
Promise.all([p1, p2, p3, p4]).then(values => {  
  let expectedResult = null; // YOUR RESPONSE HERE => Replace null by the returned object;
  assert(JSON.stringify(expectedResult) == JSON.stringify(values), "all promise");
});
