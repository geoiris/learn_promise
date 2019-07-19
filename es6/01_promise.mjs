import { callPromise } from './00_utils.mjs';

callPromise("100mil", 100).then(resolve => console.log(resolve));
callPromise("1s", 1000).then(resolve => console.log(resolve));
callPromise("2s", 2000).then(resolve => console.log(resolve));
callPromise("3s", 3000).then(resolve => console.log(resolve));

// console result
// > Promise 100mil resolved in 100
// > Promise 1s resolved in 1000
// > Promise 2s resolved in 2000
// > Promise 3s resolved in 3000