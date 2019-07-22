'use strict';

function callPromise(name, time, promiseInError) {
  if (promiseInError) {
    return new Promise(function(resolve, reject) {
      setTimeout(reject, time, `Promise ${name} rejected in ${time}`);
    });
  }

  return new Promise(function(resolve, reject) {
    setTimeout(resolve, time, `Promise ${name} resolved in ${time}`);
  });
}

 function assert(condition, exo) {
  if (!condition) {
      throw `Oh No :( - Exercice ${exo} is FAILED !`;
  }
  console.log(`Yeah - Exercice ${exo} is SUCCESS !`)
}

exports.callPromise = callPromise;
exports.assert = assert;