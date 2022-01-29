function _throttle(callbackFn: Function, wait: number) {
    callbackFn()
    let startTime = Date.now()

    return function () {
        const now = Date.now()
        if (now - startTime >= wait) {
            callbackFn()
            startTime = now
        }
    }
}
export function throttle(callback: Function, wait: number) {
    let intervalID: number | undefined
    let killInterval: boolean

    return function () {
        if (!intervalID) {
            killInterval = false
            intervalID = setInterval(() => {
                if (killInterval) {
                    clearInterval(intervalID!)
                    intervalID = undefined

                    return
                }
                callback()
                killInterval = true
            }, wait)
        }
    }
}
const click = throttle(() => {
    console.log(0)
}, 1000)
click()
setTimeout(() => {
    click()
}, 600)
