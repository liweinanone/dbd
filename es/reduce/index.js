Array.prototype._reduce = function (callbackFn, initialValue) {
    let result = initialValue || this[0]
    let index = initialValue ? 0 : 1

    for (; index < this.length; index++) {
        result = callbackFn(result, this[index])
    }

    return result
}

const aa = ['a', 'b', 1, fn1]._reduce((a, b) => {
    return a + b
})
console.log(aa)

function fn1() {
    console.log(1)
}
function fn2() {
    console.log(2)
}
function fn3() {
    console.log(3)
}
function fn4() {
    console.log(4)
}

const bb = [fn1, fn2, fn3, fn4]._reduce(
    (a, b) =>
        (...args) =>
            a(b(...args))
)

// 4,3,2,1
bb()
