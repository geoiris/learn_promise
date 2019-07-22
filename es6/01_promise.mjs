import { callPromise, assert } from './00_utils.mjs';

// Watch utils file to show the result of callPromise.

//-------------- Promise ? Quesaco ? --------------------
let promise = callPromise("1,5s", 1500);
let expectedResult = "YOUR RESPONSE HERE...";
try{
    assert(promise.toString() == expectedResult, "wait promise");
}catch(error){
    console.log(error);
}

//-------------------------------------------------------
//----------- Result for callPromise ? ------------------

callPromise("100mil", 100).then(resolve => {
    // resolve is the return of callPromise
    let expectedResult = "YOUR RESPONSE HERE...";
    assert(expectedResult == resolve, "call promise 100mil");
});

callPromise("1s", 1000).then(resolve => {
    // resolve is the return of callPromise
    let expectedResult = "YOUR RESPONSE HERE...";
    assert(expectedResult == resolve, "call promise 1s");
});

callPromise("2s", 2000).then(resolve => {
    // resolve is the return of callPromise
    let expectedResult = "YOUR RESPONSE HERE...";
    assert(expectedResult == resolve, "call promise 2s");
});

callPromise("3s", 3000).then(resolve => {
    // resolve is the return of callPromise
    let expectedResult = "YOUR RESPONSE HERE...";
    assert(expectedResult == resolve, "call promise 3s");
});
