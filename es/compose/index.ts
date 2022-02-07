function compose(...args: Function[]) {
    if (args.length === 1) {
        return args[0]
    }

    return function (...params: unknown[]) {
        let result = args[0](...params)

        for (let i = 1; i < args.length; i++) {
            result = args[i](result)
        }

        return result
    }
}

function fn1(x: number) {
    return x + 1
}
function fn2(x: number) {
    return x + 1
}
function fn3(x: number) {
    return x + 1
}

const a = compose(fn1, fn2, fn3)
console.log(a(1))
