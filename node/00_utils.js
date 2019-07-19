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

exports.callPromise = callPromise;