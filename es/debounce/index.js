function debounce(callbackFn, wait) {
    var timerId;
    return function () {
        // if (!timerId) {
        //     callbackFn(i)
        // }
        clearTimeout(timerId);
        timerId = setTimeout(callbackFn, wait);
    };
}
var click = debounce(function () {
    console.log(Date.now() - startTime); // about 1100
}, 1000);
var startTime = Date.now();
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        click();
    }, 100);
}
