function throttle(callbackFn, wait) {
    callbackFn();
    var startTime = Date.now();
    return function () {
        var now = Date.now();
        console.log(now - startTime);
        if (now - startTime >= wait) {
            callbackFn();
            startTime = now;
        }
    };
}
var click = throttle(function () {
    console.log(0);
}, 1000);
setTimeout(function () {
    click();
}, 500);
setTimeout(function () {
    click();
}, 600);
setTimeout(function () {
    click();
}, 1100);
setTimeout(function () {
    click();
}, 1200);
setTimeout(function () {
    click();
}, 2300);
