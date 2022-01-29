"use strict";
exports.__esModule = true;
exports.throttle = void 0;
function _throttle(callbackFn, wait) {
    callbackFn();
    var startTime = Date.now();
    return function () {
        var now = Date.now();
        if (now - startTime >= wait) {
            callbackFn();
            startTime = now;
        }
    };
}
function throttle(callback, wait) {
    var intervalID;
    var isWorking;
    return function () {
        if (!intervalID) {
            isWorking = false;
            intervalID = setInterval(function () {
                if (isWorking) {
                    clearInterval(intervalID);
                    intervalID = undefined;
                    return;
                }
                callback();
                isWorking = true;
            }, wait);
        }
    };
}
exports.throttle = throttle;
var click = throttle(function () {
    console.log(0);
}, 1000);
click();
setTimeout(function () {
    click();
}, 600);
