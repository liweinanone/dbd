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
    var isPending;
    return function () {
        isPending = true;
        if (!intervalID) {
            intervalID = setInterval(function () {
                if (!isPending) {
                    clearInterval(intervalID);
                    intervalID = undefined;
                    return;
                }
                isPending = false;
                callback();
            }, wait);
        }
    };
}
exports.throttle = throttle;
var click = throttle(function () {
    console.log(0);
}, 1000);
var click2 = throttle(function () {
    console.log(2);
}, 1000);
click();
click2();
setTimeout(function () {
    click();
    click2();
}, 600);
