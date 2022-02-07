function compose() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1) {
        return args[0];
    }
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var result = args[0].apply(args, params);
        for (var i = 1; i < args.length; i++) {
            result = args[i](result);
        }
        return result;
    };
    // return args.reduce((acc, fn) => {
    //     return (...args: any[]) => {
    //         return acc(fn(...args))
    //     }
    // })
}
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 1;
}
function fn3(x) {
    return x + 1;
}
var a = compose(fn1, fn2, fn3);
console.log(a(1));
