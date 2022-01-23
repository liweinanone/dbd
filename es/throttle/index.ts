function throttle(callbackFn: Function, wait: number) {
    callbackFn()

    let startTime = Date.now()

    return function () {
        const now = Date.now()

        console.log(now - startTime)
        if (now - startTime >= wait) {
            callbackFn()
            startTime = now
        }
    }
}

const click = throttle(() => {
    console.log(0)
}, 1000)

setTimeout(() => {
    click()
}, 500)
setTimeout(() => {
    click()
}, 600)
setTimeout(() => {
    click()
}, 1100)
setTimeout(() => {
    click()
}, 1200)
setTimeout(() => {
    click()
}, 2300)
